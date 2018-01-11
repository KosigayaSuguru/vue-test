<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li @click='movieSize(50)' :class='{ now : sizeType === 50}'>small</li>
      <li @click='movieSize(75)' :class='{ now : sizeType === 75}'>normal</li>
      <li @click='movieSize(100)' :class='{ now : sizeType === 100}'>large</li>
    </ul>
    <div @click='changeMovie'>click</div>
    <MovieList :list='movieList' :selected='movieListIdx' @selected='selectMovie'></MovieList>
    <iframe :width='width' :height='height' :src='movieList[movieListIdx]' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
</template>

<script>
import MovieList from '@/components/movieList/MovieList'

export default {
  name: 'Movie',
  data () {
    return {
      msg: 'routing Movie',
      movieList: ['https://www.youtube.com/embed/vKZHnNF-v_Y?autoplay=1&rel=0', 'https://www.youtube.com/embed/vpH42sJ8t9c?autoplay=1&rel=0'],
      movieListIdx: 0,
      width: 854 / 2,
      height: 480 / 2,
      sizeType: 50
    }
  },
  methods: {
    changeMovie () {
      this.movieListIdx++
      this.movieListIdx = this.movieListIdx % this.movieList.length
    },
    selectMovie (idx) {
      this.movieListIdx = idx
    },
    movieSize (size) {
      this.width = 854 * (size / 100)
      this.height = 480 * (size / 100)
      this.sizeType = size
    }
  },
  components: { MovieList }
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
.now {
  background-color: gray;
  color: white;
}
a {
  color: #42b983;
}
</style>
