const menuList = {
    $nav: document.querySelector('nav'),
    $menuList: document.querySelector('.menu-list'),
    listRender() {        
        this.$menuList.innerHTML = this.data[0].list.map(({name, price}) => `<article class="menu-item">
                        <img src="images/${name}.jpg" alt="${name}">
                        <div class="item-info">
                            <p>${name}</p>
                            <p>${price}원</p>
                        </div>
                        <button class="order-button">ADD CART</button>
                    </article>`).join('')        
    },
    navRender() {        
        this.$nav.innerHTML = `<ul>${this.data.map((item, index) => `<li class="${index == 0 ? 'active' : ''}">${item.menu}</li>`).join('')}<ul>`                    
    },
    setState(data) {
        this.data = data
        this.navRender()
        this.listRender()
    }
}