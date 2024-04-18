import React from 'react';
import Footer from '@theme-original/Footer';
import type FooterType from '@theme/Footer';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <>
      <Footer {...props} />
      <link rel="preload" fetchpriority="high" as="font" href={require("@site/static/font/BarlowSemiCondensed-Regular.woff2").default} type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" fetchpriority="high" as="font" href={require("@site/static/font/BarlowSemiCondensed-ExtraBold.woff2").default} type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" fetchpriority="high" as="font" href={require("@site/static/font/BarlowSemiCondensed-SemiBold.woff2").default} type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" fetchpriority="high" as="font" href={require("@site/static/font/Linotype-Feltpen-Medium.woff2").default} type="font/woff2" crossOrigin="anonymous" />
    </>
  );
}
