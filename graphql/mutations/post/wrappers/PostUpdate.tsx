import {
  PostBySlug_postBySlug,
  PostUpdate,
  PostUpdateVariables
} from 'database-api'
import { FunctionComponent } from 'react'
import { Mutation } from 'react-apollo'

import UpdatePostForm from '@components/HoC/Form/Post/update/Form'
import { mutations } from '../../..'

class PostUpdateMutationWrapper extends Mutation<
  PostUpdate,
  PostUpdateVariables
> {}

const postUpdateMutation: FunctionComponent<{
  post: PostBySlug_postBySlug
}> = ({ post }) => (
  <PostUpdateMutationWrapper mutation={mutations.postUpdate}>
    {(postUpdateFn, client) => {
      const { loading, error } = client

      return (
        <>
          <UpdatePostForm submitFn={postUpdateFn} post={post} />
          {loading ? 'loading' : null}
          {error && <p>{error.message.replace(/GraphQL error: /g, '')}</p>}
        </>
      )
    }}
  </PostUpdateMutationWrapper>
)

export default postUpdateMutation
