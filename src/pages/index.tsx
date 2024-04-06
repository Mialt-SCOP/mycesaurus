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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <section className="container home-section">
          <h2>Une cuisine engagée</h2>
          <p>
            Pour une alimentation végétale, respectueuse de tous les êtres
            vivants et de l'environnement, <strong>Mycélium</strong> est un
            traiteur végétal basé à Montpellier. Nous proposons des services de
            traiteur à domicile, pour vos événements et des ateliers de cuisine
            végétale.
          </p>
          <p></p>
          <p>
            Conscients des enjeux environnementaux,{" "}
            <strong>nous proposons une cuisine engagée,</strong> compatible avec
            les limites planétaires, afin de rendre ce mode de consommation
            accessible au plus grand nombre. Nos recettes sont{" "}
            <strong>
              exclusivement végétales, composées d'ingrédients issus de
              l'agriculture biologique et / ou locale.
            </strong>{" "}
            Nous portons aussi une attention particulière à limiter notre
            production de déchets de la production au service.
          </p>
        </section>
        <HomepageFeatures />

        <section className="container home-section">
          <h2>À qui s'adressons-nous ?</h2>
          <p>
            <b>pour des rencontres de travail sur une ou plusieurs journées</b>
          </p>

          <p>
            Vous êtes une équipe de travail, une entreprise, une association, un
            groupe de personnes qui travaillez la majorité du temps et à
            distance et vous souhaitez vous retrouver en présentiel pour une
            certaine durée dans un lieu que vous louez. Nous pouvons cuisiner
            directement sur place ou en livraisons.
          </p>

          <p>
            <b>pour des événements exceptionnels</b>
          </p>

          <p>
            Pour des anniversaire, mariages, fêtes variées, nous vous [IL MANQUE
            UN MOT ICI]de rendre l'expérience culinaire de vos convives
            mémorable.
          </p>

          <p>
            <b>pour des repas à la maison comme au restaurant</b>
          </p>

          <p>
            Nous vous proposons un service de chef à domicile pour vivre une
            expérience comme au restaurant à la maison
          </p>

          <p>
            Ce service de traiteur ne se limite pas à la préparation de
            délicieux repas. Nous pouvons vous offrir un service complet, y
            compris la mise en place des tables, la gestion du service pendant
            l'événement, ainsi que le nettoyage. Vous n'aurez à vous soucier de
            rien.
          </p>
        </section>

        <section className="container home-section">
          <h2>Comment est-ce que je procède ?</h2>
          <p>
            <b>1. Première rencontre de prise de contact</b>
          </p>
          <p>
            Lors d'une première rencontre**, vous me présentez votre événement,
            sa configuration et vos contraintes.
          </p>

          <p>
            <b> 2. Recherche et création des menus</b>
          </p>
          <p>
            {" "}
            A partir de vos contraintes, du lieu où se déroule votre événement,
            de la saison et de la disponibilité des ingrédient, je crée
            plusieurs menus que je vous partage pour que vous puissiez les
            étudier et pourquoi pas les partager à vos convives, collègues, etc.
            Nous échangeons par mail afin que j'améliore les menus en fonction
            de vos retours.
          </p>

          <p>
            <b>3. Rencontre de validation des menus</b>
          </p>
          <p>
            Nous nous rencontrons* une seconde fois pour affiner et valider les
            menus ensemble.
          </p>
          <p>
            *&nbsp; Je peux aussi vous accompagner dans la recherche de votre lieu
            <br />
            ** Ces rencontres peuvent se faire en présentiel ou en visio en
            fonction de votre localité.
          </p>
        </section>

      </main>
    </Layout>
  );
}
