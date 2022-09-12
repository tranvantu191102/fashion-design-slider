const controlBtn = document.querySelector('.control')
const slideLists = document.querySelectorAll('.slide__item')
const imgLists = document.querySelectorAll('.img__item')
slideLists[0].classList.add('active')
let indexActive = 0

controlBtn.onclick = () => {
    indexActive = indexActive === slideLists.length - 1 ? 0 : indexActive += 1
    document.querySelector('.slide__item.active').classList.remove('active')
    slideLists[indexActive].classList.add('active')


    let imgListReverse = Array.from(imgLists).slice().reverse()
    imgListReverse.forEach((img, index) => {
        if (index < imgListReverse.length - 1) {
            img.style.left = imgListReverse[index + 1].offsetLeft + 'px'
            img.style.width = imgListReverse[index + 1].offsetWidth + 'px'
            img.style.height = imgListReverse[index + 1].offsetHeight + 'px'
            img.style.zIndex = window.getComputedStyle(imgListReverse[index + 1]).zIndex
        }

        if (index === imgListReverse.length - 1) {

            img.style.left = imgListReverse[0].offsetLeft + 'px'
            img.style.width = imgListReverse[0].offsetWidth + 'px'
            img.style.height = imgListReverse[0].offsetHeight + 'px'
            img.style.zIndex = window.getComputedStyle(imgListReverse[0]).zIndex
        }

    })

}

