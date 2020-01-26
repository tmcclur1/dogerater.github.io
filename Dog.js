class Dog {
  
	constructor(rating, gamesPlayed, kFactor, wPerc, image) {
		this.rating = rating;
		this.gamesPlayed = gamesPlayed;
		this.kFactor = kFactor;
		this.wPerc = wPerc;
		this.image = image;
	}
	get rating() {
		return this.rating;
	}
	get gamesPlayed() {
		return this.gamesPlayed;
	}
	get kFactor() {
		return this.kFactor;
	}
	get wPerc() {
		return this.wPerc;
	}
	get image() {
		return this.image;
	}
// 	set rating(x) {
// 		this.rating = x;
// 	}
// 	set gamesPlayed(x) {
// 		this.gamesPlayed = x;
// 	}
// 	set kFactor(x) {
// 		this.kFactor = x;
// 	}
// 	set wPerc(x) {
// 		this.wPerc = x;
// 	}
// 	set image(x) {
// 		this.image = x;
// 	}
}
