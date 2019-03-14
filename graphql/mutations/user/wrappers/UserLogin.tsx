import { FunctionComponent } from 'react'

import LoginUserForm from '@components/HoC/Form/User/login/Form'
/* import LoginUserForm from '@components/HoC/Form/User/login/Form'; */
import * as cookie from 'cookie'
import { ApolloConsumer } from 'react-apollo'
import { mutations } from '../../../index'
import UserLoginMutationWrapper from './UserLoginWrapper'

/* export interface IProjectsAllProps {} */

const UserLogin: FunctionComponent<{ closeModalFn: () => void }> = (props) => (
  <ApolloConsumer>
    {(apolloClient) => (
      <UserLoginMutationWrapper
        mutation={mutations.userLogin}
        // tslint:disable-next-line: jsx-no-lambda
        onCompleted={(data) => {
          props.closeModalFn()
          // Store the token in cookie
          document.cookie = cookie.serialize('token', data.userLogin.token, {
            maxAge: 1 * 24 * 60 * 60 // 30 days
          })
          // Force a reload of all the current queries now that the user is
          // logged in
          apolloClient.cache.reset().then(() => {
            /*    redirect({}, '/'); */
            location.reload()
          })
        }}>
        {(userLoginFn, client) => {
          const { loading, error } = client
          /*
          if (loading) {
            return (
              <>
                <p>Loading</p>
              </>
            );
          } */

          return (
            <>
              {loading ? 'Loading' : null}
              <LoginUserForm submitFn={userLoginFn} />
              {error && <p>{error.message.replace(/GraphQL error: /g, '')}</p>}
            </>
          )
        }}
      </UserLoginMutationWrapper>
    )}
  </ApolloConsumer>
)

export default UserLogin
