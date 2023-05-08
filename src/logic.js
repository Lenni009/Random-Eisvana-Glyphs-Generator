function getRegions(galaxy) {
	const regionGlyphs = [
		'F9556C30',
		'F9555C30',
		'F9555C31',
		'F9556C31',
		'F9557C31',
		'F9557C30',
		'F9557C2F',
		'F9556C2F',
		'F9555C2F',
		'FA556C30',
		'F8556C30',
	]

	const EisHubGlyphs = [
		'FA555C30',
		'FA555C31',
		'FA556C31',
		'FA557C31',
		'FA557C30',
		'FA557C2F',
		'FA556C2F',
		'FA555C2F',
		'F8555C30',
		'F8555C31',
		'F8556C31',
		'F8557C31',
		'F8557C30',
		'F8557C2F',
		'F8556C2F',
		'F8555C2F',
	]
	if (galaxy == 'Eissentam') regionGlyphs.push(...EisHubGlyphs);
	return new Set(regionGlyphs);
}

// this is the main function that gets called when you press the button
function showRandomGlyphs() {
	const galaxy = document.getElementById('galaxyInput').value;
	const regionGlyphs = getRandomRegion(galaxy);
	const SIV = getRandomSIV();
	const planetId = getRandomPlanet();
	const glyphs = planetId + SIV + regionGlyphs;
	displayGlyphs(glyphs);
}

function getRandomRegion(galaxy) {
	const regions = getRegions(galaxy);
	const regionSize = regions.size;
	const randomIndex = getRandomNumber(0, regionSize);
	const chosenRegion = Array.from(regions)[randomIndex];
	return chosenRegion;
}

function getRandomSIV() {
	const decId = getRandomNumber(1, 768)		// 768 is 300 in Hex, which is not possible as a system ID
	const hexId = decId.toString(16).toUpperCase();
	const SIV = hexId.padStart(3, '0');
	return SIV;
}

function getRandomPlanet() {
	const planetId = getRandomNumber(1, 7);		// since the second arg is *excluding*, we need to be one higher than the maximum to include 6
	return planetId;
}

// from https://www.w3schools.com/js/js_random.asp
// this JavaScript function always returns a random number between min (included) and max (excluded):
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function displayGlyphs(glyphs) {
	const output = document.getElementById('glyphOutput');
	output.innerText = glyphs;
}