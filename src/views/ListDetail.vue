<!-- listDeatail @author lpf -->
<template>
  <div class='listDetail bscroll' ref="bscroll">
    <!-- <div class="bscroll" ref="bscroll"> -->
        <ul class="bscroll-container">
            <li class="list-title">单项目肿瘤疾病</li>
            <li class="list-bj font-green"> <img src="../assets/bz.png" alt="备注">备注</li>
            <li class="content-remark font-green">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem itaque distinctio, voluptatibus minus illo perspiciatis velit maxime soluta, ipsum reprehenderit corporis. Fuga deserunt, iure laborum vero dignissimos harum saepe nulla.</li>
            <li class="list-bj"><img src="../assets/bm.png" alt="项目编码">项目编码</li>
            <li class="content-code">自主定价</li>
            <li class="list-bj"><img src="../assets/gl.png" alt="样品要求">样品要求</li>
            <li class="content-require">专用的耗材适量</li>
            <li class="list-bj"><img src="../assets/bc.png" alt="样品保存">样品保存</li>
            <li class="content-save">室温</li>
            <li class="list-bj"><img src="../assets/sj.png" alt="报告时间">报告时间</li>
            <li class="content-time">20个工作日</li>
            <li class="list-bj"><img src="../assets/jg.png" alt="标准价格">标准价格</li>
            <li class="content-price">¥987</li>
            <li class="list-bj"><img src="../assets/ff.png" alt="检测方法">检测方法</li>
            <li class="content-pay">生物法</li>
            <li class="list-bj"><img src="../assets/lc.png" alt="临床意义">临床意义</li>
            <li class="content-significant">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi recusandae, alias odio rem enim natus laborum. Ipsum dolor expedita illo ullam. Quaerat quibusdam, laborum dolorem voluptatibus ad doloribus asperiores ducimus.</li>
            <li class="list-bj"><img src="../assets/ym.png" alt="检测目录页码">检测目录页码</li>
            <li class="content-page">31页</li>
            <li class="list-bj"><img src="../assets/tp.png" alt="申请单图片">申请单图片</li>
            <li class="content-img">
              <img src="../assets/zwsj.png" alt="申请单图片">
            </li>
        </ul>
    <!-- </div> -->
    <mt-button type="danger" size="large" class="findError" @click="findError">纠错</mt-button>
     <mt-popup
      v-model="popupVisible"
      position="center"
      modal=false>
      <div class="err-container">
        <div class="err-header">
          ID: 4242
        </div>
        <mt-field placeholder="请输入内容" type="textarea" rows="4" v-model="errContent" class="area-green"></mt-field>
        <div class="submit-container">
            <mt-button type="danger" class="submit" >提交</mt-button>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'listDetail',
  data () {
    return {
      popupVisible: false,
      errContent: '',
      list: []
    }
  },

  components: {},

  computed: {},

  mounted () {
    this.$nextTick(() => {
      let bscrollDom = this.$refs.bscroll
      setTimeout(() => {
        this.aBScroll = new BScroll(bscrollDom, {})
      }, 500)
    })
  },

  created () {
    let { id } = this.$route.params
    console.log(id)
    // todo 请求数据
  },

  methods: {
    findError () {
      this.popupVisible = true
    }
  }
}

</script>
<style>
.listDetail .mint-popup.mint-popup-center{
  border-radius: 1rem !important;
}
</style>

<style  scoped lang="scss">
.listDetail .findError.mint-button--danger.mint-button{
  border-radius: 0 !important;
}
.content-img{
  img{
    width:100%;
    margin-bottom:8rem;
  }
}
.bscroll{
    width: 100%;
    position: absolute;
    overflow: hidden;
    bottom:0;
    top: 0;
    background-color: #F5F4F9;
}

.err-container{
  width:28rem;
  height:30rem;
  border-radius:30rem !important;
  border-radius:50%;
  padding:1.5rem;
  .err-header{
    text-align: center;
    padding:3rem;
    font-size: 2rem;
  }
  .area-green{
    min-height:6rem;
    border:1px solid #ddd;
  }
  .submit-container{
    text-align:center;
    .submit{
      letter-spacing: 4px;
        // background-color:#09BB07;
        background-color:#303F9F;
        width:16rem;
        margin:1.8rem 0;
      }
  }

}
.font-green{
  color:rgb(13, 17, 41);
}
.list-bj{
    background-color: #26a2ff4d;
    // background-color: #358dcebf;
    border-radius: 4.8rem;
    color: #000;
    font-size: 1.6rem;
    padding: .8rem 0 .8rem 1rem;
    margin-top: 1rem;
    text-indent: 2rem;
    img{
        width:2rem;
        vertical-align:top;
        margin-right:.8rem;
    }
}
.listDetail{
  text-align: left;
  li{
    border-bottom:1px solid #ddd;
    &:not(.list-bj){
      padding:1.2rem;
    }
    &.list-title{
      font-size: 2rem;
      text-align: center;
      font-weight: 500;
      color: #333;
    }

  }
  .findError{
    position: fixed;
    left: 0;
    bottom:0;
    letter-spacing: 4px;
    height:50px;
    font-size: 2.2rem;
  }
}
</style>
