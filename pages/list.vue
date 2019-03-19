<template>
  <v-container>
    <v-layout column justify-start>
      <v-flex>
        <item v-for="item in items" :key="item.id" :item="item"></item>
      </v-flex>
      <v-flex>
        <total-price></total-price>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Item from '~/components/Item'
import TotalPrice from '~/components/TotalPrice'

export default {
  components: {
    Item,
    TotalPrice,
  },
  data () {
    return {
      items: []
    }
  },
  async created () {
    const items = await this.$axios.$get('http://212.42.46.189:11009/v1/bell')
    this.items = Object.freeze(items)
  }
}
</script>

<style lang="scss">
.img-company {
  max-width: 70%;
  margin: 16px auto 0;
}
</style>