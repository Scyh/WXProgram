Component({
    data: {
        commodity: {
            img: "http:////gw.alicdn.com/bao/uploaded/i3/188124207/TB2h53sg9hlpuFjSspkXXa1ApXa_!!188124207.jpg_200x200Q50s50.jpg",
            stock: 4284,    // 总库存
            selection: [    // 选择条件
                {
                    title: "颜色",
                    category: [
                        {
                            name: "A款/棉汗布/深麻灰",
                            img: "",
                            stock: {
                                S: 215,
                                M: 522,
                                L: 246,
                                XL: 148,
                                XXL: 22
                            },
                            // price: 69,
                        },
                        {
                            name: "A款/棉汗布/咖啡",
                            img: "",
                            stock: {
                                S: 254,
                                M: 43,
                                L: 96,
                                XL: 531,
                                XXL: 41
                            }
                            // price: 69,
                        },
                        {
                            name: "A款/棉汗布/粉红",
                            img: "",
                            stock: {
                                S: 0,
                                M: 0,
                                L: 0,
                                XL: 0,
                                XXL: 0
                            },
                        },
                        {
                            name: "A款/竹节棉/浅麻灰",
                            img: "",
                            stock: {
                                S: 0,
                                M: 0,
                                L: 0,
                                XL: 0,
                                XXL: 0
                            },
                        },
                        {
                            name: "A款/棉汗布/粉红",
                            img: "",
                            stock: 61,
                        },
                        {
                            name: "A款/棉汗布/深麻灰",
                            img: "",
                            stock: {
                                S: 0,
                                M: 0,
                                L: 0,
                                XL: 0,
                                XXL: 0
                            },
                        },
                        {
                            name: "备用1",
                            img: "",
                            stock: {
                                S: 0,
                                M: 0,
                                L: 0,
                                XL: 0,
                                XXL: 0
                            },
                        },
                        {
                            name: "备用2",
                            img: "",
                            stock: {
                                S: 0,
                                M: 0,
                                L: 0,
                                XL: 0,
                                XXL: 0
                            }
                        },
                    ]
                },
                {
                    title: "尺码",
                    category: [
                        {
                            name: "S"
                        },
                        {
                            name: "M"
                        },
                        {
                            name: "L"
                        },
                        {
                            name: "XL"
                        },
                        {
                            name: "XXL"
                        },
                    ]
                }
            ]
        },
        selected: {}
    },
    lifetimes: {
        attached() {
          console.log('attached')
        },
    
        detached() {
          
        },
    },
    pageLifetimes: {
        show() {
            console.log('show')
        },
        hide() {
          // 页面被隐藏
        },
        
    },
    methods: {
        prevent: () => { return false }
    }
})