import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/info/Home'
import PacketGenerator from '@/components/tools/PacketGenerator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/packet-generator',
      name: 'PacketGenerator',
      component: PacketGenerator
    }
  ]
})
