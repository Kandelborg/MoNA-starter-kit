import gql from 'graphql-tag'

const projectCategoryDelete = gql`
  mutation projectCategoryDelete($where: ProjectCategoryWhereUniqueInput!) {
    projectCategoryDelete(where: $where) {
      id
    }
  }
`

export default projectCategoryDelete
