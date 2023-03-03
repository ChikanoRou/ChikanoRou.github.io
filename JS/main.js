 /* Start Preload */

setTimeout(function () {
	document.body.classList.add('body_visible');
}, 300);

 // End Preload //

 // Start Audio //

let soundButton = document.querySelector('.soundbutton'),
	audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})

 // End Audio //

//  $(function() {
// 	setTimeout(function() {
// 	  $(".footer__inner-item").css("background-color", "green");
// 	}, 2000);
//   });