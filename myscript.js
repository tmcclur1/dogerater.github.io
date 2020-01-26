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
function calculate(bool, idLeft, idRight) {
    return idLeft;
}

window.addEventListener('load', function() {
    document.getElementById("left-image").onclick = function(event) {
	    document.getElementById("left-image").innerHTML = dog.eLO;
		document.getElementById("right-image").innerHTML = dog2.eLO;
	    setTimeout(function () {
			setTimeout(function () {
				document.getElementById("left-image").innerHTML = calculate(true, dog.id, dog2.id);
				setTimeout(function () {
					console.log('3')
				}, 2000)
			}, 2000)
	    }, 2000)
    };
});

window.addEventListener('load', function() {
    document.getElementById("right-image").onclick = function(event) {
        alert("This was my senior quote");
    };
});
