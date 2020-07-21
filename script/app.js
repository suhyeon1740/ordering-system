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
        this.selectTab = 0
        this.init()
    }
    init() {
        this.menuList.setState(0)
        this.$app.addEventListener('click', ({ target }) => {
            switch (target.dataset.target) {
                case 'add-cart':
                    this.addOrder(+target.parentNode.dataset.id)
                    break
                case 'menu':
                    this.setState(target.dataset.tab)
            }
        })
        this.$app.addEventListener('change', ({ target }) => {
            if (target.dataset.target === 'select') {
                this.changeCount(target)
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
    changeCount(target) {
        const id = target.parentNode.parentNode.dataset.id
        const count = target.value
        const findIndex = this.orderData.findIndex((element) => element.id == id)
        this.orderData[findIndex].count = Number(count)
        this.orderList.setState(this.orderData)
    }
}
export default App
