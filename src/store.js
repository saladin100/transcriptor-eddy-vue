import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: null,
    audios: [],
    language: null,
    numberOfSpeakers: 1,
    customVocabulary: null,
    contentRedaction: null,
    automaticPunctuation: false,
    timestamp: false
  },
  getters: {
    getAudios: state => state.audios,
    getEmail: state => state.email,
    getLangugage: state => state.langugage,
    getNumberOfSpeakers: state => state.numberOfSpeakers,
    getCustomVocabulary: state => state.customVocabulary,
    getContentRedaction: state => state.contentRedaction,
    getAutomaticPunctuation: state => state.automaticPunctuation,
    getTimestamp: state => state.timestamp
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
    },
    SET_LANGUGAGE(state, language) {
      state.language = language;
    },
    SET_MUBER_OF_SPEAKER(state, number) {
      state.numberOfSpeakers = number;
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
    },
    setLanguage(context, language) {
      context.commit('SET_LANGUGAGE', language);
    },
    setNumberOfSpeakers(context, number) {
      context.commit('SET_MUBER_OF_SPEAKER', number);
    }
  }
})