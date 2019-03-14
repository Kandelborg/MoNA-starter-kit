import { UserCreate, UserCreateVariables } from 'database-api'

import { Mutation } from 'react-apollo'

export default class UserCreateMutationWrapper extends Mutation<
  UserCreate,
  UserCreateVariables
> {}
