import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullText: false,
  logoDecal: './threejs.png',
  fulDecal: './threejs.png',
});

export default state;
