import { withNamespaces } from '@i18n'
import { createObjectsWithLng } from '@util/createObjForEach'
import { config } from '@util/settings'
import { PostCreate, PostCreateVariables } from 'database-api'
import { Formik, FormikActions } from 'formik'
import { PostCreateInput } from 'Post'
import { FunctionComponent } from 'react'
import { MutationFn } from 'react-apollo'
import { TranslateFn } from 'StatelessPage'
import { User } from 'User'
import PostCreateFields from './Fields'
import { postCreateSchema } from './ValidationSchema'

const contentsLength = config.translation.allLanguages.length

function finishContentsObjForEachLng(arr: PostCreateInput) {
  const newArr = []

  for (let i = 0; i < contentsLength; i += 1) {
    newArr.push({
      imageAlt: arr.contents[i].imageAlt,
      language: {
        connect: {
          country: arr.contents[i].language.country
        }
      },
      metaDescription: arr.contents[i].metaDescription,
      metaTitle: arr.contents[i].metaTitle,
      text: arr.contents[i].text,
      title: arr.contents[i].title
    })
  }

  return newArr
}

const initialValues: PostCreateInput = {
  contents: createObjectsWithLng({
    imageAlt: '',
    metaDescription: '',
    metaTitle: '',
    text: '',
    title: ''
  }),
  imageSrc: '',
  isPublished: false,
  slug: '',
  tags: [
    {
      color: '',
      contents: {
        title: ''
      }
    }
  ]
}

const CreatePost: FunctionComponent<{
  user: User
  t: TranslateFn
  submitFn: MutationFn<PostCreate, PostCreateVariables>
}> = (props) => {
  const { submitFn, user, t } = props
  const submitHandler = async (
    values: PostCreateInput,
    formikActions: FormikActions<PostCreateInput>
  ) => {
    formikActions.setSubmitting(false)

    formikActions.resetForm()

    await submitFn({
      variables: {
        data: {
          author: { connect: { id: user.id } },
          contents: {
            create: await finishContentsObjForEachLng(values)
          },
          imageSrc: values.imageSrc,
          isPublished: values.isPublished,
          slug: values.slug
        }
      }
    })
  }

  const resetHandler = (
    _values: PostCreateInput,
    formikActions: FormikActions<PostCreateInput>
  ) => {
    formikActions.setValues(initialValues)
  }

  const required = t('validation:required')
  const str_min = t('validation:str_min')

  return (
    <Formik
      validationSchema={postCreateSchema({
        required,
        str_min
      })}
      initialValues={initialValues}
      onReset={resetHandler}
      onSubmit={submitHandler}
      render={(fProps) => <PostCreateFields fProps={{ ...fProps }} />}
    />
  )
}

CreatePost.displayName = 'Post Create Form'

export default withNamespaces(['validation'])(CreatePost)
