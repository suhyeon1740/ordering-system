import ProductList from "./ProductList.js"
import OrderList from "./orderList.js"

class App {
    constructor() {
        this.orderData = []
        this.productList = new ProductList()
        this.orderList = new OrderList()
        this.$app = document.querySelector(".wrap")
        this.init()
    }
    init() {
        this.$app.addEventListener("click", ({ target }) => {
            switch (target.dataset.target) {
                case "add-cart":
                    this.addOrder(+target.parentNode.dataset.id)
                    break
                case "menu":
                    this.productList.setState(target.dataset.tab)
                    break
                case "remove":
                    this.removeOrder(+target.parentNode.parentNode.dataset.id)
                    break
                case "payment":
                    this.payment()
                    break
            }
        })
        this.$app.addEventListener("change", ({ target }) => {
            if (target.dataset.target === "select") {
                this.changeCount(target)
            }
        })
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
    removeOrder(id) {
        this.orderData = this.orderData.filter((list) => list.id !== id)
        this.orderList.setState(this.orderData)
    }
    payment() {
        if (this.orderData.length > 0) {
            alert("주문이 완료되었습니다.")
        }
    }
}
export default App
