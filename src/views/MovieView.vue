<template>
  <main>
    <HeaderComponent />
    <h1>{{ movie.title }}</h1>
    <img
      :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
      alt="Movie poster"
    />
    <p>{{ movie.overview }}</p>
  </main>
</template>

<script>
// @ is an alias to /src
import { getOneMovieDetails } from "@/services/ApiMovieDb.js";

export default {
  name: "MovieView",
  data() {
    return {
      movie: {},
      id: this.$route.params.id,
    };
  },
  mounted() {
    this.oneMovie(this.id);
  },
  methods: {
    async oneMovie(id) {
      const responses = await getOneMovieDetails(id);
      const datas = await responses.json();
      this.movie = datas;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/CSS/variables.scss";
@import "@/assets/CSS/resetCSS.scss";
@import "@/assets/CSS/communStyle.scss";

section#section-popular {
  height: fit-content;
  padding-top: 10px;
  padding-bottom: 40px;
  background-color: $section-bg-color;

  div#container-section-popular {
    overflow-x: auto;
    white-space: nowrap;
    padding: 20px 0;
  }
}
</style>
