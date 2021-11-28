import EventHub from "./index";
const eventHub = new EventHub();
console.assert(EventHub instanceof Object === true, "eventHub是个对象");

/**
 * 订阅
 */
let called = false;
eventHub.on("xxx", (y) => {
  called = true;
  //   console.log("被调用");
  // console.log("called:", called);
  console.assert(y === "今天林志玲结婚了");
});
/**
 * 发布
 */
eventHub.emit("xxx", "今天林志玲结婚了");

const eventHub2 = new EventHub();
let called2 = false;
const fn1 = () => {
  called2 = true;
};
eventHub.on("yyy", fn1);
eventHub.off("yyy", fn1); // 订阅了之后马上取消，再发布.所以called2=true不应该执行
eventHub.emit("yyy");
setTimeout(() => {
  console.log(called2); //应该是false
}, 1000);
