<template>
  <div class="w-65 h-100 flex flex-column">
    <div class="h-40 m-l m-r">
      <dv-border-box-13>
        <div class="w-100 h-100 p-tb" id="echart"></div>
      </dv-border-box-13>
    </div>

    <div class="h-60 m-l m-r">
      <div class="hello">
        <div class="w-100 h-100">
          <dv-border-box-11
            title="全国省会飞线图"
            style="width: 100%; height: 515px"
            class="box-13"
          >
            <dv-flyline-chart-enhanced
              :config="Flylineconfig"
              style="width: 100%; height: 100%"
              class="chinaMap"
              :dev="true"
            />
          </dv-border-box-11>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { points } from "../js/points";
  import { lines } from "../js/lines";

export default {
  name: "center",
  data() {
    return {
      // 飞线配置
      Flylineconfig: {
        // 飞线点
        points: points,
        // 飞线
        lines: lines,
        line: {
          width: 2,
        },
        text: {
          show: false,
        },
        bgImgSrc: require("../assets/img/china.png"),
      },
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
      const echart = this.$echarts.init(document.getElementById("echart"));
      const option = {
        color: ["#CA0000"],
        title: {
          text: "最近一周报警",
          left: "20",
          textStyle: {
            color: "#ffffff",
            fontSize: 23
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
</style>
