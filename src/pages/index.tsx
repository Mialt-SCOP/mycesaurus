import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/contact">
            Nous contacter
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} : traiteur durable, 0 déchets et végétal à Montpellier`}
      description="Un service traiteur comptabible avec les limites planétaires, pour vos événements et ateliers de cuisine végétale à Montpellier."
    >
      <link rel="preload" fetchpriority="high" as="image" href={require("../../static/img/header_img.webp").default} type="image/webp" />
      <HomepageHeader />
      <main>
        <section className="container home-section">
          <h2>Une cuisine engagée</h2>
          <p>
            <strong>Mycélium</strong> est un traiteur végétal basé à Montpellier. 
            Nous proposons des services de traiteur à domicile, pour vos événements 
            et des ateliers de cuisine végétale. Pour les particuliers, les associations, les entreprises, etc.
          </p>
          <p>
            Conscients des enjeux environnementaux,{" "}
            <strong>nous proposons une cuisine engagée,</strong> compatible avec
            les limites planétaires, afin de rendre ce mode de consommation
            accessible au plus grand nombre. Nos recettes sont{" "}
            <strong>
              exclusivement végétales, composées d'ingrédients issus de
              l'agriculture biologique et / ou locale.
            </strong>{" "}
            Nous portons une attention particulière à limiter notre
            production de déchets de la production au service.
          </p>
        </section>

        <HomepageFeatures />

      </main>
    </Layout>
  );
}
