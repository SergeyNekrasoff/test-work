<template>
  <v-card class="card mb-4">
    <v-layout row wrap>
      <v-flex xs2 sm2>
        <v-img :src="item.logo" class="img-company"></v-img>
      </v-flex>
      <v-flex xs10 sm10>
        <v-layout column>
          <v-flex>
            <v-card-title>
              <v-flex class="text-xs-left">
                <h3 class="headline mb-3">{{ item.name }}</h3>
                <span class="body-2">{{ item.address }}</span><br>
                <b class="body-2 font-weight-bold">Минимальная цена услуг: {{ minPrice }} руб.</b>
              </v-flex>
            </v-card-title>
          </v-flex>
          <v-flex>
            <service v-for="service in item.services" :key="service.id" :service="service"></service>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import Service from './Service'

export default {
  components: {
    Service,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {
      minPrice: 0,
    }
  },
  methods: {
    getMinPrice (item) {
      const arr = item.services.map(s => s.price)
      const min = Math.min(...arr)
      this.minPrice = min
    },
  },
  created () {
    this.getMinPrice(this.item)
  },
}
</script>

<style lang="scss">
.card {
  min-width: 320px;
  max-width: 640px;
  margin: auto;
}
</style>
