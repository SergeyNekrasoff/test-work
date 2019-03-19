<template>
  <div class="total text-xs-center">
    <p>Общая сумма выбранных услуг: <b>{{ getTotal }} руб.</b></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getTotal: 'cart/getTotal'
    })
  },
}
</script>

<style lang="scss">
.total {
  position: relative;  

  p {
    margin: 0;
  }
}

@media screen and (min-width: 320px) and (max-width: 640px) {
  .total {
    background: #fff;
    padding: 16px 0;
    box-shadow: 1px 6px 20px 0px #ccc;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
