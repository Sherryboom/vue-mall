import {debounce} from "common/utils";

export const itemListenerMixin = {
  data(){
    return{
      itemImgListener: null
    }
  },
  mounted(){
    // 监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh)

    this.itemImgListener = () => refresh()
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  }
}

import BackTop from "components/content/backTop/BackTop";
// 不把组件拿过来也能成功运行，有什么理由要拿过来吗？
export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return{
      isShowBackTop: false,
    }
  },
  methods:{
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    backTopShow(position){
      this.isShowBackTop = (-position.y) > 1000
    }
  }
}
