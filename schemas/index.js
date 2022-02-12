const mongoose = require("mongoose");


// ignoreUndefined : true => 몽고디비로 넘어온 undefined를 더이상 찾지않게함. find메서드는 어떻게든 undefined를 찾으려고하기때문에
const connet = () => {
  mongoose
    .connect("mongodb://localhost:27017/nodejs_dev_01", {
      ignoreUndefined: true,
    })
    .catch((err) => console.error(err));
};

module.exports = connet;
