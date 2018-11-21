// vanilla slider JS

const sliderContainer = document.getElementsByClassName('about-slider')[0]

let mouseDownDetected = false
let touchStartDetected = false
let sliderStartX
let sliderScrollX

const addListener = (element, event, callback) => {
  element.addEventListener(event, callback)
}


const detectSliderClick = (e) => {
  mouseDownDetected = true;
  sliderContainer.classList.add('sliderActive')
  sliderStartX = e.pageX - sliderContainer.offsetLeft;
  sliderScrollX = sliderContainer.scrollLeft
}

const detectSliderRelease = () => {
  mouseDownDetected = false
  sliderContainer.classList.remove('sliderActive')
}

const detectSliderLeave = () => {
  mouseDownDetected = false
}




// // addMultiListeners()
// const clickOrTouch = (e) => {
//   console.log(e.pageX)
//   console.log(e)
//   console.log('i have been touched')
// }

sliderContainer.addEventListener('mousemove', (e) => {
  if(!mouseDownDetected) return
  e.preventDefault
  const mouseDownX = e.pageX - sliderContainer.offsetLeft
  const distanceFromOrigin = (mouseDownX - sliderStartX) * 3
  sliderContainer.scrollLeft = sliderScrollX - distanceFromOrigin
})

const adjustSliderSize = () => {
  let sliderWidth = sliderContainer.clientWidth
  sliderWidth = sliderContainer.clientWidth
  console.log(sliderWidth)
}



const renderSliderNavigation = (sectionClassName, destinationID) => {
  let navigationDoms = ``
  document.querySelectorAll(sectionClassName).forEach(slide => {
    console.log(slide)
    navigationDoms +=
    `
    <li class="about-list-item">
      <input type="radio" name="about-slider" class="about-radio" id="${slide.id}-radio"/>
    </li>
    `
  })
  document.getElementById(destinationID).insertAdjacentHTML('afterbegin', navigationDoms)
}


// console.log(document.querySelectorAll('.about-slide'))
// let testEl = document.querySelectorAll('.about-slide')[0]
// console.log(testEl)
// testEl.style.left = sliderWidth
// // TODO: moveSliderPosition

// onlick, find the index of the nav, * by the position of the window and apply to the css of the element
  

//renders nav radio buttons


addListener(sliderContainer, 'mousedown', detectSliderClick)
addListener(sliderContainer, 'mouseup', detectSliderRelease)
addListener(sliderContainer, 'mouseleave', detectSliderLeave)

//update the size variable for the slider
window.onresize = adjustSliderSize

renderSliderNavigation('.about-slide','slider-nav-container')






// const sliderNav = document.getElementsByClassName('slider-nav')[0]
//offsetlef

