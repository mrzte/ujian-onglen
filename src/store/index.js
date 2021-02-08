import { createStore } from 'vuex'

export default createStore({
  state: {
    user:
    [
    
    {
      id:1,
      username:'msdqn',
      firstname:'Maulana',
      lastname:'Sodiqin',
      email:'msdqn@outlook.com',
      no_hp:'089663599201',
      isAdmin:false,
      isAuth:false
    },
    {
      id:2,
      username:'rchrd',
      firstname:'Richard',
      lastname:'Dawkins',
      email:'rchrd@outlook.com',
      no_hp:'085156085579',
      isAdmin:false,
      isAuth:true
    },
    {
      id:3,
      username:'kntl',
      firstname:'Konto',
      lastname:'Anying',
      email:'kntl@outlook.com',
      no_hp:'0897698969876',
      isAdmin:false,
      isAuth:false
    },

  ]
  },
  getters:{

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
