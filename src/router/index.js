import Vue from 'vue'
import Router from 'vue-router'
import DiaryBar from '@/components/Diary/DiaryBar'
import DiaryEdit from '@/components/Diary/DiaryEdit'
import List from '@/components/Diary/List'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'DiaryBar',
    //   component: DiaryBar
    // },
    {
      path: '/',
      name: 'List',
      component: List
    }
  ]
})
