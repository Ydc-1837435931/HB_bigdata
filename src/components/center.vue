<template>
  <div class="w-65 h-80 flex flex-column">
    <div class="h-50 m-l m-r">
      <dv-border-box-13>
        <div class="w-100 h-100 p-tb" id="echart"></div>
      </dv-border-box-13>
    </div>

    <div class="h-50 m-l m-r">
      <dv-border-box-13>
        
        <div id="center" class="w-100 h-100 item">
          <div class="w-100 h-15 font-s font-weight">设备状态 <span class="font color-gray">（ 蓝色：运行中，黄色：异常 ）</span></div>
          <div id="list" class="parent h-85 w-100">
            <div id="child1" class="child comminChild flex flex-wrap j-sb">
             
                <div class="li_item h-100 p-b" v-for="(item , index) in list" :key="index" >
                  <img v-if="item.state == true" class="w-30 h-100" style="padding-right:10px;" src="@/assets/img/yunxing.png" alt />
                  <img v-else class="w-30 h-100" style="padding-right:10px;" src="@/assets/img/weixiu.png" alt />
                  <div class="w-70  flex flex-column j-sb text-left">
                    <div >ID： <span>{{item.id}}</span></div>
                    <div >名称： <span>{{item.name}}</span></div>
                    <div >位置： <span>{{item.address}}</span></div>
                  </div>
                </div>
           
            </div>
            <div id="child2" class="child comminChild flex flex-wrap"></div>
          </div>
        </div>
      </dv-border-box-13>
    </div>
  </div>
</template>

<script>
export default {
  name: "center",
  data() {
    return {
      list:[
        {id:"011515",name:"温度传感器",address:"一号楼16层1603",state:true},
        {id:"011515",name:"温度传感器",address:"一号楼16层1603",state:true},
        {id:"011515",name:"温度传感器",address:"一号楼16层1603",state:false},
        {id:"011515",name:"温度传感器",address:"一号楼16层1603",state:true},
        {id:"011515",name:"温度传感器",address:"一号楼16层1603",state:true},
        {id:"011515",name:"温度传感器",address:"一号楼16层1603",state:true},
        {id:"011515",name:"温度传感器",address:"一号楼16层1603",state:false},
        {id:"011515",name:"温度传感器",address:"一号楼16层1603",state:false},
        {id:"011515",name:"温度传感器",address:"一号楼16层1603",state:true},
        {id:"011515",name:"温度传感器",address:"一号楼16层1603",state:true},
        {id:"011515",name:"温度传感器",address:"一号楼16层1603",state:false},
        {id:"011515",name:"温度传感器",address:"一号楼16层1603",state:true},
  
      ]
    };
  },
  mounted() {
    console.log(document.getElementById("list"));
    this.echart();
    var parent = document.getElementById("list");
    var child1 = document.getElementById("child1");
    var child2 = document.getElementById("child2");
    child2.innerHTML = child1.innerHTML; // 无缝衔接

    setInterval(function() {
      if (parent.scrollTop >= child1.scrollHeight) {
        parent.scrollTop = 0;
      } else {
        parent.scrollTop++;
      }
    }, 50);
  },
  methods: {
    echart() {
      var echart = this.$echarts.init(document.getElementById("echart"));
      var option = {
        color: ["#CA0000"],
        title: {
          text: "最近一周报警",
          left: "20",
          textStyle: {
            color: "#ffffff"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "2020-12-2",
              "2020-12-3",
              "2020-12-4",
              "2020-12-4",
              "2020-12-4",
              "2020-12-4",
              "2020-12-4"
            ],

            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              symbol: ["none", "arrow"],
              symbolOffset: 12,
              lineStyle: {
                color: "#fff"
              }
            },
            z: 10
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "报警数",
            axisLine: {
              show: true,
              symbol: ["none", "arrow"],
              symbolOffset: 12,
              lineStyle: {
                color: "#fff"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: 12
              }
            }
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            label: {
              show: true,
              color: "#fff",
              position: "top"
            },
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      };

      echart.setOption(option);
      //图标随窗口大小缩放
      window.addEventListener("resize", function() {
        echart.resize();
      });
    }
  }
};
</script>


<style scoped>
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
</style>
