class EventHub {
  cache = {};
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
    if (this.cache[eventName] === undefined) {
      this.cache[eventName] = [];
    }
    const array = this.cache[eventName];
    array.push(fn);
  }
  /**
   * 把this.cache[eventName]数组里面的fn全部依次调用
   * @param eventName
   */
  emit(eventName) {
    let array = this.cache[eventName];
    if (array === undefined) {
      array = [];
    }
    array.forEach((fn) => {
      fn();
    });
  }
}
export default EventHub;
