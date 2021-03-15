// const cursor = document.querySelector('#cursor');

// console.log(cursor);

// document.body.addEventListener(type:'mousemove', (e:MouseEvent) =>  {
//     const coord = {
//         x:e.x,
//         y:e.y,
//     }

//     cursor.getElementsByClassName.transform = `translate3D(calc(${coord.x}px - 50%, calc(${coord.y}px - 50%, 0);
// })

// *******************************************************************
var video = document.getElementById("myVideo");
var btn = document.getElementById("judo");
var btnDeux = document.getElementById("hajime");
var videoTwo = document.getElementById("videoTwo");

// function myFunction() {
//     if (onmouseenter = true) {
//         video.removeAttribute("hidden");
//         video.play();
//     } else if (onmouseleave = true) {
//         alert('garce');
//         video.setAttribute("style", "visibility: hidden");
//     }
// };

function myFunction(MouseEvent) {
    if (onmouseover = true) {
        video.removeAttribute("hidden");
        video.play();
        btn.classList.add('show')
    } else if (onmouseout = true) {
        video.setAttribute("style", "visibility: hidden");
    }
};




// document.addEventListener('mouseover', hoverVideo, false);
// var vid = document.getElementsByName("video");
// [].forEach.call(vid, function(item){
//     item.addEventListener('mouseover', hoverVideo, false);
//     item.addEventListener('mouseout', hideVideo, false);
// });
// function hoverVideo(e){
//     this.play();
// }
// function hideVideo(e){
//     this.pause()
// }