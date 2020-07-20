class OrderList {
    constructor() {
        this.$list = document.querySelector('#order-list')
        this.$total = document.querySelector('#total')
        this.data = []
        this.init()
    }
    init() {}
    setState(data) {
        // 배열을 여기서 관리한다면..
        const findIndex = this.data.findIndex((element) => element.id == data.id)
        findIndex > -1 ? this.data[findIndex].count++ : this.data.push(data)
        this.render()
    }
    render() {
        // TODO: app에서 배열 관리, 여기서는 그대로 뿌리기만..
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
