import step1Image from './assets/image/step1.svg';
import step2Image from './assets/image/step2.svg';
import step3Image from './assets/image/step3.svg';

export const steps = [
  {
    id: 1,
    title: 'Create a Wallet',
    description:
      'download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.',
    image: step1Image,
  },
  {
    id: 2,
    title: 'Get some sol',
    description:
      'have sol in your wallet to switch to $kekius. If you don’t have any sol, you can buy directly on metamask,  transfer from another wallet, or buy on another exchange and send it to your wallet.',
    image: step2Image,
  },
  {
    id: 3,
    title: 'switch sol for kekius',
    description:
      'switch sol for $kekius We have ZERO taxes so you don’t need to worry about buying with a specific slippage,  although you may need to use slippage during times of market volatility.',
    image: step3Image,
  },
];
