import menuData from './data.js'
import MenuList from './menuList.js'
import OrderList from './orderList.js'

class App {
    constructor() {
        this.menuData = menuData
        this.orderData = []
        this.menuList = new MenuList(this.menuData)
        this.orderList = new OrderList() 
        this.$app = document.querySelector('.wrap')
        this.init()
    }
    init() {              
        this.menuList.setState(0)
        this.$app.addEventListener('menuClick', e => this.menuList.setState(e.detail.tab()))
        // this.$app.addEventListener('productClick', e => 
        //     this.orderList.setState(e.detail.getProduct())           
        // )
    } 
}
export default App
