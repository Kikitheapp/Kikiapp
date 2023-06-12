import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {

  const data = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;

}
