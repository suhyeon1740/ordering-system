import data from './data.js'
import MenuList from './menuList.js'
import OrderList from './orderList.js'

class App {
    constructor() {
        this.data = data
        this.$app = document.querySelector('.wrap')    
        this.init()
    }
    init() {     
        this.render()
        this.menuList = new MenuList()
        this.orderList = new OrderList()  
        this.menuList.setState(this.data)
        this.orderList.render() 
    }
    render() {
        //this.$app.innerHTML = ``
    }
}
export default App
