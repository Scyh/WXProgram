Component({
    properties: {
        checked: {
            type: Boolean,
            value: false
        }
    },

    methods: {
      handleChecked: function() {
        this.triggerEvent('check', { checked: this.data.checked })
      }
    }
})