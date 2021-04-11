<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Scroll',
    data() {
        return {
            scroll: null
        }
    },
    props: {
        pullUpLoad: {
            type: Boolean,
            default: false
        },
        probeType: {
            type: Number,
            default: 0
        }
    },
    methods: {
        scrollTo(x, y, time) {
            this.scroll.scrollTo(x, y, time)
        },
        backToTop() {
            this.scroll.scrollTo(0, 0, 800)
        },
        finishPullUp() {
            this.scroll.finishPullUp()
        },
        refresh() {
            this.scroll && this.scroll.refresh()
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper, {
            pullUpLoad: this.pullUpLoad,
            probeType: this.probeType,
            click: true
        })
        this.scroll.on('scroll', (position) => {
            // console.log('position');
            this.$emit('scroll', position)
        })
        this.scroll.on('pullingUp', () => {
            // console.log('aaa');
            this.$emit('pullingUp')
        })
    }
  }
</script>

<style scoped>
</style>