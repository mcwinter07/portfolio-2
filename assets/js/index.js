// vanilla slider JS

const sliderContainer = document.getElementsByClassName('about-slider')[0]

console.log(sliderContainer)
console.log(sliderContainer.classList)

let sliderWidth = sliderContainer.clientWidth

function adjustSliderSize() {
  sliderWidth = sliderContainer.clientWidth
  console.log(sliderWidth)
}

window.onresize = adjustSliderSize


// console.log(.id)

// TODO: renderSliderNodes
renderSliderNavigation = (sectionClassName, destinationID) => {
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

// TODO: moveSliderPosition

  // onlick, find the index of the nav, * by the position of the window and apply to the css of the element
  

  
  renderSliderNavigation('.about-slide','slider-nav-container')


  // count how many slides
  // inject nav items for those slinder into "slider-nav" class
  // populate checkbox id based off slide id
  // on check 
  



// const sliderNav = document.getElementsByClassName('slider-nav')[0]
//offsetlef

