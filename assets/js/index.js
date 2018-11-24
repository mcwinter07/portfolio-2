// vanilla slider JS

const aboutSlider = document.getElementsByClassName('about-slider')[0]
const projectSlider = document.getElementsByClassName('project-slider')[0]



let mouseDownDetected = false
let touchStartDetected = false
let sliderStartX
let sliderScrollX
let currentContainer

const addListener = (element, event, callback) => {
  element.addEventListener(event, callback)
}

const addMultListener = (array, event, callback) => {
  array.forEach((e) => {
    e.addEventListener(event, callback)
  })
}

const detectSliderClick = (e) => {
  currentContainer = e.target.parentNode
  mouseDownDetected = true;
  currentContainer.classList.add('sliderActive')
  sliderStartX = e.pageX - currentContainer.offsetLeft;
  sliderScrollX = currentContainer.scrollLeft
}

const detectSliderRelease = (e) => {
  mouseDownDetected = false
  e.target.classList.remove('sliderActive')
}

const detectSliderLeave = (e) => {
  mouseDownDetected = false
  e.target.classList.remove('sliderActive')
}

const detectSliderMovement = (e) => {
  if(!mouseDownDetected) return
  e.preventDefault
  const mouseDownX = e.pageX - currentContainer.offsetLeft
  const distanceFromOrigin = (mouseDownX - sliderStartX) * 3
  currentContainer.scrollLeft = sliderScrollX - distanceFromOrigin
}

const renderSliderNavigation = (sliderClassName, destinationID, navClassName) => {
  let navigationDoms = ``
  document.querySelectorAll(sliderClassName).forEach(slide => {
    navigationDoms +=
    `
    <li>
      <input type="radio" name="${sliderClassName}" class="${navClassName}"/>
    </li>
    `
  })
  console.log(document.getElementById(destinationID))
  document.getElementById(destinationID).insertAdjacentHTML('afterbegin', navigationDoms)
  document.getElementsByClassName(`${navClassName}`)[0].checked = true
}

// target the nav container and links back to the radio
// assume that radio class will defined in the first part of a string and separated by a '-'

const targetNavRadio = (e) => {
  let radioClass = e.target.classList[0].split('-')[0] + '-radio'
  return document.getElementsByClassName(radioClass)
}

//FIXME: Fix slider visual gitch
  // glitch originates from the fact it listen for a scrol and not click

const highlightNav = (e) => {
  let thisContainer = e.target
  // console.log('container')
  // console.log(thisContainer.clientWidth)
  let radio = targetNavRadio(e)
  let sliderWidth = thisContainer.clientWidth
  sliderScrollX = thisContainer.scrollLeft
  // console.log('scroll x')
  // console.log(sliderScrollX)
  radio[0].checked = true

  //FIXME: Accomotate dynamic slide pop
  //current can only hard code index num
  if (sliderScrollX > sliderWidth - 1 && sliderScrollX < (sliderWidth * 2) - 1) {
    radio[1].checked = true
  } else if (sliderScrollX > (sliderWidth * 2) -1 ) {
    radio[2].checked = true
  }
}

const clickTest = (e) => {
  console.log(e)
  console.log('i have been recieved')
}


const navByRadio = (e) => {
  let Container = document.querySelectorAll(e.target.name)[0].parentNode
  sliderWidth = document.querySelectorAll(e.target.name)[0].clientWidth
  let navRadioArray = targetNavRadio(e)
  
  for (let i = 0; i < navRadioArray.length; i++) {
    if(navRadioArray[i].checked) {
      let multiplier = 0
      multiplier += i
      return Container.scrollLeft = sliderWidth * multiplier
    }
  }
}

renderSliderNavigation('.about-slide','about-nav-container', 'about-radio')

renderSliderNavigation('.project-slide', 'project-nav-container', 'project-radio' )

const aboutRadios = document.querySelectorAll('.about-radio')
const projectRadios = document.querySelectorAll('.project-radio')


addListener(aboutSlider, 'mousedown', detectSliderClick)
addListener(aboutSlider, 'mouseup', detectSliderRelease)
addListener(aboutSlider, 'mouseleave', detectSliderLeave)
addListener(aboutSlider, 'mousemove', detectSliderMovement)
addListener(aboutSlider, 'scroll', highlightNav)

addListener(projectSlider, 'mousedown', detectSliderClick)
addListener(projectSlider, 'mouseup', detectSliderRelease)
addListener(projectSlider, 'mouseleave', detectSliderLeave)
addListener(projectSlider, 'mousemove', detectSliderMovement)
addListener(projectSlider, 'scroll', highlightNav)

// takes a nodelist as the first argument, and event as the second, and a callback as the third. Iterates through and applies multiple listeners through a forEach loop

addMultListener(aboutRadios, 'change', navByRadio)
addMultListener(projectRadios, 'change', navByRadio)


// addMultListener(projectLink, 'mouseover', handleProjectLinks)
const videoController = (e) => {
  const video = e.target
  if (video.paused) { 
    video.play() 
  } else { 
    video.pause()
  }  
}

addListener(document.querySelector("#intro-animation"), 'mousedown', videoController)

