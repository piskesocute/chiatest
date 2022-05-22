import { firestore, auth } from '@/plugins/firebase'

export const state = {
  firebaseUser: null,
  data: null
}
export const getters = {
  isSignIn(state) {
    return !!state.firebaseUser
  },
  firebaseUser(state) {
    return state.firebaseUser
  },
  data(state) {
    return state.data
  },
  uid(state) {
    state.firebaseUser
    return state.firebaseUser? state.firebaseUser.uid : ''
  },
  firstName(state) {
    state.data
    return (state.data && state.data.first_name)? state.data.first_name : ''
  },
  lastName(state) {
    state.data
    return (state.data && state.data.last_name)? state.data.last_name : ''
  },
  name(state, getters) {
    getters.firstName
    getters.lastName
    return getters.firstName + ' ' + getters.lastName
  },
  email(state) {
    state.data
    return (state.data && state.data.email)? state.data.email : ''
  },
  isEMailVerified(state) {
    state.firebaseUser
    return state.firebaseUser? state.firebaseUser.emailVerified : false
  },
  phoneNumber(state) {
    state.data
    return (state.data && state.data.phone_number)? state.data.phone_number : ''
  },
  isPhoneNumberVerified(state, getters) {
    state.firebaseUser
    const phoneNumber = getters.phoneNumber
    return phoneNumber.length > 0 && state.firebaseUser && state.firebaseUser.phoneNumber === phoneNumber
  },
  firestoreColRef() {
    return firestore.collection('users')
  },
  firestoreDocRef(state, getters) {
    return state.firebaseUser? getters.firestoreColRef.doc(getters.uid) : null
  }
}
export const mutations = {
  SET_FIREBASE_USER(state, user) {
    state.firebaseUser = user
  },
  SET_USER_DATA(state, data) {
    state.data = data
  }
}
export const actions = {
  fetchUser({ commit, dispatch }, user) {
    if (user) {
      commit('SET_FIREBASE_USER', user)
      return dispatch('getUserData')
    } else {
      commit('SET_FIREBASE_USER', null)
      commit('SET_USER_DATA', null)
      commit('SET_IS_ADMIN', false)
    }
  },
  onAuthStateChanged ({ dispatch }, then) {
    auth.onAuthStateChanged(async user => {
      await dispatch('fetchUser', user)
      then(user)
    })
  },
  signInWithEmailAndPassword (_, { email, password }) {
    return auth.signInWithEmailAndPassword(email, password)
  },
  signOut () {
    return auth.signOut()
  },
  reloadFirebaseUser({ state, commit }) {
    return new Promise((resolve, reject) => {
      state.firebaseUser?.reload()
      .then(() => {
        const firebaseUser = auth.currentUser
        commit('SET_FIREBASE_USER', firebaseUser)
        resolve(firebaseUser)
      })
      .catch(err => reject(err))
    })
  },
  getUserIDToken({ state }) {
    return state.firebaseUser?.getIdToken()
  },
  getUserData({ commit, getters }) {
    return new Promise((resolve, reject) => {
      getters.firestoreDocRef?.get()
      .then(docSnap => {
        const data = docSnap.data()
        commit('SET_USER_DATA', data)
        resolve(data)
      })
      .catch(err => reject(err))
    })
  }
}