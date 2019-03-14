import { PureComponent } from 'react'

import PostCard from '@components/UI/Post/PostCard'
import { queries } from '@graphql/index'
import { CircularProgress, Grid } from '@material-ui/core'
import { PostsByIsPublishedVariables } from 'database-api'
import { User } from 'User'
import PostsByIsPublishedQueryWrapper from './PostsByIsPublishedWrapper'

class PostsByIsPublishedQuery extends PureComponent<
  PostsByIsPublishedVariables
> {
  public render() {
    const { first, last, skip, orderBy, isPublished } = this.props

    return (
      <PostsByIsPublishedQueryWrapper
        fetchPolicy="cache-first"
        notifyOnNetworkStatusChange={true}
        query={queries.postsByIsPublished}
        variables={{
          first,
          isPublished,
          last,
          orderBy,
          skip
        }}>
        {(client) => {
          const { loading, error, data } = client

          // @ts-ignore
          const user: {
            me: User
          } = client.client.readQuery({ query: queries.me })

          const postsByIsPublished = data ? data.postsByIsPublished : []

          return (
            <Grid container justify="center">
              {postsByIsPublished
                ? postsByIsPublished.map((post) => (
                    <Grid
                      item
                      key={`${post.id}grid`}
                      lg={4}
                      md={6}
                      sm={8}
                      xs={12}>
                      {loading && <CircularProgress />}
                      <PostCard
                        key={post.__typename + post.id}
                        user={user.me}
                        post={post}
                      />
                      {error && ` Error! ${error.message}`}
                    </Grid>
                  ))
                : null}
            </Grid>
          )
        }}
      </PostsByIsPublishedQueryWrapper>
    )
  }
}

export default PostsByIsPublishedQuery
