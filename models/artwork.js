var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 声明一个数据集 对象
var artworkSchema = new Schema({
    name: String,
    image: String,
    description: String
});
// 将数据模型暴露出去
module.exports = mongoose.model('Artwork', artworkSchema);     


/*
  上面的代码也可以写成：
  var Artwork = mongoose.model('Artwork', artworkSchema);
  module.exports = Artwork;
  这里的artworkSchema是一个schema，而Artwork是一个model，这个model可以有很多methods，比如Artwork.findById()等等。
*/