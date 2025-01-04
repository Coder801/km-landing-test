import coingecko from './assets/icons/coingecko.svg';
import coinmarket from './assets/icons/coinmarket.svg';
import solscan from './assets/icons/solscan.svg';
import telegram from './assets/icons/telegram.svg';
import x from './assets/icons/x.svg';

export enum SocialList {
  x = 'x',
  telegram = 'telegram',
  coinmarket = 'coinmarket',
  coingecko = 'coingecko',
  solscan = 'solscan',
}

export const socials = [
  {
    name: SocialList.x,
    image: x,
    link: '#',
  },
  {
    name: SocialList.telegram,
    image: telegram,
    link: '#',
  },
  {
    name: SocialList.coinmarket,
    image: coinmarket,
    link: '#',
  },
  {
    name: SocialList.coingecko,
    image: coingecko,
    link: '#',
  },
  {
    name: SocialList.solscan,
    image: solscan,
    link: '#',
  },
];
