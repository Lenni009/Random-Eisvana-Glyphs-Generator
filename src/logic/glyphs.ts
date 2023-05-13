import { getRandomNumber } from './randomGenerator';
import { getRegions } from './getRegions';

export function getRandomGlyphs(galaxy: string) {
	const regionGlyphs = getRandomRegion(galaxy);
	const SIV = getRandomSIV();
	const planetId = getRandomPlanet();
	const glyphs = planetId + SIV + regionGlyphs;
	return glyphs;
}

function getRandomRegion(galaxy: string): string {
	const regions = getRegions(galaxy);
	const regionSize = regions.size;
	const randomIndex = getRandomNumber(0, regionSize);
	const chosenRegion = Array.from(regions)[randomIndex];
	return chosenRegion;
}

function getRandomSIV(): string {
	const decId = getRandomNumber(1, 768)		// 768 is 300 in Hex, which is not possible as a system ID
	const hexId = decId.toString(16).toUpperCase();
	const SIV = hexId.padStart(3, '0');
	return SIV;
}

function getRandomPlanet(): string {
	const planetId = getRandomNumber(1, 7);		// since the second arg is *excluding*, we need to be one higher than the maximum to include 6
	return planetId.toString();
}