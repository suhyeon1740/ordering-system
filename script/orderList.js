class OrderList {
    constructor() {
        this.$list = document.querySelector('#order-list')
        this.init()
    }
    init() {

    }
    setState(data) {
        this.data = data
        this.render()
    }
    render() {
        // TODO: app에서 배열 관리, 여기서는 그대로 뿌리기만..
        this.$list.innerHTML = `<tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>`
        //this.$orderSection.innerHTML = ``
    }
}
export default OrderList