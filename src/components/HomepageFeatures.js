import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Simple',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        By having an efficient standard mapping, we can capture a wealth of information
        using just 1 JSON object.
      </>
    ),
  },
  {
    title: 'Transferrable',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        It should be easy to transfer leads to and from different services providers.
        You can even capture data from a page and convert it to an OLEX compliant JSON
        and send it anywhere.
      </>
    ),
  },
  {
    title: 'Extensible',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extra fields could be added for different purposes, insurance, real estate, etc.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
