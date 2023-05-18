import *  as React from "react";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

/**
 * SEO component to populate head.
 * @returns {JSX.Element} SEO component
 */
function SEO(props) {

  const defaults = useSiteMetadata();
  
  let metadata = defaults;
  if (props.title) {
    metadata.title = `${props.title} - ${defaults.title}`;
  }
  if (props.description) {
    metadata.description = props.description;
  }
  if (props.image) {
    metadata.image = props.image;
  }
  if (props.siteUrl) {
    metadata.siteUrl = `${defaults.siteUrl}/${props.siteUrl}`;
  }


  return (
    <>
      {/* Essential Meta Tags */}
      <title>{metadata.title}</title>
      <meta property="og:title" content={metadata.title} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={metadata.siteUrl + metadata.image} />
      <meta property="og:url" content={metadata.siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />  
      {/* Non-Essential, But Recommended */}
      <meta property="og:description" content={metadata.description} />
      <meta property="og:site_name" content={metadata.title} />
      <meta name="twitter:image:alt" content={metadata.description} />
    </>
  );
}

export default SEO;