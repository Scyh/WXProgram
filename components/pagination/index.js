Component({
    properties: {
        name: String,
        key: {
            type: String,
            observer: 'loadMore'
        },
        list: {
            type: Array,
            default: [],
            observer: 'reset'
        }
    },
    data: {
        loading: true,
        page: 1,
        count: 20
    },
    methods: {
        loadMore() {
            console.log(this.data.loading)
            if (this.data.loading) return
            let { page, count } = this.data
            page++
            this.setData({ page })
            this.triggerEvent('moreData', {
                page,
                count
            })
        },
        reset() {
            this.setData({ loading: false })
        }
    },
})