<template>
  <div class="w-30 h-100 right flex flex-column">
    <div class="h-50 m-b">
      <dv-border-box-13>
        <div class="item w-100 h-100">
          <div class="w-100 h-10 font-weight font-s">设备状态信息</div>
          <div class="w-100 h-90 p-tb" id="echart1"></div>
        </div>
      </dv-border-box-13>
    </div>
    <div class="h-50">
      <dv-border-box-13>
        <div class="item w-100 h-100">
          <div class="w-100 h-15 font-weight font-s">最新报警</div>
          <dv-scroll-board :config="config" class="w-100 h-85" />
        </div>
      </dv-border-box-13>
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
        rowNum: 7,
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
        ]
      }
    };
  },
  mounted() {
    var _this = this;
    this.echart();


  },
  methods: {
    
    echart() {
     
        var isSet = true; // 为了做判断：当鼠标移动上去的时候，自动高亮就被取消
      var _this = this;
      var charPiecurrentIndex = 0;
      var oldindex=0;
      
      var chart = this.$echarts.init(document.getElementById("echart1"));
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)"
        },
        legend: {
          // orient: 'vertical',
          // top: 'middle',
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 0,
          bottom: 20,
          left: "left",
          textStyle: {
            color: "#fff",
            fontSize: 12
          }
        },
        grid: {
          x: "-10%",
          y: 40,
          x2: 20,
          y2: 20
        },
        color: ["#09d0fb", "#91CC75", "#95f8fe", "#f9f390", "#ecfeb7"],
        series: [
          {
            type: "pie",
            radius: "75%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: [
              { value: 1548, name: "运行" },
              { value: 535, name: "待机" },
              { value: 510, name: "故障" },
              { value: 634, name: "维修" },
              { value: 735, name: "停机" }
            ],
            label: {
              //标识
              normal: {
                position: "outside",
                formatter: "{b}: {d}%",
                textStyle: {
                  fontSize: 12
                }
              }
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
     
      chart.setOption(option);
   
      // 鼠标移动上去的时候的高亮动画
      chart.on("mouseover", function(param) {
        isSet = false;
        clearInterval(_this.startCharts);
        // console.log("charPiecurrentIndex"+charPiecurrentIndex)        
        // console.log("dataIndex"+param.dataIndex)        

        //取消之前高亮图形
        chart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: charPiecurrentIndex
        });
        charPiecurrentIndex = param.dataIndex
        //高亮当前图形
        chart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: param.dataIndex
        });
        //显示tooltip
        chart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: param.dataIndex
        });
      });

      chart.on("mouseout",function(param){
        
      })

      //图标随窗口大小缩放
      window.addEventListener("resize", function() {
        chart.resize();
      });


    
      //自动高亮显示
      var chartHover = function() {
    // console.log(charPiecurrentIndex) 
        var dataLen = option.series[0].data.length;

        // 取消之前高亮的图形
        chart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: charPiecurrentIndex
        });
        charPiecurrentIndex = (charPiecurrentIndex + 1) % dataLen;
         
        // 高亮当前图形
        chart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: charPiecurrentIndex
        });
        // 显示 tooltip
        chart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: charPiecurrentIndex
        });
      };

      _this.startCharts = setInterval(chartHover, 2000);
      // 4、鼠标移出之后，恢复自动高亮
      chart.on("mouseout", function(param) {
        if (!isSet) {
          _this.startCharts = setInterval(chartHover, 2000);
          isSet = true;
        }
      });
    }
  }
};
</script>


<style scoped>
.item {
  padding: 0.33rem 0.2rem 0.2rem;
}
</style>
