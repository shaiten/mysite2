let myIndex = 0;

function carousel() {
    let slides = document.getElementsByClassName("slides");
    for (let slide of slides){
    	slide.style.display = "none"
    }
    myIndex++;
    if (myIndex > slides.length) {myIndex = 1}    
    slides[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3255); // Change image every 2 seconds
}

function rColor(){
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
	setTimeout(rColor, 2000);
}

function setRandomColor(){
	let hcolor = document.getElementsByClassName('randomColor');
 	hcolor[0].style.color = rColor();
 	setTimeout(setRandomColor, 2000);
}

carousel();
setRandomColor();