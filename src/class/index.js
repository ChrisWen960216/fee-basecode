'use strict';

class Rectangle{
  constructor(height,weight){
    this.height = height;
    this.weight = weight
  }

  get area(){
    return this.calcArea()
  }

  set area(_area){
    console.log(_area);
  }

  calcArea(){
    return this.height * this.weight
  }
}

const A = new Rectangle(100,200);
console.log(A.area);
A.area = 100;
console.log(A.calcArea())