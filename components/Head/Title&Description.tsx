import Head from 'next/head'
import { FunctionComponent } from 'react'

import defineDescription from '@util/defineDescription'
import defineTitle from '@util/defineTitle'

interface IHeadProps {
  htmlTitle?: string
  description?: string
}

const TitleAndDescription: FunctionComponent<IHeadProps> = ({
  description = '',
  htmlTitle = ''
}) => {
  let title = ''
  let metaDescription: string | undefined = ''

  title = defineTitle(htmlTitle)

  metaDescription = defineDescription(metaDescription)

  return (
    <Head>
      <title key="page-title">{title} | MoNA</title>
      <meta
        name="description"
        content={
          description !== '' || description !== undefined
            ? description
            : metaDescription
        }
        key="page-description"
      />
    </Head>
  )
}

TitleAndDescription.displayName = 'Title & Description'

export default TitleAndDescription
