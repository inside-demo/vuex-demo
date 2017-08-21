const state = {
  counter: 0
}

const mutations = {
  INCREMENT (state) {
    state.counter ++
  }
}

const actions = {
  increment ({commit}) {
    commit('INCREMENT')
  }
}

export default {
  state,
  mutations,
  actions
}
