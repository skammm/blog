# blog
use nodejs create blog
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

## 起步
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



 






