<!--  -->
<template>
  <div class='near'>
    <mt-badge size="normal" color="#888" class="findedItem" v-for="(val,index) in lookedList" :key="index" @click.native="$emit('nearFn',val)">{{val}}</mt-badge>
  </div>
</template>

<script>
export default {
  name: 'near',
  props: {
    lookedList: Array
  },
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  mounted () {},

  created () {},

  methods: {

  }
}

</script>
<style  scoped lang="scss">
  .near{
    padding:1rem;
    .findedItem{
      margin-right: 1rem;
      margin-bottom:1rem;
    }
  }
</style>
