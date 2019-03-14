import { UserLogin, UserLoginVariables } from 'database-api'

import { Mutation } from 'react-apollo'

export default class UserLoginMutationWrapper extends Mutation<
  UserLogin,
  UserLoginVariables
> {}
