class Storage {
    constructor() {

    }

    get(key, isAlert, cb) {
        wx.getStorage({
            key: key,
            success(val) {
                cb(val)
            },
            fail() {},
        })
    }

    getSync(key) {
        let result = null;
        try {
            result = wx.getStorageSync(key)
        } catch(err) {
            console.log('err: ', e)
        }

        return result
    }

    set(key, data, isAlert, cb) {

        

        // wx.setStorage({
        //     key,
        //     data,
        //     success() {
        //         !!isAlert && wx.showToast({
        //             title: '加入购物车成功',
        //             icon: 'success',
        //             duration: 1200
        //         });
        //         cb && cb();
        //     },
        //     fail() {
        //         !!isAlert && wx.showToast({
        //             title: '加入购物车失败',
        //             icon: 'none',
        //             duration: 1200
        //           })
        //     }
        // })
    }

    remove(key, isAlert) {
        wx.removeStorage({
            key,
            success(res) {
                console.log('删除存储', res)
            },
            fail(res) {
                !!isAlert && wx.showToast({
                    title: '从购物车删除失败',
                    icon: 'none',
                    duration: 1200
                  })
            }
        })
    }
}

export default Storage