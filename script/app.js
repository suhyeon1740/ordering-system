import menuData from './data.js'
import MenuList from './menuList.js'
import OrderList from './orderList.js'

class App {
    constructor() {
        this.menuData = menuData
        this.orderData = []
        this.menuList = new MenuList(this.menuData, this.addOrder)
        this.orderList = new OrderList()
        this.$app = document.querySelector('.wrap')
        this.selectTab = 0
        this.init()
    }
    init() {
        this.menuList.setState(0)
        this.$app.addEventListener('menuClick', this.setState)
        // this.$app.addEventListener('productClick', e =>
        //     this.orderList.setState(e.detail.getProduct())
        // )
    }
    setState = (e) => {
        this.selectTab = e.detail.tab()
        this.menuList.setState(this.selectTab)
    }
    addOrder = (e) => {
        const id = +e.target.parentNode.dataset.id
        const menuList = this.menuData[this.selectTab].list
        const menu = menuList[menuList.findIndex((menu) => menu.id === id)]
        this.orderList.setState({
            ...menu,
            count: 1,
        })
    }
}
export default App
