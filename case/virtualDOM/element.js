/** Created By ChrsWen
 *  18/02/05
 *  虚拟DOM
 */

class Element {
  constructor(tagName, props, children) {
    this.tagName = tagName;
    this.props = props;
    this.children = children;
  }

  // 渲染dom
  render() {
    const { props, tagName, children = [] } = this;
    const el = document.createElement(tagName);
    // 设置Element属性
    for (const propName in props) {
      const propValue = props[propName];
      el.setAttribute(propName, propValue);
    }

    children.forEach((child) => {
      // 递归创建子节点
      const childEl = (child instanceof Element) ? child.render() : document.createTextNode(child);
      el.appendChild(childEl);
    });
    return el;
  }
}

module.exports = Element;
