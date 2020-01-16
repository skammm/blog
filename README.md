# blog
use nodejs create blog ```用node写的js相当于一个服务器```
## node.js是什么
- node不是框架，不是语言，是js的运行环境，简单来说node可以解析执行js代码
- node中的js
   - EcmaScript
   - 没有Bom和Dom
   - 在node这个js执行环境中，为JS提供服务器级别的操作API
     - 例如文件的读写
     - 网络服务的构建
     - 网络通信
     - http服务器。。。

## node.js介绍

### 1.1node.js是什么
- node不是框架，不是语言，是js的运行环境，简单来说node可以解析执行js代码
- node中的js
   - EcmaScript
   - 没有Bom和Dom
   - 在node这个js执行环境中，为JS提供服务器级别的操作API
     - 例如文件的读写
     - 网络服务的构建
     - 网络通信
     - http服务器。。。
- 事件驱动、非阻塞io模型、轻量高效
- npm是由node开发的世界上最大的开源系统，把js相关包存放在npm上
- 构建于V8chrome的引擎之上

### 1.2nodejs能做什么？
- web服务器内容
  - 接口服务器
  - 游戏服务器等
- 命令行工作

***   

## 2.起步
### 2.1 node的基本使用
- node + 文件名 ```解析执行js文件夹```
- 引入核心文件读写文件
- http ```node构建一个web服务器```

### 2.2 服务器要干什么？
  - 提供对数据的服务
  - 发请求
  - 接受请求
  - 处理请求
  - 发送响应

## 3.Node中的js
  - Ecmasript
  - 核心模块
  - 第三方模块
  - 用户自定义模块

### 3.1 核心模块
 Node为js提供了很多服务器级别的API，这些API绝大多数被包装到一个具名的模块中

### 3.2 模块化
 每个文件之间互不干涉，没有全局作用域，默认是封闭的。
 #### 如何进行通信？
   有时候我们加载文件不是为了执行里面的代码，更重要的是为了里面的成员和方法。
   require 方法有两个作用：
   - 加载文件模块并执行里边的代码
   - 拿到被加载文件模块导出的接口对象```在每个模块中都提供一个对象：exports，默认是一个空对象

### 3.3 端口号
 - ip地址用来定位计算机，端口号用来定位具体的应用程序

 - 普通用户访问应用程序时，浏览器会自动申请一个端口号占用


 ## 4.Node中的模块系统

 ### 4.1 什么是模块？
  - 文件作用域
  - 通信规则
     - 加载require
     - 导出
 ### 4.2 CommonJS 模块规范
  在node中的js还有一个很重要的概念，模块系统
  - 模块作用域
  - 使用require来加载对象
  - 使用exports接口对象来导出模块中的成员 
    ```在node中，每个模块内部都有一个module对象，该model对象中有一个exports成员，默认每个模块最后都有一句：return module.exports```
 ### 4.3 require方法的加载规则
   - 优先从缓存中加载，如果缓存中已经加载过该文件，那么不会重新执行该文件，只会获取他的接口对象
   - 判断模块标识符
      - 核心模块
      - 第三方模块
      - 自己写的模块
 ### 4.4 npm命令行工具
   - npm install --version
   - npm install --global npm ```升级npm```
   - npm init -y ```跳过向导，快速生成```
   - npm install
   - npm install 包名
   - npm uninstall 包名
   - npm help ```查看使用帮助```

## 5.Express
 
 原生的http在某些方面不足以应对我们的开发需求，所以我们就使用框架来提高我们的开发效率，框架的目的就是提高效率，让我们的代码更加统一。

 ### 5.1 修改完代码自动重启
  ```npm i --global nodemon```
 ### 5.2 基本路由
  路由器
   - 请求方法
   - 请求路径
   - 处理函数
   ```app.get('/',function(req,res){})```
### 5.3 静态资源
  用于开放某些静态资源，浏览器解析到外链时能够自动获取到该资源
  ```app.use('/node_modules',express.static('./node_modules/'))```


 






