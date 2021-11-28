import EventHub from "./index";
const eventHub = new EventHub();
console.assert(EventHub instanceof Object === true, "eventHub是个对象");

/**
 * 订阅
 */
let called = false;
eventHub.on("xxx", () => {
  called = true;
  //   console.log("被调用");
  console.log("called:", called);
});
/**
 * 发布
 */
eventHub.emit("xxx");
