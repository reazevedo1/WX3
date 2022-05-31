// Menu responsivo
const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
// Fim do Menu

// Carrossel
let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  let i
  let slides = document.getElementsByClassName('slide')
  let dots = document.getElementsByClassName('marcador')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
}
// Fim do carrossel

// Carrossel Lançamentos
let cardIndex = 1
cardSlide(cardIndex)

function plusCard(n) {
  cardSlide((cardIndex += n))
}

function currentCard(n) {
  cardSlide((cardIndex = n))
}

function cardSlide(n) {
  let i
  let slides = document.getElementsByClassName('mySlides')
  let cardSlides = document.getElementsByClassName('lmarc')
  if (n > slides.length) {
    cardIndex = 1
  }
  if (n < 1) {
    cardIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < cardSlides.length; i++) {
    cardSlides[i].className = cardSlides[i].className.replace(' active', '')
  }
  slides[cardIndex - 1].style.display = 'block'
  cardSlides[cardIndex - 1].className += ' active'
}
// Fim Lançamentos

// Carrossel Destaques
let destaqueIndex = 1
destaqueSlides(destaqueIndex)

function plusdestaques(n) {
  destaqueSlides((destaqueIndex += n))
}

function currentdestaques(n) {
  destaqueSlides((destaqueIndex = n))
}
function destaqueSlides(n) {
  let i
  let slides = document.getElementsByClassName('myDestaques')
  let dots = document.getElementsByClassName('dmarc')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[destaqueIndex - 1].style.display = 'block'
  dots[destaqueIndex - 1].className += ' active'
}
// Fim Destaques

// Carrossel Outlet
let outIndex = 1
outSlide(outIndex)

function plusOut(n) {
  outSlide((outIndex += n))
}

function currentOut(n) {
  outSlide((outIndex = n))
}

function outSlide(n) {
  let i
  let oslides = document.getElementsByClassName('myOutlet')
  let outSlides = document.getElementsByClassName('omarc')
  if (n > oslides.length) {
    outIndex = 1
  }
  if (n < 1) {
    outIndex = oslides.length
  }
  for (i = 0; i < oslides.length; i++) {
    oslides[i].style.display = 'none'
  }
  for (i = 0; i < outSlides.length; i++) {
    outSlides[i].className = outSlides[i].className.replace(' active', '')
  }
  oslides[outIndex - 1].style.display = 'block'
  outSlides[outIndex - 1].className += ' active'
}
// Fim Outlet

//Depoimentos
let depoIndex = 1
depoSlide(depoIndex)

function currentDepo(n) {
  depoSlide((depoIndex = n))
}

function depoSlide(n) {
  let i
  let dslides = document.getElementsByClassName('myDepoimentos')
  let depoSlide = document.getElementsByClassName('md')
  if (n > dslides.length) {
    depoIndex = 1
  }
  if (n < 1) {
    depoIndex = dslides.length
  }
  for (i = 0; i < dslides.length; i++) {
    dslides[i].style.display = 'none'
  }
  for (i = 0; i < depoSlide.length; i++) {
    depoSlide[i].className = depoSlide[i].className.replace(' active', '')
  }
  dslides[depoIndex - 1].style.display = 'block'
  depoSlide[depoIndex - 1].className += ' active'
}
//Fim de Depoimentos
