import { numberComma } from "./lib.js"

class OrderList {
    constructor() {
        this.$list = document.querySelector("#order-list")
        this.$total = document.querySelector("#total")
        this.data = []
    }
    render() {
        let total = 0
        this.$list.innerHTML = `${this.data
            .map(({ id, name, price, count }) => {
                total += price * count
                return `<tr data-id="${id}">
                    <td>${name}</td>
                    <td>${this.setSelectBox(count)}</td>
                    <td>₩${numberComma(price * count)}</td>
                    <td><i data-target="remove" class="fas fa-minus-circle"></i></td>
                </tr>`
            })
            .join("")}`
        this.$total.innerHTML = `₩${numberComma(total)}`
    }
    setSelectBox(count) {
        let $option = ""
        for (let i = 1; i <= 10; i++) {
            $option += `<option value="${i}" ${i === count ? "selected" : ""}>${i}</option>`
        }
        return `<select data-target="select">${$option}</select>`
    }
    addOrder(product) {
        this.data.push({
            ...product,
            count: 1,
        })
        this.render()
    }
    changeCount(product, count) {
        if (count > 10) return // 수량 최대 10까지만 설정 가능
        product.count = count
        this.render()
    }
    removeOrder(id) {
        this.data = this.data.filter((product) => product.id !== id)
        this.render()
    }
    payment() {
        if (this.data.length > 0) {
            alert("주문이 완료되었습니다.")
        } else {
            alert("상품을 추가하세요.")
        }
    }
}
export default OrderList
