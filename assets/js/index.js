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

// TODO: renderSliderNodes

  // console.log(.id)
  renderPopularItems = () => {
    let navigationDoms = ``
    document.querySelectorAll('.about-slide').forEach(slide => {
      console.log(slide)
      navigationDoms +=
      `
      <li class="about-list-item">
        <input type="checkbox" class="about-checkbox" id="${slide.id}-checkbox"/>
      </li>
      `
    })
    document.getElementById('slider-nav-container').insertAdjacentHTML('afterbegin', navigationDoms)
  }
  
  renderPopularItems()


  // count how many slides
  // inject nav items for those slinder into "slider-nav" class
  // populate checkbox id based off slide id
  // on check 
  



// const sliderNav = document.getElementsByClassName('slider-nav')[0]
//offsetlef

