<template>
    <div class="flex h-100 flex-wrap">
      <div class="loads" v-show="isload">
        <dv-loading style="width: 250px; height: 250px">Loading...</dv-loading>
      </div>
      <header class="w-100 h-10 flex j-center a-center" >
        <dv-decoration-5 :dur="10" style="position: absolute;bottom: 0;right: 0;height: 50%;" class="w-100 " />
        <div class="font-big font-weight">XX吾悦消防二级管理平台</div>
      </header>

      <div class="h-50">
        <div class="h-5">
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
      </div>

      <div class="w-95 h-90 flex flex-wrap">
        <div class="w-5 h-30 m-t0"><dv-border-box-9><span class="zi juZhong">主<br/>次<br/>力<br/>店</span></dv-border-box-9></div>
          <div class="w-95 h-31">
             <dv-border-box-12>
               <div class="p-l p-r h-85">
                  <el-table
                    :data="tableData"
                    style="width: 100%;
                    font-size: 22px;
                    color: white"
              height="280">
              <el-table-column
                fixed
                prop="date"
                label="商户"
                align="center"
                width="150">
              </el-table-column>
              <el-table-column
                prop="name"
                label="双签"
                align="center"
                width="120">
              </el-table-column>
              <el-table-column
                prop="province"
                label="出图"
                align="center"
                width="120">
              </el-table-column>
              <el-table-column
                prop="city"
                label="内审"
                align="center"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="房产技术条件"
                align="center"
                width="300">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="进场"
                align="center"
                width="120">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="实际施工"
                align="center"
                width="120">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="装修完成"
                align="center"
                width="120">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="自查自验"
                align="center"
                width="120">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="自查自验"
                align="center"
                width="120">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="自查自验"
                align="center"
                width="120">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="自查自验"
                align="center"
                width="120">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="自查自验"
                align="center"
                width="120">
              </el-table-column>
            </el-table>
               </div>
             </dv-border-box-12>
          </div>

        <div class="w-5 h-30 m-t0"><dv-border-box-9><span class="zi juZhong">主<br/>题<br/>餐<br/>饮</span></dv-border-box-9></div>
        <div class="w-95 h-31">
          <dv-border-box-12>
            <div class="p-l p-r h-85">
              <el-table
                :data="tableData"
                style="width: 100%;
                    font-size: 22px;
                    color: white"
                height="300">
                <el-table-column
                  fixed
                  prop="date"
                  label="商户"
                  align="center"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="双签"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="province"
                  label="出图"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="city"
                  label="内审"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="房产技术条件"
                  align="center"
                  width="300">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="进场"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="实际施工"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="装修完成"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="自查自验"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="自查自验"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="自查自验"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="自查自验"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="自查自验"
                  align="center"
                  width="120">
                </el-table-column>
              </el-table>
            </div>
          </dv-border-box-12>
        </div>

        <div class="w-5 h-30 m-t0"><dv-border-box-9><span class="zi juZhong">一<br/>般<br/>商<br/>户</span></dv-border-box-9></div>
        <div class="w-95 h-31">
          <dv-border-box-12>
            <div class="p-l p-r h-85">
              <el-table
                :data="tableData"
                style="width: 100%;
                    font-size: 22px;
                    color: white"
                height="300">
                <el-table-column
                  fixed
                  prop="date"
                  label="商户"
                  align="center"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="双签"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="province"
                  label="出图"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="city"
                  label="内审"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="房产技术条件"
                  align="center"
                  width="300">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="进场"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="实际施工"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="装修完成"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="自查自验"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="自查自验"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="自查自验"
                  align="center"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="zip"
                  label="自查自验"
                  align="center"
                  width="120">
                </el-table-column>
              </el-table>
            </div>
          </dv-border-box-12>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "secondProject",
      data () {
        return {
          isload:false,
          isCollapse: true,
          tableData: [{
            date: '肯德基',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '麦当劳',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '大娘水饺',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '小杨生煎',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '特步',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '安踏',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '贤合庄',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }]
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

<style  scoped>

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
  .juZhong{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 75px;
  }
  .zi{
    font-size: 25px;
    color: #f0ad4e
  }
  /deep/.el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: rgba(0, 0, 0, 0) !important;
  }
  /*透明表格*/
  /deep/ .el-table, /deep/ .el-table__expanded-cell{
    background-color: transparent;
  }
  /deep/ .el-table th,
  /deep/ .el-table tr,
  /deep/ .el-table td {
    background-color: transparent;
  }
  /deep/ .el-table thead {
    color: #409EFF;
    font-weight: 500;
    font-size: 18px;
  }

</style>
