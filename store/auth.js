export const state = () => ({
  user: true,
  pass: null,
  verified: true
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setPass(state, pass) {
    state.pass = pass
  }
}
