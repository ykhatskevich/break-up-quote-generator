let quotes = [
	'"Sometimes good things fall apart so better things can fall together." — Marilyn Monroe',
	'"If someone can walk away from you, let them walk."',
	'“Not all storms come to disrupt your life. Some come to clear your path.” —Paulo Coelho',
	'“Nothing in the universe can stop you from letting go and starting over.” —Guy Finley',
	'“One day they wll realize they lost a diamond while playing with worthless stones.” —Turcois Ominek',
	'"You cannot convince people to love you. This is an absolute rule. No one will ever give you love because you want him or her to give it. Real love moves freely in both directions. Do not waste your time on anything else." —Cheryl Strayed',
	'"This is a good sign, having a broken heart. It means we have tried for something." —Elizabeth Gilbert',
	'"Do not change yourself, so other people will like you. Be yourself and the right people will like you." -unknown'
]

// let randomNumber = Math.floor(Math.random() * quotes.length)

function newQuote() {
	let randomNumber = Math.floor(Math.random() * quotes.length)
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]
}
