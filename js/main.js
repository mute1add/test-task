var nav = document.querySelector('.search'),
  form = document.querySelector('.form-hover'),
  click = true;
nav.addEventListener('click', function () {
  if (click == true) {
    form.classList.remove('form-hover')
    click = false
  }else {
    form.classList.add('form-hover')
    click = true
  }
})
console.log('hello')

$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,

});
