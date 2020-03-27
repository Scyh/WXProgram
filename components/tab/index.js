Component({
  options: {
    multipleSlots: true
  },
  properties: {
    titles: {
      type: Array,
      value: []
    },
    current: {
      type: Number,
      value: 0
    },
    duration: {
      type: Number,
      value: 500
    }
  },
  data: {
    oldDuration: 500
  },
  lifetimes: {
    attached() {
      this.setData({ oldDuration: this.data.duration })
    },
    ready() {
      this.setData({ oldDuration: this.data.duration })
    }
  },
  methods: {
    handleSwiperChange(event) {
      let current = event.detail.current,
        source = event.detail.source
      if (source) {
        this.setData({ current: current })
        this.triggerEvent('swiperChange', { current })
      }
    },
    handleTitleTap(event) {
      let current = event.target.dataset.index
      this.setData({ duration: 0 })
      this.setData({ current })
      this.triggerEvent('titleChange', { current })
    },
    handleAnimationFinish() {
      this.setData({ duration: this.data.oldDuration })
    }
  }
})