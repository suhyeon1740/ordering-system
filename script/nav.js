class Nav {
    constructor(data) {
        this.data = data
        this.$nav = document.querySelector('nav')
        this.init()
    }
    init(){
        this.$nav.addEventListener('click', function (e) {
            // 이벤트 즉시 생성 및 디스패치/트리거
            // 노트: 선택적으로, 우리는 "함수 표현"("화살표 함수 표현" 대신)을 사용하므로 "this"는 엘리먼트를 나타냅니다
            this.dispatchEvent(new CustomEvent('menuClick', {
                bubbles: true, 
                detail: { tab: () => e.target.dataset.tab } 
            }))
        });
    }
    render() {
        this.$nav.innerHTML = `<ul>${this.data.map((item, index) => `<li class="${index == this.selectTab ? 'active' : ''}" data-tab="${index}">${item.menu}</li>`).join('')}<ul>`                    
    }
    setState(selectTab) {
        this.selectTab = selectTab
        this.render()
    }    
}
export default Nav