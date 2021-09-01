function initCarousel() {
  let picture =  document.querySelector('.carousel__inner');
  let ar =  document.querySelector('.carousel__arrow_right');
  let al = document.querySelector('.carousel__arrow_left');
let x = 0
function hide(){
switch (true) {
  case x == 0: 
  al.style.display = 'none';
  break;
  case x == 3:
  ar.style.display = 'none';
  break;
  default:
    al.style.display = 'block',   ar.style.display = 'block';
    break;
}}

hide();
  forward = () => { ++x, picture.style.transform = `translateX(-${x * picture.offsetWidth}px)`
 hide()
return x
}
backward = () => { --x, picture.style.transform = `translateX(${-x * picture.offsetWidth}px)`
 hide()
return x
}

  ar.addEventListener('click', forward)
  al.addEventListener('click', backward)
}
