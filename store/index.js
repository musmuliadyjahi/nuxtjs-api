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
  },

  removeData(state, id) {
    const foundItem = state.members.findIndex((p) => p.id === id)
    state.members.splice(foundItem, 1)
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await axios.get('magang')
    commit('setData', res.data)
  },

  async submitData({ commit }, name) {
    const res = await axios.post('magang', { name })
    commit('addData', res.data)
  },

  async removeData({ commit }, id) {
    // eslint-disable-next-line no-unused-vars
    const res = await axios.delete('magang/' + id)
    commit('removeData', id)
  },

  async getData({ commit }, id) {
    const res = await axios.get('magang/' + id)
    return res.data
  }
}
