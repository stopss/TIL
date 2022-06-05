const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    // value: 할일하기
    value: String,
    // doneAt : 할 일 체크 시간
    doneAt: Date,
    // 
    order: Number
});

// todoId는 고유한 값이어야 한다. 그래서 _id값을 사용하려 한다.
// mongoose에서 virtual은 mongodb에 저장되지 않은 속성
// 가상 속성 "todoId"를 만든다
// this는 가상에 부착되는 문서
TodoSchema.virtual("todoId").get(function () {
    return this._id.toHexString();
});
TodoSchema.set("toJSON",{
    virtuals:true,
});

module.exports = mongoose.model("Todo", TodoSchema);