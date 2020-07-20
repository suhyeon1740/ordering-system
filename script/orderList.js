class OrderList {
    constructor() {
        this.$list = document.querySelector('#order-list')
        this.$total = document.querySelector('#total')
        this.data = []
        this.init()
    }
    init() {}
    setState(data) {
        this.data = data
        this.render()
    }
    render() {
        let total = 0
        this.$list.innerHTML = `${this.data
            .map(({ name, price, count }) => {
                total += price * count
                return `<tr><td>${name}</td><td>X ${count}</td><td>${price * count}</td></tr>`
            })
            .join('')}`
        this.$total.innerHTML = `₩${total}`
    }
}
export default OrderList
