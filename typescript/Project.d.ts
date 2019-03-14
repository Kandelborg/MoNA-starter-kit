export interface ProjectCreateInput {
  contents: ProjectContent[]
  slug: string
  album: Array<{
    src: ''
    publicId: ''
    thumbnailSrc: ''
  }>
  isPublished: boolean
}

export interface ProjectContent {
  language: {
    country: string
    locale?: string | null
  }
  title: string
  description: string
  imageAlt: string
  metaTitle?: string | null
  metaDescription?: string | null
}
