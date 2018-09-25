<!-- home @author lpf -->
<template>
  <div class='home'>
    <div class="pos-area">
      <span>当前城市:</span>
      <span>{{cityName}}</span>
      <span class="changeCity" @click="changeCity">[切换城市]</span>
      <img src="../assets/wz.png" alt="位置" class="icon-wz"  @click="changeCity">
    </div>
    <div class="search-container">
      <mt-field  placeholder="请输入查询关键字" v-model.trim="searchData"></mt-field>
       <img src="../assets/fdj.png" alt="搜索" class="icon-fdj">
    </div>
    <mt-button type="primary" size="large" class="search" @click="search(searchData)">查询</mt-button>
    <div>
       <p class="nearFind">最近搜索</p>
      <Near :lookedList="lookedList" @nearFn="search"/>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import Near from '../components/Near'
import { Toast } from 'mint-ui';
export default {
  name: 'home',
  props: ['cityName', 'shouldChangeCity'],
  data () {
    return {
      searchData: '',
      lookedList: ['张撒', 'a京东方', 'dfds']
    }
  },

  components: {
    Near
  },

  computed: {},

  mounted () {
    this.$nextTick(() => {
      if(this.shouldChangeCity){
          this.baiduLocation()
      }
    })
  },

  created () {
    // this.$get("posts")
    //     .then(res=>{
    //       console.log(res)
    //     })
  },

  methods: {
    search (val) {
      if( val == '' || val == null ){
          Toast({
            message:'查询内容不能为空!!',
            iconClass:'mint-toast-icon mintui mintui-field-warning',
            duration: 1000
          });
          return;
      }
      const searchCase = val
      const city = this.cityName
      this.$router.push({ name: 'list', params: {searchCase, city} })
    },
    baiduLocation () {
      this.$parent.shouldChangeCity = true
      let _that = this
        // 百度地图定位
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(116.331398, 39.897445);
        map.centerAndZoom(point, 12);
        var geoc = new BMap.Geocoder();
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() === BMAP_STATUS_SUCCESS) {
                console.log(r.point);
                geoc.getLocation(r.point, function (rs) {
                    var addComp = rs.addressComponents;
                    console.log(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
                    if (_that.shouldChangeCity) {
                        _that.$parent.cityName = addComp.city.replace('市', '');
                    }
                });
            }
            else {
                console.log('failed' + this.getStatus());
            }
        }, {enableHighAccuracy: true});
    },
    changeCity(){
      this.$router.push({ name: 'city'})
    }
  }
}

</script>
<style>
  .home input.mint-field-core{
      padding-left:4rem !important;
    }
  .mint-toast-icon.mint-toast-icon.mintui.mintui-field-warning{
    font-size:4rem !important;
  }
</style>

<style  scoped lang="scss">
.home {
  text-align: left;
  .pos-area {
    font-size: 1.6rem;
    color: #fff;
    padding: 1.4rem;
    background: #3F51B5;
    position:relative;
    .icon-wz{
      position: absolute;
      right:1rem;
      top:1.2rem;
      width:2.4rem;
    }
  }
  .search-container{
    position:relative;
    .icon-fdj{
      position: absolute;
      top:1.2rem;
      left:2rem;
      width:2.4rem;
    }
  }
  .changeCity{
    color:#fff;
    margin-left: 1rem;
    font-size: 1.2rem;
  }
  .label-text {
    font-size: 1.6rem;
    margin: 1.4rem;
    color: #666;
  }
  .search {
    width: 94%;
    margin: 2.6rem auto;
    letter-spacing: 4px;
    background-color: #303F9F;
    // background-color: #1aad19;
  }
  .nearFind {
    margin-left: 1rem;
    color: #999;
    margin-bottom: 1rem;
  }
}
</style>
