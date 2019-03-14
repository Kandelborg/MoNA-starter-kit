import { withNamespaces } from '@i18n'
import { config } from '@util/settings'
import {
  PostUpdate,
  PostUpdate_postUpdate,
  PostUpdate_postUpdate_contents,
  PostUpdateVariables
} from 'database-api'
import { Formik, FormikActions } from 'formik'
import { Omit } from 'global'
import { PostUpdateInput } from 'Post'
import { FunctionComponent, useState } from 'react'
import { MutationFn } from 'react-apollo'
import { TranslateFn } from 'StatelessPage'
import PostUpdateFields from './Fields'
import { postUpdateSchema } from './ValidationSchema'

interface IUpdatePostProps {
  post: Omit<PostUpdate_postUpdate, '__typename' | 'author'>
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
  imageSrc,
  isPublished,
  contents
}: PostUpdateInput) => PostUpdateInput = ({
  id,
  slug,
  imageSrc,
  isPublished,
  contents
}) => {
  return {
    contents,
    id,
    imageSrc,
    isPublished,
    slug
  }
}

const UpdatePost: FunctionComponent<IUpdatePostProps> = (props) => {
  const { submitFn, t, post } = props
  const { id, slug, isPublished, imageSrc, contents } = post

  const contentsArr: Array<
    { tags: { set: string[] } } & Omit<PostUpdate_postUpdate_contents, 'tags'>
  > = []

  // tslint:disable-next-line: no-unused-expression
  contents &&
    contents.forEach(({ tags, ...rest }) =>
      contentsArr.push({ tags: { set: [...tags] }, ...rest })
    )

  const [initialValues, setInitialValues] = useState(
    createValuesFromProps({
      id,
      imageSrc,
      isPublished,
      slug,
      // tslint:disable-next-line: object-literal-sort-keys
      contents: contentsArr
    })
  )

  const submitHandler = async (
    values: PostUpdateInput,
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
          slug: values.slug
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
