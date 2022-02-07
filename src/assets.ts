import LibraryImage from './images/library.jpg'
import BonfireImage from './images/beginning-bonfire.jpg'
import SwordImage from './images/beginning-sword.jpg'
import CampImage from './images/camp.jpg'
import ForrestImage from './images/forrest.jpg'
import MountainImage from './images/mountain.jpg'
import MorningImage from './images/morning.jpg'
import SwordFavicon from './images/favicon.png'
import BonfireSound from './sounds/bonfire.wav'
import PageTurnSound from './sounds/page_turn.mp3'
import MorgningBirtsSound from './sounds/birds.mp3'
import ForrestAmbienceSound from './sounds/forrest.mp3'
import MountainMeadowSound from './sounds/mountain.mp3'
import { ImageAsset, SoundAsset } from './assetTypes'

export const FaviconImageAsset: ImageAsset = {
  name: 'Sword Favicon',
  type: 'image',
  file: SwordFavicon,
  credit: 'Twemoji - Twitter, Inc and other contributors',
  creditLink: 'https://twemoji.twitter.com/',
  license: 'CC BY 4.0',
}

export const morningImageAsset: ImageAsset = {
  name: 'Morning sunrise',
  type: 'image',
  file: MorningImage,
  credit: 'Dawid Zawiła',
  creditLink: 'https://unsplash.com/photos/-G3rw6Y02D0',
  license: 'unsplash',
}

export const mountainImageAsset: ImageAsset = {
  name: 'Mountain landscape',
  type: 'image',
  file: MountainImage,
  credit: 'Jashandeep Singh Kaleka',
  creditLink: 'https://unsplash.com/photos/0i1xlrAXroY',
  license: 'unsplash',
}

export const forrestImageAsset: ImageAsset = {
  name: 'Forrest path',
  type: 'image',
  file: ForrestImage,
  credit: 'Ali Kazal',
  creditLink: 'https://unsplash.com/photos/nvkLOtFC0Wc',
  license: 'unsplash',
}

export const campImageAsset: ImageAsset = {
  name: 'Medieval camp',
  type: 'image',
  file: CampImage,
  credit: 'Amuljar',
  creditLink:
    'https://pixabay.com/de/photos/mittelalter-zelte-veranstaltung-2111885/',
  license: 'CCO 1.0',
}

export const bonfireImageAsset: ImageAsset = {
  name: 'Bonfire',
  type: 'image',
  file: BonfireImage,
  credit: 'Chirag Nayak',
  creditLink: 'https://unsplash.com/photos/iZwQbx4T8bQ',
  license: 'pixabay',
}

export const libraryImageAsset: ImageAsset = {
  name: 'Library',
  type: 'image',
  file: LibraryImage,
  credit: 'Prateek Katyal',
  creditLink: 'https://unsplash.com/photos/Tl0lYXcyT-A',
  license: 'unsplash',
}

export const swordImageAsset: ImageAsset = {
  name: 'Mystic sword',
  type: 'image',
  file: SwordImage,
  credit: 'Ricardo Cruz',
  creditLink: 'https://unsplash.com/photos/DCqvWkXF74Q',
  license: 'unsplash',
}

export const bonfireSoundAsset: SoundAsset = {
  name: 'Bonfire',
  type: 'backgroundMusic',
  file: BonfireSound,
  credit: 'forfie',
  creditLink: 'https://freesound.org/people/forfie/sounds/364992/',
  license: 'CCO 1.0',
}

export const pageTurnSoundAsset: SoundAsset = {
  name: 'Page turn',
  type: 'soundEffect',
  file: PageTurnSound,
  credit: 'parteeban',
  creditLink: 'https://freesound.org/people/partheeban/sounds/457767/',
  license: 'CCO 1.0',
}

export const morningBirdsSoundAsset: SoundAsset = {
  name: 'Birds in the morning',
  type: 'backgroundMusic',
  file: MorgningBirtsSound,
  credit: 'BurghRecords',
  creditLink: 'https://freesound.org/people/BurghRecords/sounds/554513/',
  license: 'CCO 1.0',
}

export const forrestAmbienceSoundAsset: SoundAsset = {
  name: 'Forrest Ambience',
  type: 'backgroundMusic',
  file: ForrestAmbienceSound,
  credit: 'tbrenneche',
  creditLink: 'https://freesound.org/people/tbrenneche/sounds/475566/',
  license: 'CCO 1.0',
  volume: 0.5,
}

export const mountainMeadowSoundAsset: SoundAsset = {
  name: 'Mountain Meadow',
  type: 'backgroundMusic',
  file: MountainMeadowSound,
  credit: 'Tonmeister',
  creditLink: 'https://freesound.org/people/Tonmeister88/sounds/454841/',
  license: 'CCO 1.0',
}
