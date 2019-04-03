import UserRoleEnum from 'Enum'

export interface UserCreateInput {
  email: string
  name: string
  password: string
}

export interface UserUpdateInput {
  id: string
  email?: string
  name?: string
  password?: string

  profile: {
    bio: string
    avatar?: {
      id: string
      publicId: string
      src: string
    }
  }
}

export interface UserLoginInput {
  email: string
  password: string
}

export interface User {
  id: string
  email: string
  name: string
  role: UserRoleEnum

  profile: {
    bio: string
    avatar?: {
      id: string
      publicId: string
      src: string
    }
  }
  comments?: any
}
