function scroolAppear(){
var introText = document.querySelector('.intro-text');
var introPosition = introText.getBoundingClientRect().top;
var screenHeight = window.innerHeight / 1.3;
console.log('introPosition' + introPosition);
console.log(screenHeight);

if (introPosition <screenHeight) {
introText.classList.add('intro-appear');

}


}
window.addEventListener('scroll',scroolAppear);