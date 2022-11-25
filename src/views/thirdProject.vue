<template>
  <div class="flex h-100 flex-wrap">
    <div class="loads" v-show="isload">
      <dv-loading style="width: 250px; height: 250px">Loading...</dv-loading>
    </div>
    <header class="w-100 h-10 flex j-center a-center" >
      <dv-decoration-5 :dur="10" style="position: absolute;bottom: 0;right: 0;height: 50%;" class="w-100 " />
      <div class="font-big font-weight">XX吾悦消防三级管理平台</div>
    </header>

    <div class="h-50">
      <el-menu router
               :default-active="this.$router.path"
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               background-color="#06164A"
               text-color="#fff"
               active-text-color="#ffd04b"
               :collapse="isCollapse">
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">消防管理平台首页</span>
        </el-menu-item>
        <el-menu-item index="/secondProject">
          <i class="el-icon-s-grid"></i>
          <span slot="title">吾悦消防管二级理平台</span>
        </el-menu-item>
        <el-menu-item index="/thirdProject">
          <i class="el-icon-s-grid"></i>
          <span slot="title">吾悦消防管理三级平台</span>
        </el-menu-item>
      </el-menu>
    </div>

    <div class="w-95 h-90 flex flex-column  ">
      <div class="w-100 h-10 flex">
        <div class="w-30 h-100 flex m-l1 ">
          <div class="w-50">
              <dv-border-box-7>
                <div class="grid-content1 juZhong">节 点</div>
                <div class="grid-content juZhong">2022.11.1</div>
              </dv-border-box-7>
          </div>
          <div class="w-50">
              <dv-border-box-7>
                <div class="grid-content1 juZhong">进 度</div>
                <div class="grid-content juZhong">是/否</div>
              </dv-border-box-7>
          </div>
        </div>

        <div class="w-30 h-100 flex m-l1 ">
          <div class="w-50">
            <dv-border-box-7>
              <div class="grid-content1 juZhong">取证日期</div>
              <div class="grid-content juZhong">2022.11.1</div>
            </dv-border-box-7>
          </div>
          <div class="w-50">
            <dv-border-box-7>
              <div class="grid-content1 juZhong">复 验</div>
              <div class="grid-content juZhong">2022.11.5</div>
            </dv-border-box-7>
          </div>
        </div>

        <div class="w-30 h-100 flex m-l1 ">
          <div class="w-100">
            <dv-border-box-10>
              <div class="grid-content1 juZhong">消防模式</div>
              <div class="grid-content juZhong">中庭/步行街</div>
            </dv-border-box-10>
          </div>
        </div>
      </div>

      <div class="w-100 h-90">

        <div class="w-100 h-20">
          <dv-border-box-12>
            <div class="w-100 h-100 flex">
              <div class="w-5 h-100"><span class="zi juZhong p-t">消<br/>防<br/>系<br/>统</span></div>
              <div class="w-95 h-100"></div>
            </div>
          </dv-border-box-12>
        </div>


        <div class="w-100 h-20">
          <dv-border-box-12>
            <div class="w-100 h-100 flex">
              <div class="w-5 h-100"><span class="zi juZhong p-t">沟<br/>通<br/>协<br/>调</span></div>
              <div class="w-95 h-100"></div>
            </div>
          </dv-border-box-12>
        </div>

        <div class="w-100 h-20">
          <dv-border-box-12>
            <div class="w-100 h-100 flex">
              <div class="w-5 h-100"><span class="zi juZhong p-t">风<br/>险<br/>业<br/>态</span></div>
              <div class="w-95 h-100"></div>
            </div>
          </dv-border-box-12>
        </div>

        <div class="w-100 h-20">
          <dv-border-box-12>
            <div class="w-100 h-100 flex">
              <div class="w-5 h-100"><span class="zi juZhong p-t">进<br/>度<br/>风<br/>险</span></div>
              <div class="w-95 h-100"></div>
            </div>
          </dv-border-box-12>
        </div>

        <div class="w-100 h-20">
          <dv-border-box-12>
            <div class="w-100 h-100 flex">
              <div class="w-5 h-100"><span class="zi juZhong p-t">审<br/>批<br/>协<br/>商</span></div>
              <div class="w-95 h-100"></div>
            </div>
          </dv-border-box-12>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "thirdProject",
      data () {
        return {
          isload:false,
          isCollapse: true,
        }
      },
      created(){
        this.fnload();//加载
      },
      mounted() {
      },
      methods:{
        fnload() {
          this.isload = true;
          const timeout = setTimeout(() => {
            this.isload = false;
          }, 500);
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>
<style !important scoped>
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
    background: url(../assets/img/head_bg.png);
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
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .grid-content1{
    font-size: 27px;
    color: #f0ad4e;
    padding-top: .166667rem;
  }
  .grid-content{
    font-size: 25px;
    color: white;
    /*padding-left: .466667rem;*/
    padding-top: .166667rem;
  }
  .juZhong{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .zi{
    font-size: 25px;
    color: #F5E90C;
  }
</style>
