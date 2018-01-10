<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click='changeImage'>click</div>
    <ImageList :list='imagelist' :selected='imagelistIdx' @selected='selectImage'></ImageList>
    <img :src='imagelist[imagelistIdx]' width="160px">
  </div>
</template>

<script>
import ImageList from '@/components/imageList/ImageList'

export default {
  name: 'Image',
  data () {
    return {
      msg: 'routing Image',
      imagelist: ['static/AY5AyWB.png', 'static/kamo.jpg', 'static/kasima.png'],
      imagelistIdx: 0
    }
  },
  methods: {
    changeImage () {
      this.imagelistIdx++
      this.imagelistIdx = this.imagelistIdx % this.imagelist.length
    },
    selectImage (idx) {
      this.imagelistIdx = idx
    }
  },
  components: { ImageList }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
