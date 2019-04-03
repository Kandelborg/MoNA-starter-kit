import { FunctionComponent } from 'react'

import CreateUserForm from '@components/HoC/Form/User/create/Form'

import * as cookie from 'cookie'
import { ApolloConsumer } from 'react-apollo'
import { mutations } from '../../../index'
import UserCreateMutationWrapper from './UserCreateWrapper'

const UserCreate: FunctionComponent<{ closeModalFn: () => void }> = (props) => (
  <ApolloConsumer>
    {(apolloClient) => (
      <UserCreateMutationWrapper
        mutation={mutations.userCreate}
        onCompleted={(data) => {
          props.closeModalFn()
          // Store the token in cookie
          document.cookie = cookie.serialize('token', data.userLogin!.token, {
            maxAge: 1 * 24 * 60 * 60 // 30 days
          })
          /* Force a reload of all the current queries now that the user is
             logged in */
          apolloClient.cache.reset().then(() => {
            location.reload()
          })
        }}>
        {(userCreateFn, client) => {
          const { loading, error } = client

          if (!loading) {
            return (
              <>
                <CreateUserForm submitFn={userCreateFn} />
                {error && (
                  <p>{error.message.replace(/GraphQL error: /g, '')}</p>
                )}
              </>
            )
          }

          return null
        }}
      </UserCreateMutationWrapper>
    )}
  </ApolloConsumer>
)

export default UserCreate
