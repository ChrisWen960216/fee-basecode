# this
## 调用位置
函数的调用位置
## 指向
+ 对象方法调用，this指向对象
    ```js
    const obj = {
      a: 1,
      getA: function() {
        console.log(this === obj);
        console.log(this.a);
      }
    }
    obj.getA();
    ```
+ 普通函数调用，指向window
    ```js
    window.name = 'GlobalName';
    const getName = function() {return this.name}
    getName();//GlobalName
    ```
+ 构造器调用，指向这个对象
    ```js
    const myClass = function() {
      this.name = 'obj';
    }
    const obj = new myClass();
    obj.name // obj
    ```
+ call 和 apply 可以动态改变this的指向
    ```js
    const obj1 = {
      name: 'ChrisWen',
      getName: function() {
        return this.name;
      }
    }

    const obj2 = {
      name: 'ChristianWen'
    }

    obj1.getName(); // ChrisWen
    obj1.getName.call(obj2); //ChristianWen
    ```
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
