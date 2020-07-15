import Nav from './nav.js'

class MenuList {
    constructor(data) {
        this.data = data
        this.$menuList = document.querySelector('.menu-list')
        this.nav = new Nav(this.data)
    }
    render() {        
        this.$menuList.innerHTML = this.data[this.selectTab].list.map(({name, price}) => `<article class="menu-item">
                        <img src="images/${name}.jpg" alt="${name}">
                        <div class="item-info">
                            <p>${name}</p>
                            <p>${price}원</p>
                        </div>
                        <button class="order-button">ADD CART</button>
                    </article>`).join('')        
    }    
    setState(selectTab) {
        this.selectTab = selectTab
        this.nav.setState(selectTab)
        this.render()
    }
}
export default MenuList