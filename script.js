const element = document.querySelectorAll('.number h2')
const arrayElement = Array.from(element)
const svg = document.querySelectorAll('.percent svg .svg')

function animateNumber() {
    arrayElement.forEach((number, index) => {
        const numeroLimpo = Number(number.innerText)

        let start = 0;
        const interval = setInterval(() => {
            start++;
            number.innerText = start
            svg[index].style.strokeDashoffset = (440 - (440 * start) / 100);
            if(start >= numeroLimpo) {
                clearInterval(interval)
            }
        }, 30)
     
    })
}

animateNumber()


