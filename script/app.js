import data from './data.js'
import MenuList from './menuList.js'
import OrderList from './orderList.js'

class App {
    constructor() {
        this.data = data
        this.menuList = new MenuList(this.data)
        this.orderList = new OrderList() 
        this.$app = document.querySelector('.wrap')
        this.init()
    }
    init() {              
        this.menuList.setState(0)
        this.$app.addEventListener('menuClick', e => this.menuList.setState(e.detail.tab()))
        this.$app.addEventListener('productClick', e => console.log(e))
    } 
}
export default App
