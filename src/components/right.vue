<template>
  <div class="w-28 h-100 right flex flex-column">
    <div class="h-45 ">
      <dv-border-box-11 title="一 消 概 况">
        <div class="item w-100 h-10  p-t "/>
        <div class="item w-100 h-90  p-t ">
          <el-tabs :tab-position="tabPosition" v-model="tableTabsValue" class="h-100 ">
            <el-tab-pane
              :key="item.name"
              v-for="(item,index) in tableTabs1"
              :label="item.title"
              :name="item.name"
            >
              <div style="width: 100%;height: 300px">
                <el-row>
                  <el-col :span="8">
                    <dv-border-box-7>
                      <div class="grid-content1 juZhong">节 点</div>
                      <div class="grid-content juZhong">2022.11.1</div>
                    </dv-border-box-7>
                  </el-col>
                  <el-col :span="8">
                    <dv-border-box-7>
                      <div class="grid-content1 juZhong">实 际</div>
                      <div class="grid-content juZhong">未通过</div>
                    </dv-border-box-7>
                  </el-col>
                  <el-col :span="8">
                    <dv-border-box-7>
                      <div class="grid-content1 juZhong">复 验</div>
                      <div class="grid-content juZhong">2022.11.3</div>
                    </dv-border-box-7>
                  </el-col>
                </el-row>
                <dv-border-box-7 style="height:194px;padding-top: 9px">
                  <el-row>
                    <el-col :span="24">
                      <div style="height: 130px">
                      <el-table
                        :data="tableData"
                        max-height="180"
                        @row-click="tiaoZhuan"
                        style="width: 100%;
                               font-size: 22px;
                               color: white">
                        <el-table-column
                          prop="address"
                          label="问题描述">
                        </el-table-column>
                      </el-table>
                      </div>
                    </el-col>
                  </el-row>
                </dv-border-box-7>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </dv-border-box-11>
    </div>

    <div class="h-55">
      <dv-border-box-11 title="重 点 事 项"  :color="['#BFD3FF']" style="font-weight: bold!important;font-size: 18px">
        <div class="item w-100 h-100">
          <div class="w-100 h-15 p-t">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane
                :key="item.name"
                v-for="(item,index) in tableTabs"
                :label="item.title"
                :name="item.name" >
              </el-tab-pane>
            </el-tabs>
          </div>
          <dv-scroll-board :config="config" class="w-100 h-70" @click="tiaoZhuan"/>
          <div class="w-100 h-15">
            <el-tabs v-model="activeName" @tab-click="handleClickquyu">
              <el-tab-pane label="西北区域" name="xiBei"></el-tab-pane>
              <el-tab-pane label="华中区域" name="huaZHong"></el-tab-pane>
              <el-tab-pane label="东北区域" name="dongBei"></el-tab-pane>
              <el-tab-pane label="华北区域" name="huaBei"></el-tab-pane>
              <el-tab-pane label="华南区域" name="huaNan"></el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </dv-border-box-11>
    </div>
  </div>
</template>

<script>
export default {

  name: "right",
  data() {
    return {
      config: {
        startCharts:"",
        header: ["列1", "列2", "列3"],
        headerBGC: "#018DCE",
        evenRowBGC: "#000D4A",
        rowNum: 6,
        data: [
          ["行1列1", "行1列2", "行1列3"],
          ["行2列1", "行2列2", "行2列3"],
          ["行3列1", "行3列2", "行3列3"],
          ["行4列1", "行4列2", "行4列3"],
          ["行5列1", "行5列2", "行5列3"],
          ["行6列1", "行6列2", "行6列3"],
          ["行7列1", "行7列2", "行7列3"],
          ["行8列1", "行8列2", "行8列3"],
          ["行9列1", "行9列2", "行9列3"],
          ["行10列1", "行10列2", "行10列3"]
        ],
        carousel: 'single',
      },
      erxiaojiedian:"11月1日",
      activeName: 'second',
      tabPosition: 'top',
      tableTabsValue:'4',
      tableTabs1:[{
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
      tableTabs:[{
        title:'宝鸡吾悦',
        name:'1',
      },{
        title:'西北沛西',
        name:'2',
      },{
        title:'兰州安宁',
        name:'3',
      },{
        title:'乌鲁木齐',
        name:'4',
      }],
      huaZHong:[{
        title:'郑州荥阳',
        name:'1'
      },{
        title:'鄂州',
        name:'2'
      },{
        title:'安阳',
        name:'3'
      },{
        title:'许昌魏州',
        name:'4'
      }],
      dongBei:[{
        title:'长春绿园',
        name:'1'
      },{
        title:'长春北湖',
        name:'2'
      },{
        title:'四平铁西',
        name:'3'
      },{
        title:'沈阳中街',
        name:'4'
      }],
      tableData: [{
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        address: '上海市普陀区金沙江路 1519 弄'
      }]
    };
  },
  mounted() {
    var _this = this;
  },
  methods: {
    tiaoZhuan(){
      this.$router.push('/thirdProject')
      this.$allapi.getinfo().then((res) => {
          console.log(res.data)
      })
    },
    handleClick(row) {
      console.log(row.name +"!!!!!");
      const {config} = this
      if(row.name == 1){
        this.config.data = [
          ["数据更新", "数据更新", "数据更新"],
          ["数据更新", "数据更新", "数据更新"],
          ["数据更新", "数据更新", "数据更新"],
          ["数据更新", "数据更新", "数据更新"],
          ["数据更新", "数据更新", "数据更新"],
          ["数据更新", "数据更新", "数据更新"],
          ["数据更新", "数据更新", "数据更新"],
          ["数据更新", "数据更新", "数据更新"],
          ["数据更新", "数据更新", "数据更新"],
          ["数据更新", "数据更新", "数据更新"]
        ]
      }else if(row.name == 2){
        this.config.data = [
          ["数据", "数据", "数据"],
          ["数据", "数据", "数据"],
          ["数据", "数据", "数据"],
          ["数据", "数据", "数据"],
          ["数据", "数据", "数据"],
          ["数据", "数据", "数据"],
          ["数据", "数据", "数据"],
          ["数据", "数据", "数据"],
          ["数据", "数据", "数据"],
          ["数据", "数据", "数据"]
        ]
      }
      this.config = {...this.config}
    },
    handleClickquyu(row){
        if(row.name === 'huaZHong'){
          this.tableTabs = []
          this.tableTabs = this.huaZHong.concat();
        }else if(row.name === 'dongBei'){
          this.tableTabs = this.dongBei.concat();
        }else {
          this.tableTabs = this.tableTabs;
        }
    },
  }
};
</script>

<style scoped>
.item {
  padding: 0.33rem 0.2rem 0.2rem;
}
/deep/.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: rgba(0, 0, 0, 0) !important;
}
/deep/ .el-tabs__item{
  font-size: 20px !important;
  color: #46b8da;
  border-color: #1a5773;
}
/deep/ .el-tabs__item:hover{
  font-size: 22px !important;
  color: #f0ad4e;
}
.border11 text.dv-border-box-11-title[fill] {
  fill: #02d9fd;
  font-weight: bold!important;
}
.grid-content{
  font-size: 20px;
  color: white;
  /*padding-left: .466667rem;*/
  padding-top: .166667rem;
}
.grid-content1{
  font-size: 18px;
  color: #f0ad4e;
  padding-top: .066667rem;
}
.grid-content3{
  font-size: 18px;
  color: #f0ad4e;
  padding-left: .166667rem;
}
/deep/ .el-table, /deep/ .el-table__expanded-cell{
  background-color: transparent;
}
/deep/ .el-table th,
/deep/ .el-table tr,
/deep/ .el-table td {
  background-color: transparent;
}
/deep/ .el-table thead {
  color: #fdbb2d;
  font-weight: 500;
  font-size: 18px;
}
.juZhong{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
