# FEE-BaseCode
> ### This repository is my record of some basic knowledge and code that I learned and summarized at work as a primary FEE.
---

## 1. Curring-Function
+ 函数柯里化: 如果你固定某些参数，你将得到接受余下参数的一个函数（减少函数）
+ 函数柯里化就是---减少参数

## 2. Handlebars
+ `HTML = structure + data`
+ 占位符 + data
+ 类似于 `ES6` 模板字符串

## 3. 列表 (数组)
+ 栈 --- `Stack`
  - 先进后出，后进先出。从末尾压入元素，从末尾弹出元素。

+ 队列 --- `Queue`
  - 先进先出，后进后出。从末尾压入元素，从开头弹出元素。

## 4. 链表

## 5. 命令模式

  ```js
    // 命令模式
  const TV = {
    open: function () {
      console.log('OPEN');
    },
    close: function () {
      console.log('CLOSE');
    }
  }

  const openTVCommand = function (receiver) {
    this.receiver = receiver;
  }

  openTVCommand.prototype.execute = function () {
    this.receiver.open();
  }

  const setCommand = function (command) {
    command.execute();
  }

  const newTV = new openTVCommand(TV);

  setCommand(newTV);

  ```

## 6. 高阶函数
  - 函数能当做参数传递
  ```js
  const array = new Array[];
  array.prototype.sort(function(a, b) { return a - b});
  ```
  - 函数能作为return输出
  ```js
  module.exports = function test(arguments) { /*do something*/}
  function (arguments) { return text(arguments)}
  ```
  - 柯里化 / 反柯里化
  - 函数节流
  - 函数分时
  - 懒加载

## 7. 单例模式
  - 定义

    保证一个类只有一个示例，提供一个访问它的全局访问点。

  - 实现
  ```js
  var SingleTon = function (name) {
    this.name = name;
  }
  SingleTon.prototype.getName = function () {
    console.log(this.name);
  }
  SingleTon.getInstance = (function () {
    var instance = null;
    return function ( name ) {
      if ( !instance ) {
        instance = new SingleTon( name );
      }
      return instance;
    }
  })();
  ```
  - 代理模式的实现

  ```js
  var CreateDiv = function (html) {
    this.html = html;
    this.init();
  }
  CreateDiv.prototype.init = function () {
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
  }
  // 引入代理
  var ProxySingleCreateDiv = (function () {
    var instance;
    return function (html) {
      if (!instance) {
        instance = new CreateDiv(html);
      }
      return instance;
    }
  })();

  ```

## 8. 策略模式
  - 定义

  定义一系列的算法，并且封装，并且能相互替换。

  - 实现
  ```js
  class Strategiee = {
    S: function () {
      console.log('This is S function')
    },
    X: function() {
      console.log('This is X function')
    }
  }

  ```

## 9. 迭代器模式
  见 map 文件夹。
