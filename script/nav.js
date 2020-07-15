class Nav {
    constructor() {
        this.$nav = document.querySelector('nav')
    }
    render() {
        this.$nav.innerHTML = `<ul>${this.data.map((item, index) => `<li class="${index == 0 ? 'active' : ''}">${item.menu}</li>`).join('')}<ul>`                    
    }
    setState(data) {
        this.data = data
        this.render()
    }    
}
export default Nav