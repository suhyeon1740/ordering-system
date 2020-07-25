import ProductList from "./ProductList.js"
import OrderList from "./OrderList.js"

class App {
    constructor() {
        this.productList = new ProductList()
        this.orderList = new OrderList()
        this.$app = document.querySelector(".wrap")
        this.init()
    }
    init() {
        this.$app.addEventListener("click", ({ target }) => {
            switch (target.dataset.target) {
                case "add-cart":
                    this.productClick(+target.parentNode.dataset.id)
                    break
                case "menu":
                    this.productList.setState(target.dataset.tab)
                    break
                case "remove":
                    this.orderList.removeOrder(+target.parentNode.parentNode.dataset.id)
                    break
                case "payment":
                    this.orderList.payment()
                    break
            }
        })
        this.$app.addEventListener("change", ({ target }) => {
            if (target.dataset.target === "select") {
                this.changeCount(+target.parentNode.parentNode.dataset.id, target.value)
            }
        })
    }
    getProduct(id) {
        return this.productList.data.find((product) => product.id === id)
    }
    findProduct(id) {
        //선택한 상품이 orderData에 존재하는지 찾기
        return this.orderList.data.find((product) => product.id === id)
    }
    productClick(id) {
        const product = this.findProduct(id)
        if (!product) {
            this.orderList.addOrder(this.getProduct(id))
        } else {
            this.orderList.changeCount(product, product.count + 1)
        }
    }
    changeCount(id, count) {
        this.orderList.changeCount(this.findProduct(id), +count)
    }
}
export default App
