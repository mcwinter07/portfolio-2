// vanilla slider JS

const sliderContainer = document.getElementsByClassName('about-slider')[0]

let mouseDownDetected = false
let touchStartDetected = false
let sliderStartX
let sliderScrollX

const addListener = (element, event, callback) => {
  element.addEventListener(event, callback)
}

// TODO: Bring SliderCainer in as an argument
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


const detectSliderMovement = (e) => {
  if(!mouseDownDetected) return
  e.preventDefault
  const mouseDownX = e.pageX - sliderContainer.offsetLeft
  const distanceFromOrigin = (mouseDownX - sliderStartX) * 3
  sliderContainer.scrollLeft = sliderScrollX - distanceFromOrigin
}

const adjustSliderSize = () => {
  let sliderWidth = sliderContainer.clientWidth
  sliderWidth = sliderContainer.clientWidth
  return sliderWidth
}



const renderSliderNavigation = (sliderClassName, destinationID, navClassName) => {
  let navigationDoms = ``
  document.querySelectorAll(sliderClassName).forEach(slide => {
    console.log(slide)
    navigationDoms +=
    `
    <li class="about-list-item">
      <input type="radio" name="${sliderClassName}" class="${navClassName}"/>
    </li>
    `
  })
  document.getElementById(destinationID).insertAdjacentHTML('afterbegin', navigationDoms)
  document.getElementsByClassName(`${navClassName}`)[0].checked = true
}

renderSliderNavigation('.about-slide','slider-nav-container', 'about-radio')



const targetRadio = (radioClassName) => {
  let radioCollection = document.getElementsByClassName(`${radioClassName}`)
}

const highlightNav = (e) => {
  console.log(e)
  let sliderWidth = sliderContainer.clientWidth
  sliderScrollX = sliderContainer.scrollLeft
  let radio = document.getElementsByClassName('about-radio')
  radio[0].checked = true
  if (sliderScrollX > sliderWidth && sliderScrollX < (sliderWidth * 2)) {
    radio[1].checked = true
  } else if (sliderScrollX > (sliderWidth * 2)) {
    radio[2].checked = true
  }
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
addListener(sliderContainer, 'mousemove', detectSliderMovement)
addListener(sliderContainer, 'scroll', highlightNav)


//update the size variable for the slider
// window.onresize = adjustSliderSize







// const sliderNav = document.getElementsByClassName('slider-nav')[0]
//offsetlef

