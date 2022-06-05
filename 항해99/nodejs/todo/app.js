const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Todo = require("./models/todo.js")

mongoose.connect("mongodb://localhost/todo-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hi!");
});

// 할 일 목록 API
router.get("/todos", async (req, res) => {
  try{
    const todos = await Todo.find().sort("-order").exec();

    res.send({ todos });
  } catch(error) {
    console.log(error);
  }
});


// 할 일 추가 API
router.post("/todos", async (req, res) => {
  try {
    const { value } = req.body;
    // db에서 order를 기준으로 내림차순 : "-order"
    // 가장 최근에 저장된 order 값이 필요하다.
    const maxOrderTodo = await Todo.findOne().sort("-order").exec();
    let order = 1;

    if (maxOrderTodo) {
      order = maxOrderTodo.order + 1;
    }

    const todo = new Todo({ value, order });
    // save()도 결과값 프로미스 이기 때문에 앞에 await를 붙여준다.
    await todo.save();

    res.send({ todo });
  } catch (error) {
    console.log(error);
  }
});

// 할 일 순서 변경 API
router.patch("/todos/:todoId", async (req, res) => {
  try {
    const { todoId } = req.params;
    const { order, value, done } = req.body;

    // todoId값과 같은 다큐멘터리를 찾는다.
    const currentTodo = await Todo.findById(todoId).exec();

    if (order) {
      // 내가 바꾸려는 order값을 가진 항목
      const targetTodo = await Todo.findOne({ order }).exec();

      if(targetTodo) {
        targetTodo.order = currentTodo.order;
        await targetTodo.save();
      }
      currentTodo.order = order;

    }else if (value) {
      currentTodo.value = value;
    }else if (done !== undefined) {
      currentTodo.doneAt = done ? new Date() : null;
    }

    await currentTodo.save();

    res.send({});

  } catch(error) {
    console.log(error);
  }
});

// 할 일 삭제 API
router.delete("/todos/:todoId", async (req, res) => {
  try {
    const { todoId } = req.params;

    const todo = await Todo.findById(todoId).exec();
    
    await todo.delete();
    

    res.send({});
  } catch(error) {
    console.log(error);
  }
});



app.use("/api", bodyParser.json(), router);
app.use(express.static("./assets"));

app.listen(3000, () => {
  console.log("서버가 켜졌어요!");
});