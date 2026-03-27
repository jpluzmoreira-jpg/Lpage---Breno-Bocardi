import React from 'react';
import { Helmet } from 'react-helmet-async';
import { brokerData } from '../config/brokerData';

export const SEO: React.FC = () => {
  const { title, description, keywords, ogImage, favicon } = brokerData.seo;
  const url = window.location.href;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Favicon */}
      {favicon && <link rel="icon" type="image/svg+xml" href={favicon} />}
    </Helmet>
  );
};
