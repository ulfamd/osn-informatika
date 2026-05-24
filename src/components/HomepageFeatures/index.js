import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Apa itu OSN?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Pelajari pengertian OSN, khususnya OSN Informatika SMA, mulai dari
        computational thinking, algoritma, struktur data, hingga tips dan
        strategi belajar untuk persiapan olimpiade.
      </>
    ),
  },
  {
    title: 'OSN Informatika 2024',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Kumpulan pembahasan soal OSN Informatika SMA tahun 2024 lengkap dengan
        penjelasan langkah demi langkah, analisis soal, konsep algoritma, dan
        pembahasan yang mudah dipahami siswa maupun pembina.
      </>
    ),
  },
  {
    title: 'OSN Informatika 2025',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Dokumentasi pembahasan soal OSN Informatika SMA tahun 2025 beserta cara
        berpikir, strategi penyelesaian, konsep penting, dan pembahasan detail
        untuk membantu latihan dan persiapan kompetisi.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
