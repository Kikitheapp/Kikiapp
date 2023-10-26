import *  as React from "react";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

/**
 * SEO component to populate head.
 * @param {Object} props - SEO props
 * 
 * @returns {JSX.Element} SEO component
 */
function SEO(props) {

  // get default site data
  const defaults = useSiteMetadata();
  
  // set up placeholder for metadata
  let metadata = {
    title: defaults.title,
    description: defaults.description,
    image: defaults.image,
    siteUrl: defaults.siteUrl
  };

  // if override is provideded, update metadata
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
      <meta property="og:image" content={defaults.siteUrl + metadata.image} />
      <meta property="og:url" content={metadata.siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />  
      <meta property="og:type" content="article" />


      {/* Non-Essential, But Recommended */}
      <meta property="og:description" content={metadata.description} />
      <meta name="twitter:image:alt" content={metadata.description} />
      <meta property="og:site_name" content={defaults.title} />

    </>
  );
}


export default SEO;
