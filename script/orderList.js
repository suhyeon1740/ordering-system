class OrderList {
    constructor() {
        this.$list = document.querySelector('#order-list')
        this.$total = document.querySelector('#total')
        this.data = []
    }
    setState(data) {
        this.data = data
        this.render()
    }
    render() {
        let total = 0
        this.$list.innerHTML = `${this.data
            .map(({ id, name, price, count }) => {
                total += price * count
                return `<tr data-id="${id}"><td>${name}</td><td>${this.setSelectBox(
                    count
                )}</td><td>${price * count}</td></tr>`
            })
            .join('')}`
        this.$total.innerHTML = `₩${total}`
    }
    setSelectBox(count) {
        let $option = ''
        for (let i = 1; i <= 10; i++) {
            $option += `<option value="${i}" ${i === count ? 'selected' : ''}>${i}</option>`
        }
        return `<select data-target="select">${$option}</select>`
    }
}
export default OrderList
