const express = require("express");
const { get } = require("express/lib/response");
const Goods = require("../schemas/goods")
const Cart = require("../schemas/cart");
const { exists } = require("../schemas/goods");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is root page");
});

// 상품 목록 API_ 필터링 기능 추가(category)
router.get("/goods", async (req, res) => {
  const { category } = req.query;

  const goods = await Goods.find({ category });
  res.json({
    goods
  });
});


// 상품 상세 조회 API
router.get("/goods/:goodsId", async (req, res) => {
  const { goodsId } = req.params;

  const [goods] = await Goods.find({ goodsId: Number(goodsId) });

  res.json({
    goods
  });
});

// 장바구니 목록 조회 api
router.get("/goods/cart", async (req, res) => {

  const carts = await Cart.find();
  const goodsIds = carts.map((cart) => cart.goodsId);

  const goods = await Goods.find({ goodsId: goodsIds });

  const result = carts.map((cart) => {
    return {
      quantity: cart.quantity,
      goods: goods.find((item) => item.goodsId === cart.goodsId) 
    };
  });

  res.send({
    cart: result,
  });
});

// 장바구니 상품 추가 API
router.post("/goods/:goodsId/cart", async(req, res) => {
  const { goodsId } = req.params;
  const { quantity } = req.body;

  const existsCarts = await Cart.find({ goodsId: Number(goodsId) });
  if (existsCarts.length) {
    return res.status(400).json({ success: false, erroMessage: "이미 장바구니에 들어있는 상품입니다"});
  }

  await Cart.create({ goodsId: Number(goodsId), quantity });
  res.json({ success: true });


});

// 장바구니 상품 제거 API
router.delete('/goods/:goodsId/cart', async(req, res) => {
  const { goodsId } = req.params;

  const existsCarts = await Cart.find({ goodsId: Number(goodsId) });
  if (existsCarts.length) {
    await Cart.deleteOne({ goodsId: Number(goodsId) });
  }

  res.json({ success: true })
});

// 장바구니 수량 수정 api
router.put("/goods/:goodsId/cart", async (req, res) => {
  const { goodsId } = req.params;
  const { quantity } = req.body;

  const existsCarts = await Cart.find({ goodsId: Number(goodsId) });
  if (!existsCarts.length) {
    await Cart.create({ goodsId: Number(goodsId), quantity });
  } else {
    await Cart.updateOne({ goodsId: Number(goodsId) }, { $set: { quantity } });
  }

  res.json({ success: true });
});


// 상품 추가 API
router.post('/goods', async (req, res) => {
  const { goodsId, name, thumbnailUrl, category, price } = req.body;

  const goods = await Goods.find({ goodsId });
  if (goods.length) {
    return res.status(400).json({ success: false, erroMessage: "장바구니에 해당 상품이 없습니다." });
  }

  const createdGoods = await Goods.create({ goodsId, name, thumbnailUrl, category, price });

  res.json({ goods: createdGoods });
});

module.exports = router;
