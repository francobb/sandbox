const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickX = 0;

loveMe.addEventListener('click', (e) => {
    if (clickX === 0){
        clickX = new Date().getTime()
    } else {
        if( (new Date().getTime() - clickX) < 800) {
            createHeart(e)
            clickX = 0;
        } else {
            clickX = new Date().getTime()
        }
    }
})


const createHeart = (e) => {
    const heart = document.createElement("i")
    heart.classList.add('fa')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    console.log(xInside, yInside);
    loveMe.appendChild(heart)
}