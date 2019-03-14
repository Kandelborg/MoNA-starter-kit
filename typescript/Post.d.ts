export interface PostCreateInput {
  contents: PostContent[]
  slug: string
  imageSrc: string
  isPublished: boolean
}

export interface PostContent {
  language: {
    country: string
  }
  title: string
  description: string
  imageAlt: string
  tags: { set: string[] }
  metaTitle: string | null
  metaDescription: string | null
}

export interface PostUContent {
  id: string
  language: {
    country: string
  }
  title: string
  description: string
  imageAlt: string
  tags: { set: string[] }
  metaTitle: string | null
  metaDescription: string | null
}

export interface PostUpdateContentInput {
  id: string
  language: {
    country: string
  }
  title?: string | null
  description?: string | null
  imageAlt?: string | null
  tags?: string[] | null
  metaTitle?: string | null
  metaDescription?: string | null
}

export interface PostUpdateInput {
  id: string
  contents: PostUpdateContentInput[]
  slug: string
  imageSrc: string
  isPublished: boolean
}
