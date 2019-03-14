import gql from 'graphql-tag'

const projectCategoryBySlug = gql`
  query ProjectCategoryBySlug($slug: String!) {
    projectCategoryBySlug(where: { slug: $slug }) {
      id
      slug
      contents {
        id
        language {
          country
        }
        title
        image
        imageAlt
        metaTitle
        metaDescription
      }
      projects {
        slug
        contents {
          id
          language {
            country
          }
          title
          description
          tags
          metaTitle
          metaDescription
          isActive
        }
      }
    }
  }
`

export default projectCategoryBySlug
