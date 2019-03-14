import { FunctionComponent } from 'react'

import UpdateUserForm from '@components/HoC/Form/User/update/Form'

import { mutations } from '@graphql/index'
import { UserUpdate, UserUpdateVariables } from 'database-api'
import { ApolloConsumer, Mutation } from 'react-apollo'

import { User } from 'User'

export class UserUpdateMutationWrapper extends Mutation<
  UserUpdate,
  UserUpdateVariables
> {}

const UserUpdateMutation: FunctionComponent<{
  closeModalFn?: () => void
  user: User
}> = (props) => (
  <ApolloConsumer>
    {(/* apolloClient */) => (
      <UserUpdateMutationWrapper
        mutation={mutations.userUpdate}
        onCompleted={
          (/* data */) => {
            // tslint:disable-next-line: no-unused-expression
            props.closeModalFn && props.closeModalFn()
          }
        }>
        {(userUpdateFn, client) => {
          const { /* loading */ error } = client
          //  console.log(props.user)

          return (
            <>
              <UpdateUserForm user={props.user} submitFn={userUpdateFn} />
              {error && <p>{error.message.replace(/GraphQL error: /g, '')}</p>}
            </>
          )
        }}
      </UserUpdateMutationWrapper>
    )}
  </ApolloConsumer>
)

export default UserUpdateMutation
