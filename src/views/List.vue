<!-- list @author lpf -->
<template>
  <div class='list'>
    <div v-if="resultData.length>0">
       <ul>
        <li class="sec-container" v-for="val in resultData" :key="val.id" @click="lookDetail(4)">
          <div class="sec-title">
            {{val.title}}
            <img :src='imgSel()' alt="暂无图片" class="showTitle">
          </div>
          <div class="sec-content">
            <p class="content-left comtent-com">{{val.contentL}}</p>
            <p class="content-right comtent-com">{{val.contentR}}</p>
          </div>
          <div class="sec-footer">
            <p>¥{{val.price}}</p>
            <p>{{val.page}}页</p>
          </div>
        </li>
        </ul>
       <p class="no-data">没有更多数据了...</p>
    </div>
    <div v-else class="no-data-container" @click="backHome">
      <img src="../assets/zwsj.png" alt="暂无图片" class="bj-container">
      <h2>oh no , 暂无数据</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      resultData: [
        {
          id: 'num1',
          title: '打道回府环境搭建好地方',
          contentL: '阿斯顿发生放大四大法师士大夫撒地方撒旦法撒旦法第三方对方文身断发',
          contentR: 'ASFASDFSAF',
          price: 34440,
          page: 45
        },
        {
          id: 'num2',
          title: '打道回府环境搭建好地方',
          contentL: '阿斯顿发生放大四大法师士大夫撒地方撒旦法撒旦法第三方对方文身断发',
          contentR: 'ASFASDFSAF',
          price: 34440,
          page: 45
        },
        {
          id: 'num3',
          title: '打道回府环境搭建好地方',
          contentL: '阿斯顿发生放大四大法师士大夫撒地方撒旦法撒旦法第三方对方文身断发',
          contentR: 'ASFASDFSAF',
          price: 34440,
          page: 45
        }
      ]
    }
  },

  components: {},

  computed: {

  },

  mounted () {

  },

  created () {
    let { searchCase, city } = this.$route.params
    console.log(searchCase, city)
    // todo 请求数据
  },
  methods: {
    lookDetail (id) {
      const listId = id
      this.$router.push({ name: 'listDetail', params: { id: listId } })
    },
    backHome () {
      this.$router.push({ name: 'home' })
    },
    imgSel () {
      let index = Math.floor(Math.random() * 9 + 1)
      let imgSrc = `http://p20ez4smj.bkt.clouddn.com/jc${index}.png`
      return imgSrc
    }
  }
}
</script>
<style  scoped lang="scss">
.list {
  text-align: left;
  .bj-container{
    width:100%;
  }
  .sec-container {
    padding: 2rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    .sec-title {
      font-size: 1.8rem;
      .showTitle{
        width:2.4rem;
      }
    }
    .sec-content {
      overflow: hidden;
      margin: 1.4rem 0;
      font-size: 1.6rem;
      color:#666;
      .comtent-com {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .content-left {
        float: left;
        max-width: 18rem;
      }
      .content-right {
        float: right;
        max-width: 14rem;
      }
    }
    .sec-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #999;
      font-size: 1.6rem;
    }
  }
  .no-data {
    text-align: center;
    color: #303F9F;
    font-size: 1.4rem;
    margin: 2rem;
  }
  .no-data-container{
    text-align: center;
    h2{
      color:#999;
    }
  }
}
</style>
