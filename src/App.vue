<template>

  <div id="app" class="flex h-100 flex-wrap">
        <!-- 加载动画 -->
    <div class="loads" v-show="isload">
      <dv-loading style="width: 250px; height: 250px">Loading...</dv-loading>
    </div>

    <header class="w-100 h-10 flex j-center a-center">
      <dv-decoration-5 :dur="10" style="position: absolute;bottom: 0;right: 0;" class="w-100 h-50" />
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

<style>
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



.font{ font-size: 0.16rem; } /* 8 */
.font-s{ font-size: 0.266667rem; }
.font-m{ font-size: 0.32rem }
.font-l{ font-size: 0.373333rem }
.font-big{ font-size: 0.48rem }
.font-weight{ font-weight: bold!important; }

.block{ display: block; }
.inlineblock{ display: inline-block; }
.text-center{ text-align: center; }
.text-left{ text-align: left; }
.text-right{ text-align: right; }

.flex{ display: flex; }
.flex-column{ flex-direction: column; }
.flex-row{ flex-direction: row; }
.flex-wrap{ flex-wrap: wrap; }
.flex-nowrap{ flex-wrap: nowrap; }
.flex-shrink{flex-shrink: 0;}
.j-start{ justify-content: flex-start; }
.j-center{ justify-content: center; }
.j-end{ justify-content: flex-end; }
.j-sb{ justify-content: space-between; }
.a-center{ align-items:center; }
.a-start{ align-items: flex-start; }
.a-end{ align-items:flex-end; }

/* 宽度 */
.w-5{ width: 5%; } 
.w-10{ width: 10%; } 
.w-15{ width: 15%; } 
.w-20{ width: 20%;} 
.w-25{ width: 25%; } 
.w-30{ width: 30%; }
.w-35{ width: 35%; }
.w-40{ width: 40%; }
.w-45{ width: 45%; }
.w-50{ width: 50%; }
.w-55{ width: 55%; }
.w-60{ width: 60%; }
.w-65{ width: 65%; }
.w-70{ width: 70%; }
.w-75{ width: 75%; }
.w-80{ width: 80%; }
.w-85{ width: 85%; }
.w-90{ width: 90%; }
.w-95{ width: 95%; }
.w-100{width: 100%;}

.h-5{ height: 5%; } 
.h-10{ height: 10%; } 
.h-15{ height: 15%; } 
.h-20{ height: 20%;} 
.h-25{ height: 25%; } 
.h-30{ height: 30%; }
.h-35{ height: 35%; }
.h-40{ height: 40%; }
.h-45{ height: 45%; }
.h-50{ height: 50%; }
.h-55{ height: 55%; }
.h-60{ height: 60%; }
.h-65{ height: 65%; }
.h-70{ height: 70%; }
.h-75{ height: 75%; }
.h-80{ height: 80%; }
.h-85{ height: 85%; }
.h-90{ height: 90%; }
.h-95{ height: 95%; }
.h-100 {height: 100%;}

/* 10px */
.p{padding: .266667rem;} 
.p-l{padding-left: .266667rem;}
.p-t{padding-top: .266667rem;}
.p-r{padding-right: .266667rem;}
.p-b{padding-bottom: .266667rem;}
.p-tb{padding: .266667rem 0;}
.p-lr{padding: 0 .266667rem;}

.m{margin: .266667rem;}
.m-l{margin-left: .266667rem;}
.m-t{margin-top: .266667rem;}
.m-r{margin-right: .266667rem;}
.m-b{margin-bottom: .266667rem;}
.m-tb{margin: .266667rem 0;}
.m-lr{margin: 0 .266667rem;}
</style>
