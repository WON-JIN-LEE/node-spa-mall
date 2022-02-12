const express = require("express");
const Goods = require("../schemas/goods");
const router = express.Router();

// 전체 상품 조회 API
router.get("/goods", async (req, res) => {
  const { category } = req.query;
  console.log(category);
  const goods = await Goods.find({ category });
  res.json({ goods });
});

// 개별 상품 조회 API
router.get("/goods/:goodsId", async (req, res) => {
  const { goodsId } = req.params;
  const [detail] = await Goods.find({ goodsId: Number(goodsId) });

  res.json({ detail });
});

// 상품 생성 API
router.post("/goods", async (req, res) => {
  const { goodsId, name, thumbnailUrl, category, price } = req.body;

  const goods = await Goods.find({ goodsId });

  //DB에 해당 데이터가 없을 때 처리구문
  if (goods.length) {
    return res
      .status(400)
      .json({ success: false, errorMessage: "이미 있는 데이터 입니다." });
  }

  const createGoods = await Goods.create({
    goodsId,
    name,
    thumbnailUrl,
    category,
    price,
  });

  res.json({ goods: createGoods });
});

// 여기서 만든 미들웨어router를 모듈로 만들어 내보내겠다. 외부에서 참조할 수 있다.
module.exports = router;
