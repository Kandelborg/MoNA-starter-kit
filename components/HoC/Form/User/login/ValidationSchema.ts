import { obj, str } from '@util/yup/yupTypes'

export const userLoginSchema = (messages: any) =>
  obj({
    email: str()
      .email()
      .required(messages.required),
    password: str()
      .min(8)
      .required(messages.required)
  })
