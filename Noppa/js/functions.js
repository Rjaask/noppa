const getRandomIntNumberInRange = (min,max) =>{
    return Math.floor(Math.random() * max) + min;
}

document.querySelector('button').addEventListener('click',() => {
    const nopan_arvo = getRandomIntNumberInRange(1,6)
    if (nopan_arvo === 1) {
        document.getElementById('sivu').src='./kuvat/one.png'
    }

    if (nopan_arvo === 2) {
        document.getElementById('sivu').src='./kuvat/two.png'
    }

    if (nopan_arvo === 3) {
        document.getElementById('sivu').src='./kuvat/three.png'
    }

    if (nopan_arvo === 4) {
        document.getElementById('sivu').src='./kuvat/four.png'
    }

    if (nopan_arvo === 5) {
        document.getElementById('sivu').src='./kuvat/five.png'
    }

    if (nopan_arvo === 6) {
        document.getElementById('sivu').src='./kuvat/six.png'
    }
})