var bullets = document.querySelectorAll('.bullet');
var background = document.querySelectorAll('.background');

for (var i = 0; i < bullets.length; i++) {
	bullets[i].onclick = function(e) {
		var activeBullet = document.querySelector('.bullet.active');
		activeBullet.classList.remove('active');
		e.target.classList.add('active');
		for (var k = 0; k < background.length; k++) {
			background[k].style.backgroundColor = (e.target.getAttribute('data-color'));
		}
	}
}

var leftSliderArrow = document.querySelectorAll('.arrow-left');
var rightSliderArrow = document.querySelectorAll('.arrow-right');
for (var i = 0; i < rightSliderArrow.length; i++) {
	rightSliderArrow[i].onclick = function() {
		if (this.parentElement.nextElementSibling == null) {
			this.parentElement.classList.toggle('active');
			return this.parentElement.parentElement.children[0].classList.toggle('active');
		}
		this.parentElement.nextElementSibling.classList.toggle('active');
		this.parentElement.classList.toggle('active');
	}
}
for (var i = 0; i < leftSliderArrow.length; i++) {
	leftSliderArrow[i].onclick = function() {
		if (this.parentElement.previousElementSibling == null) {
			this.parentElement.classList.toggle('active');
			return this.parentElement.parentElement.children[this.parentElement.parentElement.children.length-1].classList.toggle('active');
		}
		this.parentElement.previousElementSibling.classList.toggle('active');
		this.parentElement.classList.toggle('active');
	}
}