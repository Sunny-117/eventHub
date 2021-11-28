class EventHub {
  private cache = {};
  // {
  // 报纸1:[fn1, fn2, fn3]
  // 报纸2: [fn1, fn2, fn3]
  // }
  /**
   * 把fn推进this.cache[eventName]数组
   * @param eventName
   * @param fn
   */
  on(eventName, fn) {
    this.cache[eventName] = this.cache[eventName] || []; //如果前面为真，后面就不执行
    this.cache[eventName].push(fn);
  }
  /**
   * 把this.cache[eventName]数组里面的fn全部依次调用
   * @param eventName
   */
  emit(eventName, data?) {
    (this.cache[eventName] || []).forEach((fn) => fn(data));
  }
  /**
   * 把fn从this.cache[eventName]数组里面的删除
   * @param eventName
   */
  off(eventName, fn) {
    let index = indexOf(this.cache[eventName], fn);
    if (index === undefined) return; //没有订阅
    this.cache[eventName].splice(index, 1);
  }
}
export default EventHub;

/**
 * indexOf兼容性不好，所以我自己封装一个
 * @param array
 * @param index
 */
function indexOf(array, item) {
  if (array === undefined) return -1;
  let index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      index = i;
      break;
    }
  }
  return index;
}
