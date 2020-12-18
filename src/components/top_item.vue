<template>
  <div class="w-100 h-20  flex j-sb">
    <div class="top_item  m-r w-25 h-100">
      <dv-border-box-13>
        <div class="item flex flex-column h-100 j-sb">
          <div class="font-weight font-m">设备总数</div>
          <div class="font-weight font-l color-blue">39 <span class="font-s">台</span></div>
          <div class="color-gray font flex j-sb flex-wrap"><span>正常：13</span><span>故障：13</span><span>维修：13</span><span >停机：13</span> </div>
        </div>
        
      </dv-border-box-13>
    </div>
    <div class="top_item  m-r w-25 h-100">
      <dv-border-box-13>
        <div class="item flex flex-column h-100 j-sb">
          <div class="font-weight font-m">传感器设备总数</div>
          <div class="font-weight font-l color-blue">39 <span class="font-s">台</span></div>
          <div class="color-gray font flex j-start"><span>高端设备：13</span><span class="p-lr">其他设备：13</span> </div>
        </div>
        
      </dv-border-box-13>
    </div>
    <div class="top_item  m-r w-25 h-100">
      <dv-border-box-13>
        <div class="item flex flex-column h-100 j-sb">
          <div class="font-weight font-m">设备维修总数</div>
          <div class="font-weight font-l color-blue">39 <span class="font-s">台</span></div>
          <div class="color-gray font flex j-start"><span>高端设备：13</span><span class="p-lr">其他设备：13</span> </div>
        </div>
        
      </dv-border-box-13>
    </div>
    <div class="top_item  m-r w-25 h-100">
      <dv-border-box-13>
        <div class="item flex flex-column h-100 j-sb">
          <div class="font-weight font-m">计量校准信息</div>
          <div class="font-weight font-l color-blue">39 <span class="font-s">台</span></div>
          <div class="color-gray font flex j-start"><span>高端设备：13</span><span class="p-lr">其他设备：13</span> </div>
        </div>
        
      </dv-border-box-13>
    </div>
  </div>

</template>

<script>
export default {
  name: 'top_item',
  data () {
    return {
      
    }
  }
}
</script>


<style scoped>
.item{
  padding: 0.33rem 0.4rem 0.2rem;
}
</style>
