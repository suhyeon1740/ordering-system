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
        this.$app.addEventListener('click', (e) => {
            switch (e.target.dataset.target) {
                case 'add-cart':
                    this.addOrder(+e.target.parentNode.dataset.id)
                    break
                case 'menu':
                    this.setState(e.target.dataset.tab)
            }
        })
    }
    setState(selectTab) {
        this.selectTab = selectTab
        this.menuList.setState(this.selectTab)
    }
    addOrder(id) {
        const menuList = this.menuData[this.selectTab].list
        const menu = menuList[menuList.findIndex((menu) => menu.id === id)]
        const findIndex = this.orderData.findIndex((element) => element.id == id)
        findIndex > -1
            ? this.orderData[findIndex].count++
            : this.orderData.push({
                  ...menu,
                  count: 1,
              })
        this.orderList.setState(this.orderData)
    }
}
export default App
