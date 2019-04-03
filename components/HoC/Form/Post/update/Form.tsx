import { withNamespaces } from '@i18n'
import { config } from '@util/settings'
import {
  PostUpdate,
  PostUpdateInput,
  PostUpdateVariables,
  PostWhereUniqueInput
} from 'database-api'
import { Formik, FormikActions } from 'formik'
import { FunctionComponent, useState } from 'react'
import { MutationFn } from 'react-apollo'
import { TranslateFn } from 'StatelessPage'
import PostUpdateFields from './Fields'
import { postUpdateSchema } from './ValidationSchema'

interface IUpdatePostProps {
  post: PostUpdateInput & PostWhereUniqueInput
  submitFn: MutationFn<PostUpdate, PostUpdateVariables>
  t: TranslateFn
}

const contentsLength = config.translation.allLanguages.length

function finishContentsObjForEachLng(arr: any) {
  const newArr = []

  for (let i = 0; i < contentsLength; i += 1) {
    newArr.push({
      data: {
        description: arr.contents[i].description,
        imageAlt: arr.contents[i].imageAlt,
        metaDescription: arr.contents[i].metaDescription,
        metaTitle: arr.contents[i].metaTitle,
        tags: { set: arr.contents[i].tags.set },
        title: arr.contents[i].title
      },
      where: {
        id: arr.contents[i].id
      }
    })
  }

  return newArr
}

const createValuesFromProps: ({
  id,
  slug,
  tags,
  imageSrc,
  isPublished,
  contents
}: PostUpdateInput & PostWhereUniqueInput) => PostUpdateInput &
  PostWhereUniqueInput = ({
  id,
  slug,
  imageSrc,
  tags,
  isPublished,
  contents
}) => ({
  contents,
  id,
  imageSrc,
  isPublished,
  slug,
  tags
})

const UpdatePost: FunctionComponent<IUpdatePostProps> = (props) => {
  const { submitFn, t, post } = props
  const { id, slug, isPublished, tags, imageSrc, contents } = post

  const [initialValues, setInitialValues] = useState(
    createValuesFromProps({
      id,
      imageSrc,
      isPublished,
      slug,
      tags,
      // tslint:disable-next-line: object-literal-sort-keys
      contents: contents!
    })
  )

  const submitHandler = async (
    values: PostUpdateInput & { id?: string },
    formikActions: FormikActions<PostUpdateInput>
  ) => {
    formikActions.setSubmitting(true)

    await submitFn({
      variables: {
        data: {
          contents: {
            updateMany: await finishContentsObjForEachLng(values)
          },
          imageSrc: values.imageSrc,
          isPublished: values.isPublished,
          slug: values.slug,
          tags: values.tags
        },
        where: {
          id: values.id
        }
      }
    })

    await setInitialValues(
      createValuesFromProps({
        id,
        imageSrc,
        isPublished,
        slug,
        tags,
        // tslint:disable-next-line: object-literal-sort-keys
        contents: contents!
      })
    )

    await formikActions.resetForm(
      createValuesFromProps({
        id,
        imageSrc,
        isPublished,
        slug,
        tags,
        // tslint:disable-next-line: object-literal-sort-keys
        contents: contents!
      })
    )

    return formikActions.setSubmitting(false)
  }

  const resetHandler = (
    _values: PostUpdateInput,
    formikActions: FormikActions<PostUpdateInput>
  ) => {
    formikActions.setValues(initialValues)
  }

  const required = t('validation:required')
  const str_min = t('validation:str_min')

  return (
    <Formik
      validationSchema={postUpdateSchema({
        required,
        str_min
      })}
      initialValues={initialValues}
      onReset={resetHandler}
      onSubmit={submitHandler}
      render={(fProps) => <PostUpdateFields fProps={{ ...fProps }} />}
    />
  )
}

UpdatePost.displayName = 'Post Update Form'

export default withNamespaces(['validation'])(UpdatePost)
