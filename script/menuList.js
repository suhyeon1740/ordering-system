import Nav from './nav.js'

class MenuList {
    constructor() {
        this.$menuList = document.querySelector('.menu-list')
        this.nav = new Nav()
    }
    render() {        
        this.$menuList.innerHTML = this.data[0].list.map(({name, price}) => `<article class="menu-item">
                        <img src="images/${name}.jpg" alt="${name}">
                        <div class="item-info">
                            <p>${name}</p>
                            <p>${price}원</p>
                        </div>
                        <button class="order-button">ADD CART</button>
                    </article>`).join('')        
    }    
    setState(data) {
        this.data = data
        this.nav.setState(data)
        this.render()
    }
}
export default MenuList