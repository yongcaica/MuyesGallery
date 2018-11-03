var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 声明一个数据集 对象
var artworkSchema = new Schema({
    name: String,
    image: String
});
// 将数据模型暴露出去
module.exports = mongoose.model('artwork', artworkSchema);