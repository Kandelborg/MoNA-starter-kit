export interface PostCreateInput {
  contents: PostContent[]
  slug: string

  tags: Array<{
    color: ''
    contents: {
      title: ''
    }
  }>

  imageSrc: string
  isPublished: boolean
}

export interface PostContent {
  language: {
    country: string
  }
  title: string
  text: string
  imageAlt: string

  metaTitle: string | null
  metaDescription: string | null
}
