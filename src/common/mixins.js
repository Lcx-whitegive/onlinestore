import BackTop from 'components/content/backtop/BackTop'

export const backToTop = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backToTop() {
            this.$refs.scroll.backToTop()
          }
    }
}