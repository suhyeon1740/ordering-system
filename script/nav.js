class Nav {
    constructor(data, selectTab) {
        this.data = data
        this.selectTab = selectTab
        this.$nav = document.querySelector('nav')
        this.render()
    }
    render() {
        this.$nav.innerHTML = `<ul>${this.data
            .map(
                (menu, index) =>
                    `<li class="${
                        index == this.selectTab ? 'active' : ''
                    }" data-target="menu" data-tab="${index}">
                    ${menu}</li>`
            )
            .join('')}<ul>`
    }
    setState(selectTab) {
        this.selectTab = selectTab
        this.render()
    }
}
export default Nav
