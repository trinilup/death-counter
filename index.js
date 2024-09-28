import { DeathCounter, getParams } from './DeathCounter.js';

const channel = getParams('channel');
const cooldown = getParams('cooldown');
const command = getParams('command');
const font = getParams('font');
const fontFamily = getParams('fontFamily');
const fontSize = getParams('fontSize');
const onlyMods = Boolean(getParams('onlyMods'));
const image = getParams('image');


new DeathCounter({channel, cooldown, command, font, fontSize, fontFamily, onlyMods, image});
