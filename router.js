//注册，登陆，退出路由
//新建话题，删除话题，修改话题，查看话题列表
var express = require('express');

var router = express.Router();
var md5 = require('blueimp-md5');

var User = require('./models/user');

router.get('/',function(req,res){
  res.render('index.html',{
    user:req.session.user
  });
})

router.get('/login',function(req,res){
  res.render('login.html')
})
router.post('/login',function(req,res){
  var body = req.body;

  User.findOne({
    email:body.email,
    password:md5(md5(body.password))
  },function(err,user){
    if(err){
      return res.status(500).json({
        err_code:500,
        message:'server error'
      })
    }
    if(!user){
      return res.status(200).json({
        err_code:1,
        message:'邮箱或密码错误'
      })
    }
    req.session.user = user;
    res.status(200).json({
      err_code:0,
      message:'Ok'
    })
  })
})
router.get('/register',function(req,res){
  res.render('register.html')
})


router.post('/register',function(req,res){
  var body = req.body;
  User.findOne({
    $or:[
      {email:body.email},
      {nickname:body.nickname}
    ]
  },function(err,data){
    if(data){
      //邮箱或者密码已存在
      return res.status(200).json({
        err_code:1,
        message:'email or name is exits'
      });
    }
    body.password = md5(md5(body.password));
    new User(body).save(function(err,user){
      if(err){
        return res.status(500).json({
          err_code:500,
          message:'Server error'
        })
      }
      
      res.status(200).json({
        err_code:0,
        message:'Ok'
      })
    })

    
  })
})

router.get('/logout',function(req,res){
  req.session.user = null;
  res.redirect('/')
})


module.exports = router;