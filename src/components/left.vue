<template>
  <div class="w-35 h-80 flex flex-column">
    <div class="h-50 ">
      <dv-border-box-13>
        <div class="item h-100">
          <div class="w-100 h-15 font-s font-weight">设备类型</div>
          <div class="w-100 h-85 biaoge_pai">
            <ul class="h-100">
              <li>
                <div class="liIn">
                  <div class="liIn_left">
                    <span class="bot"></span>
                    <span class="zi">设备一</span>
                  </div>
                  <div class="liIn_line">
                    <div class="line_lineIn" style="width:98.5%;"></div>
                  </div>
                  <p class="num">98.5%</p>
                </div>
              </li>
              <li>
                <div class="liIn liIn2">
                  <div class="liIn_left">
                    <span class="bot"></span>
                    <span class="zi">设备二</span>
                  </div>
                  <div class="liIn_line">
                    <div class="line_lineIn" style="width:88.5%;"></div>
                  </div>
                  <p class="num">88.5%</p>
                </div>
              </li>
              <li>
                <div class="liIn liIn3">
                  <div class="liIn_left">
                    <span class="bot"></span>
                    <span class="zi">设备三</span>
                  </div>
                  <div class="liIn_line">
                    <div class="line_lineIn" style="width:68.5%;"></div>
                  </div>
                  <p class="num">68.5%</p>
                </div>
              </li>
              <li>
                <div class="liIn liIn4">
                  <div class="liIn_left">
                    <span class="bot"></span>
                    <span class="zi">设备四</span>
                  </div>
                  <div class="liIn_line">
                    <div class="line_lineIn" style="width:40.5%;"></div>
                  </div>
                  <p class="num">40.5%</p>
                </div>
              </li>
              <li>
                <div class="liIn liIn6">
                  <div class="liIn_left">
                    <span class="bot"></span>
                    <span class="zi">设备五</span>
                  </div>
                  <div class="liIn_line">
                    <div class="line_lineIn" style="width:10.5%;"></div>
                  </div>
                  <p class="num">10.5%</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </dv-border-box-13>
    </div>
    <div class="h-50 ">
      <dv-border-box-13>
        <div class="w-100 h-100 p-tb" id="lineEchart"></div>
      </dv-border-box-13>
    </div>
  </div>
</template>

<script>
export default {
  name: "left",
  data() {
    return {};
  },
  mounted() {
    this.lineEchart();
  },
  methods: {
    lineEchart() {
      var lineEchart = this.$echarts.init(
        document.getElementById("lineEchart")
      );
      var option = {
        title: {
          text: "温度传感器采集信息",
          left: "20",
          textStyle: {
            color: "#ffffff"
          }
        },
        grid: {
          bottom: "10",
          containLabel: true
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          right: "15",
          textStyle: {
            color: "#ffffff"
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          nameTextStyle: {
            color: "#ffffff"
          },
          axisLine: {
            show: true,

            lineStyle: {
              color: "#fff"
            }
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
              fontSize: 12
            }
          },
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: true,
            symbol: ["none", "arrow"],
            symbolOffset: 12,
            lineStyle: {
              color: "#fff"
            }
          },
          axisLabel: {
            formatter: "{value} °C",
            textStyle: {
              color: "#fff",
              fontSize: 12
            }
          }
        },
        series: [
          {
            name: "最高温度",
            type: "line",
            data: [11, 11, 15, 13, 12, 13, 10],

            markPoint: {
              data: [
                { type: "max", name: "最大值", symbolSize: 40 },
                { type: "min", name: "最小值", symbolSize: 40 }
              ]
            }
          },
          {
            name: "最低温度",
            type: "line",
            data: [12, 20, 2, 5, 3, 2, 0],
            
            itemStyle: {
              normal: {
                color: "#05D1FC",   //折现点颜色
                lineStyle: {
                  color: "#05D1FC"  //折现颜色
                }
              }
            },
            markPoint: {
              data: [
                {
                  type: "max",
                  name: "最大值",
                  symbolSize: 40,
                  itemStyle: {
                    color: "#05D1FC"  //标记颜色
                  }
                },
                {
                  type: "min",
                  name: "最小值",
                  symbolSize: 40,
                  itemStyle: {
                    color: "#05D1FC"//标记颜色
                  }
                }
              ]
            }
          }
        ]
      };

      lineEchart.setOption(option);
      //图标随窗口大小缩放
      window.addEventListener("resize", function() {
        lineEchart.resize();
      });
    }
  }
};
</script>


<style scoped>
.item {
  padding: 0.33rem 0.4rem 0.2rem;
}

/*左边中间部分排行榜*/
.biaoge_pai {
  overflow: hidden;
}
.biaoge_pai ul li {
  height: 20%;
}
.biaoge_pai ul li .liIn {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  color: #fff;
  font-size: 0.06rem;
  height: 0.6rem;
}
.biaoge_pai ul li .liIn .liIn_left {
  width: 25%;
  position: relative;
  padding-left: 0.3rem;
}
.biaoge_pai ul li .liIn .liIn_left .bot {
  width: 0.2rem;
  height: 0.2rem;
  background: #91cc75;
  border-radius: 1000px;
  display: block;
  position: absolute;
  left: 0.02rem;
  top: 0;
  bottom: 0;
  margin: auto 0;
}
.biaoge_pai ul li .liIn2 .liIn_left .bot {
  background: #e7feb8;
}
.biaoge_pai ul li .liIn3 .liIn_left .bot {
  background: #fdea8a;
}
.biaoge_pai ul li .liIn4 .liIn_left .bot {
  background: #8ff9f8;
}
.biaoge_pai ul li .liIn5 .liIn_left .bot {
  background: #91cc75;
}
.biaoge_pai ul li .liIn6 .liIn_left .bot {
  background: #05d1fc;
}

.biaoge_pai ul li .liIn .liIn_line {
  width: 58%;
  height: 0.2rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2000px;
}
.biaoge_pai ul li .liIn .liIn_line .line_lineIn {
  width: 100%;
  height: 0.2rem;
  background: #91cc75;
  border-radius: 100px;
  -webkit-animation: widthMove1 2s ease-in-out;
}
.biaoge_pai ul li .liIn2 .liIn_line .line_lineIn {
  background: #e7feb8;
  -webkit-animation: widthMove2 2s ease-in-out;
}
.biaoge_pai ul li .liIn3 .liIn_line .line_lineIn {
  background: #fdea8a;
  -webkit-animation: widthMove3 2s ease-in-out;
}
.biaoge_pai ul li .liIn4 .liIn_line .line_lineIn {
  background: #8ff9f8;
  -webkit-animation: widthMove4 2s ease-in-out;
}
.biaoge_pai ul li .liIn5 .liIn_line .line_lineIn {
  background: #d890fa;
  -webkit-animation: widthMove5 2s ease-in-out;
}
.biaoge_pai ul li .liIn6 .liIn_line .line_lineIn {
  background: #05d1fc;
  -webkit-animation: widthMove6 2s ease-in-out;
}
@-webkit-keyframes widthMove1 {
  0% {
    width: 0%;
  }
  100% {
    width: 98.5%;
  }
}
@-webkit-keyframes widthMove2 {
  0% {
    width: 0%;
  }
  100% {
    width: 88.5%;
  }
}
@-webkit-keyframes widthMove3 {
  0% {
    width: 0%;
  }
  100% {
    width: 68.5%;
  }
}
@-webkit-keyframes widthMove4 {
  0% {
    width: 0%;
  }
  100% {
    width: 40.5%;
  }
}
@-webkit-keyframes widthMove5 {
  0% {
    width: 0%;
  }
  100% {
    width: 22.5%;
  }
}
@-webkit-keyframes widthMove6 {
  0% {
    width: 0%;
  }
  100% {
    width: 10.5%;
  }
}

.biaoge_pai ul li .liIn .num {
  font-family: dig;
  padding-left: 0.1rem;
}
</style>
