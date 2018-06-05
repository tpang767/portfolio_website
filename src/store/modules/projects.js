import api from '../../api'

const state = {
  all: []
}

const getters = {
  allProjects: state => state.all
}

const actions = {
  getAllProjects ({ commit }) {
    const projects = api.getProjects()
    commit('setProjects', projects)
  }
}

const mutations = {
  setProjects (state, projects) {
    state.all = projects
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
