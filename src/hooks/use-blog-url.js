import { graphql, useStaticQuery } from 'gatsby';

export const useBlogUrl = () => {

  const data = useStaticQuery(graphql`
    query BlogUrl {
      site {
        siteMetadata {
          blogUrl
        }
      }
    }
  `);

  return data.site.siteMetadata.blogUrl;

}
