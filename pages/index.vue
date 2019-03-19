<template>
  <v-container>
    <v-layout column>
      <v-flex xs12 sm6 md4 lg4 mb-4>
        <img src="../static/intro.png" class="img-intro">
      </v-flex>
      <v-flex xs12 sm6 md4 lg4 text-xs-left>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti illo mollitia cumque ipsum quibusdam facilis, temporibus maxime nisi delectus nobis qui molestiae unde commodi aspernatur! Assumenda libero quae itaque tempore vel repudiandae, placeat quisquam perferendis repellendus sint quam voluptatem. Laudantium veniam delectus, porro at consequuntur explicabo ullam corporis inventore vel.</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: top;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.img-intro {
  max-width: 100%;
}
</style>

