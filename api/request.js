export default function request(url, type = 'GET', args) {

  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: url,
      data: args,
      method: type,
      dataType: 'json',
      success: function({ data, errMsg, statusCode }) {
        if (statusCode === 200) {
          resolve(data)
        } else {
          wx.showToast({
            title: errMsg || '服务器开小差啦'
          })
          resolve()
        }
      },
      fail: function(res) {
        reject(res)
      },
      complete() {
        wx.hideLoading();
      }
    })
  })
}
