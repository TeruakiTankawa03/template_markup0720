export default function () {
	let requestAnimationFrame = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(callback) { return setTimeout(callback, 1000 / 60); };
};