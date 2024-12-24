import React from "react";
import { Helmet } from "react-helmet";
import { helmetJsonLdProp } from "react-schemaorg";
import {
  Article,
  Product,
  FAQPage,
  HowTo,
  Review,
  VideoObject,
  ItemAvailability,
} from "schema-dts";

const defaultProps = {
  title: "JoshShearer",
} as {
  title: string;
  desc: string;
  keywords?: string;
  image?: string;
  url: string;
  altLink?: string;
  type: string;
  datePublished?: string;
  dateModified?: string;
  brand?: string;
  price?: string;
  currency?: string;
  availability?: ItemAvailability;
  contentUrl?: string;
  embedUrl?: string;
  uploadDate?: string;
  duration?: string;
};

export const Comps_misc_SEO = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  let jsonLd: any = {};

  switch (props.type) {
    case "article":
      jsonLd = helmetJsonLdProp<Article>({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: props.title,
        description: props.desc,
        image: props.image,
        url: "https://JoshShearer.co" + props.url,
        author: {
          "@type": "Organization",
          name: "JoshShearer",
        },
        datePublished: props.datePublished,
        dateModified: props.dateModified,
      });
      break;
    case "product":
      jsonLd = helmetJsonLdProp<Product>({
        "@context": "https://schema.org",
        "@type": "Product",
        name: props.title,
        description: props.desc,
        image: props.image,
        url: "https://JoshShearer.co" + props.url,
        brand: props.brand,
        offers: {
          "@type": "Offer",
          price: props.price,
          priceCurrency: props.currency,
          // @ts-ignore
          availability: props.availability ? `http://schema.org/${props.availability}` : undefined,
        },
      });
      break;
    case "FAQ":
      jsonLd = helmetJsonLdProp<FAQPage>({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        // You'll need to structure the FAQ content accordingly
      });
      break;
    case "How-to":
      jsonLd = helmetJsonLdProp<HowTo>({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: props.title,
        description: props.desc,
        // You'll need to structure the HowTo steps accordingly
      });
      break;
    case "review":
      jsonLd = helmetJsonLdProp<Review>({
        "@context": "https://schema.org",
        "@type": "Review",
        itemReviewed: {
          "@type": "Thing",
          name: props.title,
        },
        reviewBody: props.desc,
        author: {
          "@type": "Person",
          name: "Reviewer's Name", // This should be dynamic based on the review
        },
        datePublished: props.datePublished,
      });
      break;
    case "video":
      jsonLd = helmetJsonLdProp<VideoObject>({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: props.title,
        description: props.desc,
        thumbnailUrl: props.image,
        contentUrl: props.contentUrl,
        embedUrl: props.embedUrl,
        uploadDate: props.uploadDate,
        duration: props.duration,
      });
      break;
    default:
      break;
  }

  return (
    <Helmet script={[jsonLd]}>
      <title>{props.title} | JoshShearer</title>
      <meta name="description" content={props.desc} />
      <meta name="author" content="JoshShearer" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={props.type} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.desc} />
      <meta property="og:url" content={"https://JoshShearer.co" + props.url} />
      <meta property="og:site_name" content="JoshShearer" />
      <meta property="" content={props.image} />
      {props.image && <meta property="og:image" content={props.image} />}
      <meta name="twitter:creator" content="@JoshShearer" />
      <meta name="twitter:card" content={props.type} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.desc} />
      {props.keywords && <meta name="keywords" content={props.keywords} />}
      <link rel="canonical" href={"https://JoshShearer.co" + props.url} />
      {props.altLink && <link rel="alternate" href={props.altLink} />}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="JoshShearer" />
      <meta name="mobile-web-app-capable" content="yes" />
      {/* @ts-ignore */}
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    </Helmet>
  );
};
