// vanilla slider JS

const sliderContainer = document.getElementsByClassName('about-slider')[0]

let mouseDownDetected = false
let touchStartDetected = false
let sliderStartX
let sliderScrollX

const addListener = (element, event, callback) => {
  element.addEventListener(event, callback)
}

const addMultListener = (array, event, callback) => {
  array.forEach((e) => {
    e.addEventListener(event, callback)
  })
}


// TODO: Bring SliderContainer in as an argument
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

// target the nav container and links back to the radio
// assume that radio class will defined in the first part of a string and separated by a '-'

const targetNavRadio = (e) => {
  let radioClass = e.target.classList[0].split('-')[0] + '-radio'
  return document.getElementsByClassName(radioClass)
}


const highlightNav = (e) => {
  let radio = targetNavRadio(e)
  let sliderWidth = sliderContainer.clientWidth
  sliderScrollX = sliderContainer.scrollLeft
  radio[0].checked = true
  if (sliderScrollX > sliderWidth && sliderScrollX < (sliderWidth * 2)) {
    radio[1].checked = true
  } else if (sliderScrollX > (sliderWidth * 2)) {
    radio[2].checked = true
  }
}

const clickTest = (e) => {
  console.log(e)
  console.log('i have been recieved')
}


const navByRadio = (e) => {
  sliderWidth = sliderContainer.clientWidth
  let navRadioArray = targetNavRadio(e)
  
  for (let i = 0; i < navRadioArray.length; i++) {
    if(navRadioArray[i].checked) {
      let multiplier = 0
      multiplier += i
      return sliderContainer.scrollLeft = sliderWidth * multiplier
    }
  }
}

renderSliderNavigation('.about-slide','slider-nav-container', 'about-radio')

const navRadios = document.querySelectorAll('.about-radio')
const navRadio = document.querySelectorAll('.about-radio')

addListener(sliderContainer, 'mousedown', detectSliderClick)
addListener(sliderContainer, 'mouseup', detectSliderRelease)
addListener(sliderContainer, 'mouseleave', detectSliderLeave)
addListener(sliderContainer, 'mousemove', detectSliderMovement)
addListener(sliderContainer, 'scroll', highlightNav)

// takes a nodelist as the first argument, and event as the second, and a callback as the third. Iterates through and applies multiple listeners through a forEach loop

addMultListener(navRadios, 'change', navByRadio)
