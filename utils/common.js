export function throttle(fn, time) {
  var startTime = null;
  return function() {
    if (!startTime) startTime = new Date()
    var currTime = new Date();
    console.log(currTime)
    if ((currTime - startTime) > time) {
      fn.apply(this, arguments);
      startTime = currTime;
    }
  }
}

