import { Element } from 'react-scroll';

import { PageIDs } from '@/constants';
import { About } from '@/modules/About';
import { Footer } from '@/modules/Footer';
import { Header } from '@/modules/Header';
import { Hero } from '@/modules/Hero';
import { HowToBuy } from '@/modules/HowToBuy';
import { Roadmap } from '@/modules/Roadmap';
import { Tokenomics } from '@/modules/Tokenomics';
import { Divider } from '@/ui/Divider';

import styles from './styles.module.scss';

const Home = () => (
  <main className={styles.container}>
    <Header className={styles.header} />
    <Element name={PageIDs.HOME}>
      <Hero className={styles.hero} />
    </Element>
    <Element name={PageIDs.ABOUT}>
      <About className={styles.about} />
    </Element>
    <Divider />
    <Element name={PageIDs.HOW_TO_BUY}>
      <HowToBuy className={styles.howToBuy} />
    </Element>
    <Divider />
    <Element name={PageIDs.TOKENOMICS}>
      <Tokenomics className={styles.tokenomics} />
    </Element>
    <Divider />
    <Element name={PageIDs.ROADMAP}>
      <Roadmap className={styles.roadmap} />
    </Element>
    <Footer className={styles.footer} />
  </main>
);

export default Home;
