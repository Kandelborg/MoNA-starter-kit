import { obj, str } from '@util/yup/yupTypes'

export const userUpdateSchema = (messages: any) => {
  const schema = obj({
    avatar: obj({
      publicId: str(),
      src: str()
    }),
    email: str()
      .email()
      .required(messages.required),
    name: str().required(messages.required),
    password: str().min(8)
  })

  return schema
}
