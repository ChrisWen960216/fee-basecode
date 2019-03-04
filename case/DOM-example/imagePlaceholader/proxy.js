/* Created By ChrisWen
 * 17/11/15
 * 使用虚拟代理完成图片占位符需求
 */

const myImage = (function() {
  const imgNode = document.createElement('img');
  document.body.appendChild(imgNode);
  return {
    setSrc: function(src) {
      imgNode.src = src;
    }
  };
})();

const proxyImage = (function() {
  const img = new Image();
  img.onload = function() {
    myImage.setSrc(this.src);
  };
  return {
    setSrc: function(src) {
      myImage.setSrc('../../src/img/favicon.ico');
      img.src = src;
    }
  };
})();
proxyImage.setSrc('../../src/img/rain.jpg');
