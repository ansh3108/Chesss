function insertImage() {
    document.querySelectorAll('.box').forEach(image => {
        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = ${image.innerText} <img class='all-img all-pown' src="${image.innerText}.png" alt="">
                image.style.cursor = 'pointer'
            } else {
                image.innerHTML = ${image.innerText} <img class='all-img' src="${image.innerText}.png" alt="">
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()

function coloring() {
    const color = document.querySelectorAll('.box')
    color.forEach(color => {
        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundColor = 'rgb(232 235 239)'
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = 'rgb(125 135 150)'
        }
    })
}
coloring()

function reddish() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'blue') {
            document.querySelectorAll('.box').forEach(i2 => {
                if (i2.style.backgroundColor == 'greenyellow' && i2.innerText.length !== 0) {
                    greenyellowText = i2.innerText
                    blueText = i1.innerText
                    blueColor = ((Array.from(blueText)).shift()).toString()
                    greenyellowColor = ((Array.from(greenyellowText)).shift()).toString()

                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup

                    if (a % 2 == 0 && blueColor == greenyellowColor) {
                        i2.style.backgroundColor = 'rgb(232 235 239)'
                    }
                    if (a % 2 !== 0 && blueColor == greenyellowColor) {
                        i2.style.backgroundColor = 'rgb(125 135 150)'
                    }
                }
            })
        }
    })
}

document.getElementById("reset-btn").addEventListener("click", function () {
    location.reload();
});
