export const state = () => ({
  total: 0
})

export const getters = {
  getTotal: state => state.total,
}

export const mutations = {
  pushPriceToTotal: (state, { price, status }) => {
    if (status) {
      state.total += price
    } else {
      state.total -= price
    }
  }
}

export const actions = {
  addItem: ({ commit }, item) => {
    commit('pushPriceToTotal', { price: item.price, status: item.selected })
  }
}