var dog = {
    image: "/images/dog1.jpeg",
    kValue: 30, //add ½ and floor it in order to get the lowest integer
    id: 12345678,
    eLO: 1500,
    gamesPlayed: 10,
	wPerc: 0.8,
}
var dog2 = {
    image: "/images/dog2.jpeg",
    kValue: 25, //add ½ and floor it in order to get the lowest integer
    id: 12345679,
    eLO: 1200,
	gamesPlayed: 4,
	wPerc: 0.8,
}


window.addEventListener('load', function() {
    document.getElementById("left-image").onclick = function(event) {
	    document.getElementById("left-image").innerHTML = dog.eLO;
		document.getElementById("right-image").innerHTML = dog2.eLO;
	    setTimeout(function () {
			setTimeout(function () {
				document.getElementById("left-image").innerHTML = calculate(true, dog, dog2);
				document.getElementById("left-image").innerHTML = calculate(true, dog, dog2);
				setTimeout(function () {
					loadNewMathup(true);
				}, 1000)
			}, 1000)
	    }, 1000)
    };
});

window.addEventListener('load', function() {
    document.getElementById("right-image").onclick = function(event) {
        alert("This was my senior quote");
    };
});


function calculate(bool, dog, dog2) {
    return dog.eLO - 15;
}
function loadNewMatchup(bool) {
	document.getElementById("left-image").style.backgroundImage = "url('/images/dog2.jpeg')";
}
function probability(oppRating){
	return 1.0/(1.0 + Math.pow(10, (oppRating - this.rating)/400);
}
function newRating(oppRating, bool){
	if (bool) {
		return this.rating +(1 - probability(oppRating)) * kFactor;
	} else {
		return this.rating + (-1 * probability(oppRating)) * kFactor
	}
}
function getK(rating, gamesPlayed, wPerc){
	if (gamesPlayed < 5) {
		return 40;
	} else if (gamesPlayed < 15){
		return 30;
	} else if (wPerc > 0.8){
		return 35;
	} else if (rating < 1200){
		return 30;
	} else if (rating < 1700){
		return 20;
	} else if(rating < 2200){
		return 15;
	} else{
		return 10;
	}
}
