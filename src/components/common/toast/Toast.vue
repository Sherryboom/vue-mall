<template>
<div class="toast" v-show="isShow">
  {{message}}
</div>
</template>

<script>
export default {
  name: "Toast",
  props:{

  },
  data(){
    return {
      message:'',
      isShow:false
    }
  },
  methods:{
    show(message='默认提示文字', duration=2000){
      this.message = message
      this.isShow = true
      setTimeout(()=>{
        this.isShow = false
        this.message = ''
      }, duration)
    }
  }

}
</script>

<style scoped>
.toast{
  /*本身样式*/
  width: 100px;
  height: 40px;
  font-size: 15px;
  color: #fff;
  background-color:  #000;
  z-index:999;

  /*定位样式*/
  position: absolute;
  margin: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
