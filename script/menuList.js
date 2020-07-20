import Nav from './nav.js'

class MenuList {
    constructor(data) {
        this.data = data
        this.$list = document.querySelector('.menu-list')
        this.nav = new Nav(this.data)
    }
    render() {
        this.$list.innerHTML = this.data[this.selectTab].list
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
            .join('')
    }
    setState(selectTab) {
        this.selectTab = selectTab
        this.nav.setState(selectTab)
        this.render()
    }
}
export default MenuList
