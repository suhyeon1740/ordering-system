import Nav from './nav.js'

class MenuList {
    constructor(data) {
        this.data = data
        this.$list = document.querySelector('.menu-list')
        this.nav = new Nav(this.data)
        this.init()
    }
    init() {
        this.$list.addEventListener('click', e => {
            this.$list.dispatchEvent(new CustomEvent('productClick', {
                bubbles: true,
                detail: { getProduct: () => {
                    const $parent = e.target.parentNode
                    return {
                        name: $parent.querySelector('[data-type="name"]').innerHTML,
                        price: $parent.querySelector('[data-type="price"]').innerHTML
                    }
                }}
            }))
        })
    }
    render() {        
        this.$list.innerHTML = this.data[this.selectTab].list.map(({name, price}) => `<article class="menu-item">
                        <img src="images/${name}.jpg" alt="${name}">
                        <div class="item-info">
                            <p data-type="name">${name}</p>
                            <p data-type="price">${price}원</p>
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