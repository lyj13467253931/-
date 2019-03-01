import Vue from 'vue'
import Router from 'vue-router'
import Find from '../components/find'
import Index from '../components/Index'
import Classify from '../components/classify'
import Find_q from '../components/find_q'
import my from '../components/my'
import Shop from '../components/Shoppingcart.vue'
import Groom from '../components/groom.vue'
import Order from '../components/Order.vue'
import TradingStamps from '../components/TradingStamps.vue'
import RedPacket from '../components/RedPacket.vue'
// import myOrder from '../components/MyOrder0'
import MyOrder0 from '../components/MyOrder0'
import Draw from '../components/Draw'
import Draw1 from '../components/Draw1'
import goodDetails from '../components/goodDetails'
import Seach from '../components/serch'
import Kf from '../components/kf'
import Aftersales from '../components/Aftersales'
import Fapiao from '../components/Fapiao'
import YY from '../components/1y'
import my_w from '../components/my_w'
import tab from '../components/tab'
import home from '../components/Home.vue'
import Address from '../components/Address'
import Loggin from '../components/Loggin'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'*',
            redirect:'Index',
            component:Index
        },
        {
            path:'/Find',
            component : Find,
            meta:{
                showTabbar :true
            }
        },
        {
            path:'/Index',
            component: Index,
            meta:{
                showTabbar :true
            }

        },
        {
            path:'/Classify',
            name:'Classify',
            component:Classify,
            meta:{
                showTabbar:true
            }
        },
        {
            path:'/Find_q',
            name:'Find_q',
            component:Find_q
        },
        {
            path:'/my',
            name:'my',
            component:my,
            meta:{
                showTabbar:true
            }
        },
        {
            path:'/Shop',name:'Shop',
            component:Shop,
            meta:{
                showTabbar:true
            }
        },
        {path:'/Groom',name:'groom',component:Groom},
        {
            path: '/Order',
            name: 'Order',
            component: Order
        },
        {
            path: '/TradingStamps',
            name: 'TradingStamps',
            component: TradingStamps
        },
        {
            path: '/RedPacket',
            name: 'RedPacket',
            component: RedPacket
        },
        {
            path:'/MyOrder0',
            name:'MyOrder0',
            component:MyOrder0
        },
        {
            path:'/Draw',
            name:'Draw',
            component:Draw
        },
        {
            path:'/Draw1',
            name:'Draw1',
            component:Draw1
        },
        {
            path:'/GoodDetails',
            component:goodDetails
        },
        {
            path:'/Seach',
            component:Seach
        },
        {
            path:'/Kf',
            component:Kf
        },
        {
            path:'/Aftersales',
            component:Aftersales
        },
        {
            path:'/Fapiao',
            component:Fapiao
        },
        {
            path:'/YY',
            component:YY
        },
        {
            path:"/tab",
            component:tab
        },
        { 
            path:"/my_w",
            component:my_w
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path:'/Address',
            component:Address
        },
        {
            path:'/Loggin',
            component:Loggin
        }
    ]
})
