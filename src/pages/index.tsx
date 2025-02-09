import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import MyceliumLogo from "@site/static/img/mycelium.svg";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <MyceliumLogo title="Logo Mycelium traiteur à Montpellier" />
        <Heading as="h1" className="hero__title">
          <strong>traiteur bas carbone</strong>
          biologique, zéro-déchet et végétal
          <strong>à Montpellier</strong>
        </Heading>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/contact">
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
      title={`${siteConfig.title} : traiteur durable, zéro déchet, biologique et végétal à Montpellier`}
      description="Un service traiteur comptabible avec les limites planétaires, pour vos événements et ateliers de cuisine végétale à Montpellier."
    >
      <link
        rel="preload"
        fetchpriority="high"
        as="image"
        href={
          require("../../static/img/traiteur-zero-dechet-hiver.webp").default
        }
        type="image/webp"
      />
      <HomepageHeader />
      <main>
        <section className="home-section">
          <div className="container">
            <h2>Nos services</h2>
            <HomepageFeatures />
          </div>
        </section>
        <section className="home-section">
          <div className="container">
            <h2>Une cuisine engagée</h2>
            <p>
              <strong>Mycélium</strong> est un traiteur végétal basé à
              Montpellier. Nous proposons des services de traiteur à domicile,
              pour vos événements et des ateliers de cuisine végétale. Pour les
              particuliers, les associations, les entreprises, etc.
            </p>
            <p>
              Conscients des enjeux environnementaux,{" "}
              <strong>nous proposons une cuisine engagée,</strong> compatible
              avec les limites planétaires, afin de rendre ce mode de
              consommation accessible au plus grand nombre. Nos recettes sont{" "}
              <strong>
                exclusivement végétales, composées d'ingrédients issus de
                l'agriculture biologique et / ou locale.
              </strong>{" "}
              Nous portons une attention particulière à limiter notre production
              de déchets de la production au service.
            </p>
            <div className={styles.commitments}>
              <div className={styles.commitment}>
                <h3>Végétale</h3>
                <figure>
                  <img
                    src={
                      require("../../static/img/traiteur-vegan-montpellier.png")
                        .default
                    }
                    alt="Traiteur végétal à Montpellier"
                  />
                </figure>
                <caption>
                  Réduisez <strong>l’empreinte carbone</strong> de vos
                  événements grâce à une cuisine gourmande et créative, sans
                  produits d’origine animale.
                </caption>
                <p className={styles.commitmentResult}>
                  -60%
                  <br />
                  eqCO2
                </p>
                <a href="/traiteur-zero-dechet-montpellier">En savoir plus</a>
              </div>

              <div className={styles.commitment}>
                <h3>Produits biologiques</h3>
                <figure>
                  <img
                    src={
                      require("../../static/img/traiteur-biologique-montpellier.png")
                        .default
                    }
                    alt="Traiteur biologique à Montpellier"
                  />
                </figure>
                <caption>
                  Nos produits issus de l’agriculture biologique{" "}
                  <strong>protègent la biodiversité</strong> et la santé de nos
                  agriculteurs et agricultrices.
                </caption>
                <p className={styles.commitmentResult}>
                  +30%
                  <br />
                  biodiversité
                </p>
                <a href="/traiteur-biologique-montpellier">En savoir plus</a>
              </div>

              <div className={styles.commitment}>
                <h3>Zéro déchet</h3>
                <figure>
                  <img
                    src={
                      require("../../static/img/traiteur-zero-dechet-montpellier.png")
                        .default
                    }
                    alt="Traiteur zéro déchet à Montpellier"
                  />
                </figure>
                <caption>
                  Nous privilégions de la vaisselle réutilisable et{" "}
                  <strong>limitons au maximum les déchets</strong> au cours de
                  la production de nos plats.
                </caption>
                <p className={styles.commitmentResult}>
                  réduction
                  <br />
                  micro-plastiques
                </p>
                <a href="/traiteur-zero-dechet-montpellier">En savoir plus</a>
              </div>

              <div className={styles.commitment}>
                <h3>Local</h3>
                <figure>
                  <img
                    src={
                      require("../../static/img/traiteur-local-montpellier.png")
                        .default
                    }
                    alt="Traiteur local à Montpellier"
                  />
                </figure>
                <caption>
                  Nous soutenons les{" "}
                  <strong>productrices et producteurs locaux</strong> pour des
                  produits frais et de saison, tout en renforçant le tissu
                  social de notre région.
                </caption>
                <p className={styles.commitmentResult}>
                  +200%
                  <br />
                  emplois
                </p>
                <a href="/traiteur-local-montpellier">En savoir plus</a>
              </div>
            </div>
          </div>
        </section>
        {/*<section className="home-section">
          <div className="container">
            <h2>Ils nous ont fait confiance</h2>
            <div className="testimonial">
              <strong>Marie L. - Responsable événementiel</strong>
              <br />
              <blockquote>
                "Un buffet délicieux, éthique et parfaitement adapté à notre
                séminaire d’entreprise. Merci Mycélium !"
              </blockquote>
            </div>
            <div className="testimonial">
              <strong>Thomas & Camille - Jeunes mariés</strong>
              <br />
              <blockquote>
                "Une cuisine créative et savoureuse pour notre mariage. Nos
                invités ont été bluffés par la qualité et l’originalité des
                plats !"
              </blockquote>
            </div>
            <div className="testimonial">
              <strong>Jules D. - Participant à un atelier</strong>
              <br />
              <blockquote>
                "Un atelier de cuisine durable passionnant. J'ai appris à
                cuisiner des produits locaux tout en réduisant mon impact
                environnemental."
              </blockquote>
            </div>
          </div>
        </section>*/}
      </main>
    </Layout>
  );
}
