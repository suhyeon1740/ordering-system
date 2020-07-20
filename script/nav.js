class Nav {
    constructor(data) {
        this.data = data
        this.$nav = document.querySelector('nav')
    }
    render() {
        this.$nav.innerHTML = `<ul>${this.data
            .map(
                (item, index) =>
                    `<li class="${
                        index == this.selectTab ? 'active' : ''
                    }" data-target="menu" data-tab="${index}">
                    ${item.menu}</li>`
            )
            .join('')}<ul>`
    }
    setState(selectTab) {
        this.selectTab = selectTab
        this.render()
    }
}
export default Nav
