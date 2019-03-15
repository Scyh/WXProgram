Page({
    data: {
        swiper: [
            "http:////img.alicdn.com/imgextra/i1/188124207/O1CN0104aPMi1gwqkVK7Z54_!!0-item_pic.jpg_2200x2200Q50s50.jpg_.webp",
            "http:////img.alicdn.com/imgextra/i4/188124207/O1CN01eH4Tkq1gwqkXesnzN-188124207.jpg_2200x2200Q50s50.jpg_.webp",
            "http:////img.alicdn.com/imgextra/i4/188124207/O1CN01mpspbT1gwqkVD2mou-188124207.jpg_2200x2200Q50s50.jpg_.webp",
            "http:////img.alicdn.com/imgextra/i1/188124207/O1CN01XqoFWL1gwqkVJemW5-188124207.jpg_2200x2200Q50s50.jpg_.webp",
            "http:////img.alicdn.com/imgextra/i1/188124207/O1CN01FFRc5d1gwqkWbrRIJ-188124207.jpg_2200x2200Q50s50.jpg_.webp"
        ],
        currSwiper: 1,
    },
    onLoad() {},
    swiperChange(ev) {
        this.setData({currSwiper: ev.detail.current + 1})
    },
})