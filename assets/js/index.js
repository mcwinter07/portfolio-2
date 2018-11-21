// vanilla slider JS

const sliderContainer = document.getElementsByClassName('about-slider')[0]

let mouseDownDetected = false
let touchStartDetected = false
let sliderStartX
let sliderScrollX

const addListener = (element, event, callback) => {
  element.addEventListener(event, callback)
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

// assume that radio class will defined in the first part of a string and separated by a '-'

const targetRadio = (e) => {
  let radioClass = e.target.classList[0].split('-')[0] + '-radio'
  return document.getElementsByClassName(radioClass)
}

const highlightNav = (e) => {
  let radio = targetRadio(e)
  let sliderWidth = sliderContainer.clientWidth
  sliderScrollX = sliderContainer.scrollLeft
  radio[0].checked = true
  if (sliderScrollX > sliderWidth && sliderScrollX < (sliderWidth * 2)) {
    radio[1].checked = true
  } else if (sliderScrollX > (sliderWidth * 2)) {
    radio[2].checked = true
  }
}

const navByRadio = (radioClass) => {
  let sliderWidth = sliderContainer.clientWidth
  sliderScrollX = sliderContainer.scrollLeft
  document.querySelectorAll(radioClass).forEach((e) => {
    console.log(e.checked)
    if(e.checked) {
      
    }
    
  })
}

// const detectRadioCheck = (e) => {
//   const el =  document.querySelectorAll(radioClass).forEach((e) => { 
//   e
//  })
// }
//renders nav radio buttons

renderSliderNavigation('.about-slide','slider-nav-container', 'about-radio')

addListener(sliderContainer, 'mousedown', detectSliderClick)
addListener(sliderContainer, 'mouseup', detectSliderRelease)
addListener(sliderContainer, 'mouseleave', detectSliderLeave)
addListener(sliderContainer, 'mousemove', detectSliderMovement)
addListener(sliderContainer, 'scroll', highlightNav)


navByRadio('.about-radio')
//update the size variable for the slider
// window.onresize = adjustSliderSize







// const sliderNav = document.getElementsByClassName('slider-nav')[0]
//offsetlef

