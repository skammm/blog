var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/blog',{useNewUrlParser: true})

//设计数据库模型
var userSchema = new Schema({
  email:{
    type:String,
    require:true,
  },
  password:{
    type:String,
    require:true
  },
  nickname:{
    type:String,
    require:true
  },
  create_Date:{
    type:Date,
    //这里不要写Date.now(),因为会即刻调用
    default:Date.now
  },
  last_modify_time:{
    type:Date,
    default:Date.now
  },
  avator:{
    type:String,
    default:'/public/img/x34.jpg'
  },
  bio:{
    type:String,
    default:''
  },
  gender:{
    type:Number,
    enum:[-1,0,1],
    default:-1
  },
  birthday:{
    type:Date
  },
  status:{
    type:Number,
    //1不可以评论
    //2不可以登陆
    //0没有权限设置
    enum:[1,2,0],
    default:0
  }
})


module.exports = mongoose.model('User',userSchema)