<template>
  <div class="w-70 h-100 ">
    <div class="h-60 ">
      <dv-border-box-11 title="商 铺">
        <div class="h-15 w-95 m-l m-r p-t1">
          <el-tabs v-model="tableTabsValue" class="p-t0">
            <el-tab-pane
              :key="item.name"
              v-for="(item,index) in tableTabs"
              :label="item.title"
              :name="item.name"
            >
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="h-85 w-95 m-l m-r p-t">
          <el-table
            :data="tableData"
            class="w-100"
            @row-click="diJi"
            :row-style="{height:'46px'}"
            :cell-style="{padding:'0px'}"
            style="font-size: 22px;color: #ff0000"
          >
            <el-table-column
              prop="date"
              label=""
              align="center"
              min-width="50"
              >
            </el-table-column>
            <el-table-column
              prop="name"
              label="一般商户"
              align="center"
              class="w-30">
              <template slot-scope="scope">
                <div style="color: #d890fa">
                  <dv-percent-pond :config="config1" style="width:180px;height:28px;padding-top: 2px;"/>
                  {{66}}/{{100}}
              </div>
            </template>
            </el-table-column>
            <el-table-column
              prop="address"
              class="w-30"
              align="center"
              label="主题餐饮">
              <template slot-scope="scope">
                <div style="color: #1FE9E8">
                  <dv-percent-pond :config="config2" style="width:180px;height:32px;" />
                  {{75}}/{{100}}
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="address"
              class="w-30"
              align="center"
              label="主次力店">
              <template slot-scope="scope">
                <div style="color: #f0ad4e">
                  <dv-percent-pond :config="config3" style="width:180px;height:32px;" />
                  {{82}}/{{100}}
                </div>
              </template>
            </el-table-column>
          </el-table>
          <div class="">
            <el-row>
              <el-col :span="4">
                <spa style="font-size: 22px;color: #ff0000;padding-top: .466667rem;padding-left: .566667rem;">房产技<br/><span style="padding-left: .566667rem;">术条件</span></spa>
              </el-col>
              <el-col :span="4" class="p-l0">
                <dv-percent-pond :config="config1" style="width:180px;height:30px;"/>
                <spa style="font-size: 22px;color: #d890fa;text-align:right;padding-left: .966667rem;">{{66}}/{{100}}</spa>
              </el-col>
              <el-col :span="3" class="m-t0">
                <spa style="font-size: 22px;color: #ff0000;padding-left: .766667rem;padding-top: .666667rem;">进场</spa>
              </el-col>
              <el-col :span="4">
                <dv-percent-pond :config="config2" style="width:180px;height:32px;" />
                <spa style="font-size: 22px;color: #1FE9E8;text-align:right;padding-left: .966667rem;">{{75}}/{{100}}</spa>
              </el-col>
              <el-col :span="2" class="m-l">
                <spa style="font-size: 22px;color: #ff0000;padding-left: .266667rem;padding-top: .266667rem;">实际<br/><span style="padding-left: .266667rem;">施工</span></spa>
              </el-col>
              <el-col :span="5">
                <dv-percent-pond :config="config3" style="width:180px;height:32px;" />
                <spa style="font-size: 22px;color: #f0ad4e;text-align:right;padding-left: .966667rem;">{{82}}/{{100}}</spa>
              </el-col>
            </el-row>
            <el-divider></el-divider>
          </div>
            <el-table
              :data="tableData1"
              class="w-100"
              :row-style="{height:'40px'}"
              :cell-style="{padding:'0px'}"
              style="font-size: 22px;color: #ff0000"
              :show-header="status"
              @row-click="diJi"
            >
              <el-table-column
                prop="date"
                label=""
                align="center"
                min-width="50"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="一般商户"
                align="center"
                class="w-30">
                <template slot-scope="scope">
                  <div style="color: #d890fa">
                    <dv-percent-pond :config="config1" style="width:180px;height:28px;padding-top: 10px" />
                    {{66}}/{{100}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                class="w-30"
                align="center"
                label="主题餐饮">
                <template slot-scope="scope">
                  <div style="color: #1FE9E8">
                    <dv-percent-pond :config="config2" style="width:180px;height:32px;" />
                    {{75}}/{{100}}
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                class="w-30"
                align="center"
                label="主次力店">
                <template slot-scope="scope">
                  <div style="color: #f0ad4e">
                    <dv-percent-pond :config="config3" style="width:180px;height:32px;" />
                    {{82}}/{{100}}
                  </div>
                </template>
              </el-table-column>
            </el-table>
        </div>
      </dv-border-box-11>
    </div>

    <div class="h-30">
      <div class="hello">
        <div class="w-100 h-100">
          <dv-border-box-11
            title="二消验收/开业检"
            style="width: 100%; height: 350px"
            class="box-13"
          >
            <div class="h-25 w-95 m-l m-r p-t1">
              <el-tabs v-model="tableTabsValue" class="p-t0">
                <el-tab-pane
                  :key="item.name"
                  v-for="(item,index) in tableTabs"
                  :label="item.title"
                  :name="item.name"
                >
                </el-tab-pane>
              </el-tabs>
            </div>
            <div class="h-70 w-100 m-l m-r p-t">
              <el-row class="h-10 w-100" >
                <el-col :span="24"><div class="grid-content">二消验证</div></el-col>
              </el-row>
              <el-row class="h-30 w-100 p-t" v-on:click.native="diJi">
                <el-col :span="3" class="grid-co m-l">取证占比<br/><el-divider/>{{82}}/{{100}}</el-col>
                <el-col :span="5" ><dv-percent-pond :config="config3" style="width:160px;height:40px;" /></el-col>
                <el-col :span="2" class="grid-co">问题数<br/><el-divider/>{{82}}/{{100}}</el-col>
                <el-col :span="4" ><dv-percent-pond :config="config3" style="width:160px;height:40px;" /></el-col>
                <el-col :span="5" class="p-l p-t0"><div class="grid-co">节点{{this.erxiaojiedian}}</div></el-col>
                <el-col :span="3" class="p-t0"><div class="grid-co">逾期{{1}}天</div></el-col>
              </el-row>
              <el-row class="h-10 p-t">
                <el-col :span="24"><div class="grid-content">开业检</div></el-col>
              </el-row>
              <el-row class="h-30 w-100 p-t m-t" v-on:click.native="diJi">
                <el-col :span="3" class="grid-co m-l">开业检占比<br/><el-divider/>{{82}}/{{100}}</el-col>
                <el-col :span="5" ><dv-percent-pond :config="config3" style="width:160px;height:40px;" /></el-col>
                <el-col :span="2"><div class="grid-co">问题数<br/><el-divider/>{{82}}/{{100}}</div></el-col>
                <el-col :span="4"><dv-percent-pond :config="config3" style="width:160px;height:40px;" /></el-col>
                <el-col :span="5" class="p-l p-t0"><div class="grid-co">节点{{this.erxiaojiedian}}</div></el-col>
                <el-col :span="3" class="p-t0"><div class="grid-co">逾期{{2}}天</div></el-col>
              </el-row>
            </div>
          </dv-border-box-11>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "center",
  data() {
    return {
      status:false,
      size:'',
      tableTabsValue:'4',
      tableTabs:[{
        title:'兰州安宁',
        name:'1',
        content:'兰州安宁商铺'
      },{
        title:'安阳文峰',
        name:'2',
        content:'安阳文峰商铺'
      },{
        title:'四平铁西',
        name:'3',
        content:'四平铁西商铺'
      },{
        title:'山西运城',
        name:'4',
        content:'山西运城商铺'
      }],
      tableData: [{
        date: '双签',
      }, {
        date: '出图',
      }, {
        date: '内审',
      }],
      tableData1: [{
        date: '装修完成',
      }, {
        date: '自查自验',
      }],
      config1:{
        value: 66,
        localGradient: true
      },
      config2:{
        value: 75,
        localGradient: true
      },
      config3:{
        value: 82,
        localGradient: true
      },
      erxiaojiedian:"11月1日"
    };
  },
  mounted() {

  },
  methods: {
    diJi(){
      console.log("点击事件")
      this.$router.push('/secondProject')
    }
  }
};
</script>

<style scoped>
/deep/  .el-tabs__item{
    font-size: 20px !important;
    color: #46b8da;
    border-color: #1a5773;
  }
/deep/  .el-tabs__item:hover{
    font-size: 22px !important;
    color: #f0ad4e;
  }
.item {
  padding: 0.33rem 0.4rem;
}
/* 头部标题 */
.head {
  list-style: none;
  margin: 0;
  padding: 0;
}
.head li {
  float: left;
  width: 200px;
  line-height: 40px;
  text-align: center;
}
.parent {
  overflow: hidden;
}
/*设置的子盒子高度大于父盒子，产生溢出效果*/
.child {
  height: auto;
  list-style: none;
  margin: 0;
  padding: 0;
}
.child li {
  text-align: center;
}
.li_item {
  width: 33.3%;
  display: flex;
}
.box-13 {
  margin: 0 auto;
  position: relative;
  background-color: rgb(0,13,74);
}
.chinaMap {
  position: absolute;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}
/*最外层透明*/
/deep/ .el-table, /deep/ .el-table__expanded-cell{
  background-color: transparent;
}
/* 表格内背景颜色 */
/deep/ .el-table th,
/deep/ .el-table tr,
/deep/ .el-table td {
  background-color: transparent;
}
/* 删除表格下最底层的横线 */
::v-deep .el-table td,.building-top .el-table th.is-leaf {
  border-bottom:  1px solid #007ACC;
}
/* 表格表头字体颜色 */
/deep/ .el-table thead {
  color: #fdbb2d;
  font-weight: 500;
  font-size: 18px;
}
.grid-content{
  font-size: 22px;
  color: #fdbb2d;
  padding-left: .166667rem;
}
.grid-co{
  font-size: 22px;
  color: white;
  padding-left: .066667rem;
  /*padding-top: .066667rem;*/
}
.el-divider--horizontal{
  margin:  0px 0;
}
</style>
