import data from "./data.js"
import Nav from "./Nav.js"

class ProductList {
    constructor() {
        this.data = data
        this.selectTab = 0
        this.$list = document.querySelector(".menu-list")
        this.nav = new Nav(data.menu, 0)
        this.render()
    }
    render() {
        this.$list.innerHTML = this.data.list.filter(item => item.menu == this.selectTab)
            .map(
                ({ name, price, id }) => `<article class="menu-item" data-id=${id}>
                        <img src="images/${name}.jpg" alt="${name}">
                        <div class="item-info">
                            <p data-type="name">${name}</p>
                            <p data-type="price">${price}원</p>
                        </div>
                        <button class="order-button" data-target="add-cart">ADD CART</button>
                    </article>`
            )
            .join("")
    }
    setState(selectTab) {
        this.selectTab = selectTab
        this.nav.setState(selectTab)
        this.render()
    }
}
export default ProductList
