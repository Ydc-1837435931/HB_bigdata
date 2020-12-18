<template>

  <div id="app" class="flex h-100 flex-wrap">
    <!-- 加载动画 -->
    <div class="loads" v-show="isload">
      <dv-loading style="width: 250px; height: 250px">Loading...</dv-loading>
    </div>

    <header class="w-100 h-10 flex j-center a-center">
      <dv-decoration-5 :dur="10" style="position: absolute;bottom: 0;right: 0;height: 50%;" class="w-100 " />
      <div class="font-big font-weight">环保设备监控云平台</div>
    </header>
    <div class="p w-100 h-90 flex">
      <div class="w-70 h-100  flex j-sb flex-wrap">
        <topItem></topItem>
        <left></left>
        <center></center>
      </div>
      <right></right>
    </div>
    
    
  </div>
</template> 

<script>
export default {
  name: "App",
  data () {
    return {
      isload:false,
    }
  },
  created(){
    this.fnload();//加载
  },
  methods:{
    fnload() {
      this.isload = true;
      const timeout = setTimeout(() => {
        this.isload = false;
      }, 3000);
    },
  }
};
</script>

<style !important>
.loads{
  background: #06164A;
  z-index: 999;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0%;
  top: 0%;
  background-size:cover;
  display: flex;
  justify-content: center;
  align-items: center;
  
}	

header{
  background: url(assets/img/head_bg.png);
  background-size: 100% 100%;
  position: relative;

}

/* 媒体查询  */
@media screen and (max-width: 1024px) {
  html {
    font-size: 42px !important;
  }
}

@media screen and (min-width: 1920px) {
  html {
    font-size: 80px !important;
  }
}

/* 主题色 */
.color-blue{color: #1FE9E8;}
.color-gray{color: #CDEAF6;}




</style>
