const state = {
  'dictionary': {
    'en_EN': {
      'Home': 'Home'
    },
    'ru_RU': {
      'Home': 'Дом'
    }
  },
  lang: 'en_EN'
}

const mutations = {
  changeLang (state, lang) {
    state.lang = lang
  }
}

const actions = {
  changeLang ({commit}, lang) {
    commit('changeLang', lang)
  }
}

const getters = {
  dictionary (store) {
    return store.dictionary
  },
  lang (store) {
    return store.lang
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
