import '../styles/globals.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Head from 'next/head'
import { CLSThresholds, FCPThresholds, FIDThresholds, INPThresholds, LCPThresholds, TTFBThresholds } from 'web-vitals';
import Script from 'next/script';
import { pageview } from '../lib/gtag';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export const isDevEnvironment = process && process.env.NODE_ENV === "development";

const ThresholdMapping = {
  'CLS': CLSThresholds,
  'LCP': LCPThresholds,
  'INP': INPThresholds,
  'FID': FIDThresholds,
  'TTFB': TTFBThresholds,
  'FCP': FCPThresholds
}

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  const handleRouteChange = (url: string) => {
    pageview(url);
  }

  useEffect(() => {

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };

  }, [router.events])

  return (
    <>
      <Head>
        <title>Kin Home</title>
      </Head>

      {/* <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-2XX42RRH26'></Script>

      <script 
      dangerouslySetInnerHTML={{
        __html: `
        <!-- Google tag (gtag.js) -->
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2XX42RRH26');
        `
      }} 
      /> */}

{/* <!-- Google tag (gtag.js) Rovae start--> */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-S3MW6HSNH8"/>

      <script
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-S3MW6HSNH8');
        `
      }}/>
{/* <!-- Google tag (gtag.js) Rovae end--> */}

      <Script
        id='my-script'
        dangerouslySetInnerHTML={{
          __html: `
        <!-- Google Tag Manager -->
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MBV3M2Z')
        <!-- End Google Tag Manager -->`,
        }}
      />

      {/* <Analytics/> */}
      <Component {...pageProps} />
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MBV3M2Z"
        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
    </>
  )
}


export function reportWebVitals(metric: NextWebVitalsMetric) {

  const { value, id, name, attribution, label } = metric


  // console.log(metric)

  const eventParams: any = {
    // Built-in params:
    value: Math.round(name === 'CLS' ? value * 1000 : value), // Use `delta` so the value can be summed.
    // Custom params:
    metric_id: id, // Needed to aggregate events.
    metric_value: value, // Optional.
    metric_rating: (label === 'web-vital') ? (value <= ThresholdMapping[name][0] ? 'good' : value > ThresholdMapping[name][1] ? 'poor' : 'needs improvement') : 'not applicable',
    nonInteraction: true,
    transport: 'beacon',


  };

  switch (name) {
    case 'CLS':

      eventParams.debug_target = attribution?.largestShiftTarget;
      break;
    case 'INP':
    case 'FID':
      eventParams.debug_target = attribution?.eventTarget;
      break;
    case 'LCP':
      eventParams.debug_target = attribution?.element;
      break;
  }


  if (isDevEnvironment) {
    console.log(name, eventParams);
  } else {
    window.gtag('event', name, eventParams);

  }

}
