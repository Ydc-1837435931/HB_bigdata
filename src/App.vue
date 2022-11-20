<template>
  <router-view></router-view>
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
      }, 2000);
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
