import gql from 'graphql-tag'

const projectCategoryDelete = gql`
  mutation projectCategoryDelete($where: ProjectCategoryWhereInput!) {
    projectCategoryDelete(where: $where) {
      id
    }
  }
`

export default projectCategoryDelete
