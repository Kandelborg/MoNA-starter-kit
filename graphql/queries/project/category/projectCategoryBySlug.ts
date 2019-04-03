import gql from 'graphql-tag'

const projectCategoryBySlug = gql`
  query ProjectCategoryBySlug($slug: String!) {
    projectCategoryBySlug(slug: $slug) {
      id
      slug
      image
      contents {
        id
        language {
          country
        }
        title
        imageAlt
        metaTitle
        metaDescription
      }
      projects {
        slug
        tags {
          contents {
            title
          }
          color
        }
        contents {
          id
          language {
            country
          }
          title
          text
          metaTitle
          metaDescription
          isActive
        }
      }
    }
  }
`

export default projectCategoryBySlug
