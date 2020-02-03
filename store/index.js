import axios from '~/plugins/axios'

export const state = () => ({
  members: []
})

export const mutations = {
  setData(state, items) {
    state.members = items
  },

  addData(state, item) {
    state.members.push(item)
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await axios.get('magang')
    commit('setData', res.data)
  },

  async add({ commit }, name) {
    const res = await axios.post('magang', { name })
    commit('addData', res.data)
  }
}
