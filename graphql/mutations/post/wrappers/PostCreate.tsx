import { PostCreate, PostCreateVariables } from 'database-api'
import { FunctionComponent } from 'react'
import { Mutation } from 'react-apollo'

import CreatePostForm from '@components/HoC/Form/Post/create/Form'
import { mutations, queries } from '@graphql/index'

export class PostCreateMutationWrapper extends Mutation<
  PostCreate,
  PostCreateVariables
> {}

const postCreateMutation: FunctionComponent = () => (
  <PostCreateMutationWrapper mutation={mutations.postCreate}>
    {(postCreateFn, client) => {
      const { loading, error } = client
      // @ts-ignore
      const user: {
        me: {
          id: string
          email: string
          name: string
        }
      } = client.client.readQuery({ query: queries.me })

      if (error) return `Error! ${error.message}`

      if (loading) return 'Loading...'

      if (!loading) {
        return <CreatePostForm submitFn={postCreateFn} user={user.me} />
      }

      return null
    }}
  </PostCreateMutationWrapper>
)

export default postCreateMutation
