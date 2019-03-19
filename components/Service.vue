<template>
  <v-layout row wrap align-center justify-space-between pa-3>
    <v-flex>{{ service.name }}</v-flex>
    <v-spacer class="hidden-sm-and-down"></v-spacer>
    <v-flex>{{ service.price }} руб.</v-flex>
    <v-flex xs3 text-xs-right >
      <v-btn 
        @click="toggleSelect(service)" 
        color="blue-grey"
        class="white--text hidden-sm-and-down">
        {{ isSelected ? `Отменить` : `Выбрать` }}</v-btn>
      <v-btn 
        @click="toggleSelect(service)" 
        color="blue-grey"
        class="white--text hidden-sm-and-up"
        fab 
        dark 
        small>
        {{ isSelected ? `-` : `+` }}</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
    }
  },
  data () {
    return {
      isSelected: false,
    }
  },
  methods: {
    toggleSelect (service) {
      service.selected = !service.selected
      this.isSelected = !this.isSelected
      this.$store.dispatch('cart/addItem', service)
    },
  },
}
</script>