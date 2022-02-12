const mongoose = require("mongoose");

// required: true, 필수 값인가 unique: true, 고유 값인가 (중복 X)
const goodsSchema = new mongoose.Schema({
  goodsId: {
    type: Number,

    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  thumbnailUrl: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
});

// mongoose.model("Goods", goodsSchema);
// 1.모델을 만드는데 첫번째 인자는 몽고디비 컬렉션의 이름, 두번째는 도큐먼트를 지정한 스키마를 넘긴다.
// 2.컬렉션 이름을 대문자로 넘겨도 robo3t에서는 소문자로 표기됨
module.exports = mongoose.model("Goods", goodsSchema);
