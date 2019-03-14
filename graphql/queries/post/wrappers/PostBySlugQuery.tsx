import { FunctionComponent } from 'react'

import { Query } from 'react-apollo'

import { PostBySlug, PostBySlugVariables } from 'database-api'
import { queries } from '../../../index'

import PostPage from '@components/UI/Post/PostPage'

class PostBySlugQueryWrapper extends Query<PostBySlug, PostBySlugVariables> {}

const PostBySlugQuery: FunctionComponent<PostBySlugVariables> = (props) => {
  const { slug } = props

  return (
    <PostBySlugQueryWrapper
      fetchPolicy="cache-first"
      notifyOnNetworkStatusChange={true}
      query={queries.postBySlug}
      variables={{
        slug
      }}>
      {(client) => {
        const { loading, error, data } = client
        if (error) return `Error! ${error.message}`

        if (data && data.postBySlug) {
          const { postBySlug } = data

          return (
            <>
              {loading && 'Loading...'}
              <PostPage
                key={postBySlug.__typename + postBySlug.id}
                post={postBySlug}
              />
            </>
          )
        }

        return null
      }}
    </PostBySlugQueryWrapper>
  )
}

export default PostBySlugQuery
