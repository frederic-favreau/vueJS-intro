<template>
  <div class="container-card">
    <div id="card-popular">
      <img :src="'https://image.tmdb.org/t/p/w500' + img" alt="Movie poster" />
      <h3 id="title-card-popular">{{ title }}</h3>
      <div id="date-card-popular">
        <p id="date-card-popular">{{ release_date }}</p>
        <router-link :to="{ name: 'movieDetails', params: { id: id } }">
          <p>En savoir plus</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    title: String,
    overview: String,
    release_date: String,
    img: String,
    id: Number,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/CSS/variables.scss";
@import "@/assets/CSS/resetCSS.scss";
@import "@/assets/CSS/communStyle.scss";

div.container-card {
  display: inline-block;
  margin-right: 16px;
  height: fit-content;
  padding: 20px;
  background-color: $main-white-color;
  border-radius: 8px;

  div#card-popular {
    width: 250px;
    height: 365px;
    object-fit: cover;

    img {
      width: 250px;
      height: 310px;
      border-radius: 8px;
    }

    h3#title-card-popular {
      text-overflow: ellipsis;
      overflow: hidden;
      text-align: center;
    }
  }

  div#card-popular-info {
    background-color: $main-white-color;
    text-align: center;

    p#date-card-popular {
      font-size: 0.8rem;
      font-weight: 500;
      color: $main-text-color-2;
      margin-bottom: 5px;
    }
  }
}
</style>
