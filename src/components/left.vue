<template>
  <div class="w-30 h-100 flex flex-column">
    <div class="h-100">
      <dv-border-box-13 >
<!--        项目列表行间距-->
        <div class="item h-100">
          <div class="w-100 h-10 font-big font-weight text-center">本年开业项目</div>
          <div class="w-100 h-90 biaoge_pai">
            <ul class="h-40">
              <li>
                <div class="liIn">
                  <div class="liIn_left w-50">
                    <span class="zi">兰州安宁</span>
                  </div>
                  <div class="liIn_line w-20">
                    <div class="line_lineIn " :style="{'background':computedColor(90),'width':'90%'}"></div>
                  </div>
                  <div class="text-right w-30 ">
                    <p class="num zi">11.18</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="liIn">
                  <div class="liIn_left w-50">
                    <span class="zi">安阳文峰</span>
                  </div>
                  <div class="liIn_line w-20">
                    <div class="line_lineIn" :style="{'background':computedColor(85),'width':'85%'}"></div>
                  </div>
                  <div class="text-right w-30">
                    <p class="num zi">11.28</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="liIn">
                  <div class="liIn_left w-50">
                    <span class="zi">四平铁西</span>
                  </div>
                  <div class="liIn_line w-20">
                    <div class="line_lineIn " :style="{'background':computedColor(70),'width':'70%'}"></div>
                  </div>
                  <div class="text-right w-30">
                   <p class="num zi">11.26</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="liIn">
                  <div class="liIn_left w-50">
                    <span class="zi">运城吾悦</span>
                  </div>
                  <div class="liIn_line w-20">
                    <div class="line_lineIn " :style="{'background':computedColor(65),'width':'65%'}"></div>
                  </div>
                  <div class="text-right w-30">
                    <p class="num zi">12.16</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="liIn">
                  <div class="liIn_left w-50">
                    <span class="zi">重庆铜梁</span>
                  </div>
                  <div class="liIn_line w-20">
                    <div class="line_lineIn " :style="{'background':computedColor(50),'width':'50%'}"></div>
                  </div>
                  <div class="text-right w-30">
                    <p class="num zi">12.16</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="liIn">
                  <div class="liIn_left w-50">
                    <span class="zi">石家庄长安</span>
                  </div>
                  <div class="liIn_line w-20">
                    <div class="line_lineIn " :style="{'background':computedColor(40),'width':'40%'}"></div>
                  </div>
                  <div class="text-right w-30">
                    <p class="num zi">12.23</p>
                  </div>
                </div>
              </li>
              <dv-decoration-2 style="width:360px;height:10px;" class="p-b"/>
              <li>
                <div class="liIn">
                  <div class="liIn_left w-50">
                    <span class="zi">鄂州吾悦</span>
                  </div>
                  <div class="liIn_line w-20">
                    <div class="line_lineIn " :style="{'background':computedColor(100),'width':'100%'}"></div>
                  </div>
                  <div class="text-right w-30">
                    <p class="num zi">10.28</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="liIn">
                  <div class="liIn_left w-50">
                    <span class="zi">滨州滨城</span>
                  </div>
                  <div class="liIn_line w-20">
                    <div class="line_lineIn " :style="{'background':computedColor(100),'width':'100%'}"></div>
                  </div>
                  <div class="text-right w-30">
                    <p class="num zi">10.22</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="liIn">
                  <div class="liIn_left w-50">
                    <span class="zi">大同云冈</span>
                  </div>
                  <div class="liIn_line w-20">
                    <div class="line_lineIn " :style="{'background':computedColor(100),'width':'100%'}"></div>
                  </div>
                  <div class="text-right w-30">
                    <p class="num zi">9.28</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="liIn">
                  <div class="liIn_left w-50">
                    <span class="zi">南昌进贤</span>
                  </div>
                  <div class="liIn_line w-20">
                    <div class="line_lineIn " :style="{'background':computedColor(100),'width':'100%'}"></div>
                  </div>
                  <div class="text-right w-30">
                    <p class="num zi">9.23</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
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

  },
  methods: {
    computedColor(rate){
      let color = ''
      if(rate > 89 && rate < 100){
        color = "#7f00ff"
      }else if(rate > 79 && rate < 90){
        color = "#b21f1f"
      }else if(rate > 69 && rate < 80){
        color = "#fdbb2d"
      }else if(rate > 59 && rate <70){
        color = "#2948ff"
      }else if(rate >0 && rate <60){
        color = "#36d1dc"
      }else if(rate === 100){
        color = "#24fe41"
      }
      return color
    }
  }
};
</script>


<style scoped>
.item {
  padding: 0.33rem 0.4rem 0.2rem;
}
.zi{
  font-size: 25px;
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
}
.biaoge_pai ul li .liIn .liIn_left {
  position: relative;
}
.biaoge_pai ul li .liIn .liIn_left .bot {
  width: 0.2rem;
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
  width: 40%;
  height: 0.2rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2000px;
}
.biaoge_pai ul li .liIn .liIn_line .line_lineIn {
  height: 0.2rem;
  /*background: #91cc75;*/
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
