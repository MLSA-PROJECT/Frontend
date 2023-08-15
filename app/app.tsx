// app/app.tsx
import { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MedTech.io</title>
        <meta name="description" content="Discover advanced AI-driven solutions for the early detection of diabetes, heart attacks, and lung cancer. Our technology leverages data analysis to empower proactive health management. Join us at [YourTeamName.io] to safeguard your well-being with innovative, personalized care." />
        
        {/* Additional meta tags */}
        <meta name="keywords" content="healthcare, AI, early detection, diabetes, heart attacks, lung cancer" />
        <meta name="author" content="MedTech.io Team" />
        
        {/* Open Graph (OG) meta tags for social media sharing */}
        <meta property="og:title" content="MedTech.io - Innovative Health Solutions" />
        <meta property="og:description" content="Discover advanced AI-driven solutions for proactive health management." />
        <meta property="og:image" content="https://yourwebsite.com/images/medtech-preview-image.jpg" />
        <meta property="og:url" content="https://mlsa-frontend-beta.vercel.app/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter meta tags for Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MedTech.io - Innovative Health Solutions" />
        <meta name="twitter:description" content="Discover advanced AI-driven solutions for proactive health management." />
        <meta name="twitter:image" content="https://yourwebsite.com/images/medtech-preview-image.jpg" />
        
        {/* Other meta tags */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
