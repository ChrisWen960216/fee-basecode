# this
## 调用位置
函数的调用位置
## 绑定规则
+ 独立函数调用，默认规则

    ```js
    var a = 2;
    function foo () { console.log(this.a); }
    foo(); // 2
    ```

+ 隐式绑定

    ```js
    function foo () { console.log(this.a); }
    var obj = { a: 2, foo: foo}
    obj.foo(); // 2
    ```
对象属性引用链中只有最后一层在调用位置中起作用

+ 显式绑定

    ```js
    function foo () { console.log(this.a); }
    var obj = { a: 2 };
    foo.call( obj );
    ```
传人一个原始值(String, Bolean, Number)会被转换成对象形式。

+ Function.prototype.bind
