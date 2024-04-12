import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.scss";

type FeatureWithSvg = {
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  src?: never;
};

type FeatureWithImage = {
  Svg?: never;
  src: string;
  alt: string;
};

type FeatureItem = {
  title: string;
  description: JSX.Element;
} & (FeatureWithImage | FeatureWithSvg);

const FeatureList: FeatureItem[] = [
  {
    title: "À domicile",
    src: require("@site/static/img/img-a-domicile.webp").default,
    alt: "Une assiette de légumes",
    description: (
      <>
        Avec <b>notre service à domicile, vivez pleinement chaque instant.</b>
        <br />
        Pendant tout votre séjour, nous prenons en charge vos repas pour vous permettre de vous concentrer 
        sur des moments de connexion et de cohésion précieux pour le collectif.
      </>
    ),
  },
  {
    title: "Événements",
    src: require("@site/static/img/img-evenements.webp").default,
    alt: "Des tartelettes",
    description: (
      <>
        Pendant vos événements,
        <b>
          libérez-vous de la logisitque des repas pour vous concentrer sur l’objet de votre événement.
        </b>
        <br />
        Nous nous adaptons à vos besoins et contraintes pour vous proposer des
        cocktails, buffets, apéritifs dinatoires pour toutes vos occasions.
      </>
    ),
  },
  {
    title: "Ateliers de cuisine",
    src: require("@site/static/img/img-ateliers.webp").default,
    alt: "Des makis et muffins",
    description: (
      <>
        <b>Explorez, Apprenez et Dégustez !</b>
        En groupe ou en solo, découvrez, approfondissez ou perfectionnez vos
        connaissances en cuisine végétale. Nous adaptons nos propositions en
        fonction de vos envies : une technique, un type de plat, un menu
        complet, etc.
      </>
    ),
  },
];

function Feature({ title, Svg, src, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={clsx("text--center", styles.featureImageContainer)}>
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <figure
            className={styles.featureFigure}
            role="img"
            style={{ backgroundImage: `url(${src})` }}
          ></figure>
        )}
      </div>
      <div className={styles.FeatureBody}>
        <Heading as="h3" className={styles.FeatureTitle}>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
