export default function LazyLoad(ctx, scrollEvent, imgSelector) {
  // if (!ctx.data.lazyLoadCount) {
  //   ctx.setData({ lazyLoadCount: 4 });
  // };
  // var intersection = ctx.createIntersectionObserver();
  // intersection.relativeToViewport({bottom: 50}).observe(imgSelector + ctx.data.lazyLoadCount, (res) => {
  //   console.log(imgSelector + ctx.data.lazyLoadCount, res.boundingClientRect.top)
  //   if (res.boundingClientRect.top > 0) {
  //     intersection.disconnect();
  //     ctx.setData({ lazyLoadCount: ctx.data.lazyLoadCount+1 });
  //     LazyLoad(ctx, imgSelector)
  //   };
  // })
  if (!ctx.data.startIdx) {
    ctx.setData({ startIdx: 0});
  }
  let windowH = wx.getSystemInfoSync().windowHeight,
    distanceY = 100,
    startIdx = 0;
  
  wx.createSelectorQuery().selectAll(imgSelector).boundingClientRect(function (rect) {
    rect.forEach((item, index) => {
      
      if ((index > ctx.data.startIdx) && (item.top - windowH) < distanceY) {
        console.log('加载图片： ', index, (item.top - windowH))
        ctx.setData({ startIdx: index });
      }
    })
  }).exec();
};