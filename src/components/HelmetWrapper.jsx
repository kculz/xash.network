// src/components/HelmetWrapper.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const HelmetWrapper = ({ 
  title, 
  description, 
  canonical = "https://xash.network",
  image = "https://xash.network/images/logo.jpg",
  type = "website"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="POS Zimbabwe, bill payments, financial software, mobile payments, airtime, electricity bills, DSTV, business software, fintech Zimbabwe" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Xash Solutions" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};

export default HelmetWrapper;