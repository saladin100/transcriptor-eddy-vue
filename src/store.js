import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: null,
    audios: []
  },
  getters: {
    getAudios: state => state.audios
  },
  mutations: {
    SET_EMAIL(state, email) {
      state.email = email;
    },
    STORE_AUDIO(state, audio) {
      state.audios.push(audio);
      console.log("File pushed: " + audio)
    },
    REMOVE_AUDIO(state, audio) {
      state.audios.splice(state.audios.indexOf(audio), 1);
      console.log("File removed: " + audio)

    }
  },
  actions: {
    setEmail(context, email) {
      context.commit('SET_EMAIL', email);
    },
    storeAudio(context, audio) {
      context.commit('STORE_AUDIO', audio);
    },
    removeAudio(context, audio) {
      context.commit('REMOVE_AUDIO', audio);
    }
  }
})