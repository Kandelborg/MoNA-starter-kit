import { arr, bool, obj, str } from '@util/yup/yupTypes'

export const postCreateSchema = (messages: any) => {
  const postContents = {
    description: str().required(messages.required),
    imageAlt: str().required(messages.required),
    language: obj()
      .shape({
        country: str(),
        locale: str()
      })
      .required(messages.required),
    metaDescription: str().required(messages.required),
    metaTitle: str().required(messages.required),
    title: str().required(messages.required)
  }

  const postContentSchema = arr()
    .of(
      obj()
        .shape(postContents)
        .required(messages.required)
    )
    .required(messages.required)

  return obj({
    contents: postContentSchema,
    imageSrc: str().required(messages.required),
    isPublished: bool().required(messages.required),
    slug: str()
      .min(2, messages.str_min)
      .required(messages.required)
  })
}
