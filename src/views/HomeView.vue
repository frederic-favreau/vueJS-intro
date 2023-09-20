<template>
  <main>
    <HeaderComponent />
    <section id="section-popular">
      <h1>Films populaires</h1>
      <div id="container-section-popular" class="row-limit-size">
        <MovieCard
          v-for="movie in movies"
          :key="movie.id"
          :title="movie.title"
          :release_date="movie.release_date"
          :img="movie.poster_path"
          :id="movie.id"
        />
      </div>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import MovieCard from "@/components/MovieCard.vue";
import { getListMoviesByPage } from "@/services/ApiMovieDb.js";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "HomeView",
  components: {
    MovieCard,
    HeaderComponent,
  },
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.listMovies();
  },
  methods: {
    async listMovies() {
      const responses = await getListMoviesByPage();
      const datas = await responses.json();
      this.movies = datas.results;
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
