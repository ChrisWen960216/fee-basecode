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
}

module.exports = Element;
