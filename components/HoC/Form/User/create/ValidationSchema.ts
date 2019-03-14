import { obj, str } from '@util/yup/yupTypes'

export const userCreateSchema = (messages: any) =>
  obj({
    email: str()
      .email()
      .required(messages.required),
    name: str().required(messages.required),
    password: str()
      .min(8)
      .required(messages.required)
  })
