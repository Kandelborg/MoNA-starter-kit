import gql from 'graphql-tag';

const projectsAll = gql`
  query ProjectsAll {
    projectsAll {
      id
      contents {
        language {
          country
        }
        name
        text
        tags
        metaTitle
        metaDescription
        isActive
      }
    }
  }
`;

export default projectsAll;
