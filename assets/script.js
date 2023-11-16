const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Variables
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

const banner_img = document.querySelector(".banner_img");
const banner_txt = document.querySelector(".banner__title");

const dots = document.querySelector('.dots')
const dot_selected = document.querySelector('.dot_selected')

let currentSlide = 0

/**
 * Fais tourner automatiquement le slider
 */
function slideshow (){
  setInterval(() => {
    currentSlide++

    if (currentSlide >= slides.length) {
      currentSlide = 0
    }

    displaySlide()
    setActiveDot()

  }, 3000);
}

/**
 * Modifier la slide avec le nouvel indicateur currentSlide
 */
function displaySlide (){
	banner_img.src = './assets/images/slideshow/' + slides[currentSlide].image
	banner_txt.innerHTML = slides[currentSlide].tagLine
}
/**
 * Affiche la slides précédente au clique sur la flèche de gauche
 */
arrow_left.addEventListener('click',  () => {
  previous()
	displaySlide()
  setActiveDot()

})

/**
 * Affiche la slides suivante au clique sur la flèche droite
 */
arrow_right.addEventListener('click', () => {
  next()
	displaySlide()
  setActiveDot()
})

/**
 * Affichage de la liste des dots + ajout des listeners sur chaque dot
 */

function displayDots(){
  for(let i = 0; i < slides.length; i++){
    const dot = document.createElement('button')
    dot.classList.add('dot')
    dots.append(dot)
  
    /**
     * 
     */
    dot.addEventListener('click', () =>{
      currentSlide = i
      
      displaySlide()
      setActiveDot()
    })
  }	
}

/**
 * Modifie le dot selected affiché
 */
function setActiveDot(){
    const dotButtons = document.querySelectorAll('.dot')

    for(let i = 0; i < dotButtons.length; i++){
      dotButtons[i].classList.remove('dot_selected')
    }

    dotButtons[currentSlide].classList.add('dot_selected')
}

/**
 * incremente le slide 
 */
function next(){
	currentSlide++
	if(currentSlide >= slides.length ){
		currentSlide = 0 
	}
}
/**
 * soustrait le slide
 */
function previous(){
  currentSlide--
	if(currentSlide < 0){
		currentSlide = slides.length - 1 
	}
}
/**
 * Première fonction appellée au chargement de la page
 */
function init(){
  // Affichage de la première
  displaySlide()

  // Affichage des dots
  displayDots()

  // Affiche le dot qui correspond à ma slide active en blanc
  setActiveDot()
  
  // Lancement le slider de manière automatique
  slideshow()
}

init()
