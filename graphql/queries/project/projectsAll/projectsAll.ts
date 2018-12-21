import gql from 'graphql-tag';

const PROJECTS_ALL = gql`
  query ProjectsAll {
    projectsAll {
      id
    }
  }
`;

export default PROJECTS_ALL;
