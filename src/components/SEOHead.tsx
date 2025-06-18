import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'GameBox Arena - Where Gamers Become Legends',
  description = 'Professional esports organization hosting LAN and online tournaments. Join the community where gamers become legends.',
  keywords = 'esports, gaming, tournaments, LAN, online gaming, competitive gaming, South Africa, GameBox Arena',
  image = 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1200',
  url = 'https://gameboxarena.com',
  type = 'website'
}) => {
  const fullTitle = title.includes('GameBox Arena') ? title : `${title} | GameBox Arena`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="GameBox Arena" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="GameBox Arena" />
      <meta property="og:locale" content="en_ZA" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@GameBoxArena" />
      <meta name="twitter:creator" content="@GameBoxArena" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0066ff" />
      <meta name="msapplication-TileColor" content="#0066ff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="GameBox Arena" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "GameBox Arena",
          "description": description,
          "url": url,
          "logo": image,
          "sameAs": [
            "https://twitter.com/GameBoxArena",
            "https://instagram.com/GameBoxArena",
            "https://tiktok.com/@GameBoxArena"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+27-82-123-4567",
            "contactType": "customer service",
            "email": "info@gameboxarena.com"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;