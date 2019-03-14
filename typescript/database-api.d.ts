/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_me_avatar {
  __typename: 'Avatar'
  id: string
  publicId: string
  src: string
}

export interface GetUser_me {
  __typename: 'User'
  avatar: GetUser_me_avatar | null
  email: string | null
  id: string
  role: Role
  name: string
}

export interface GetUser {
  me: GetUser_me | null
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PostCreate
// ====================================================

export interface PostCreate_postCreate_author_avatar {
  __typename: 'Avatar'
  id: string
  src: string
  publicId: string
}

export interface PostCreate_postCreate_author {
  __typename: 'User'
  id: string
  name: string
  role: Role
  avatar: PostCreate_postCreate_author_avatar | null
}

export interface PostCreate_postCreate_contents_language {
  __typename: 'PostLng'
  country: string
}

export interface PostCreate_postCreate_contents {
  __typename: 'PostContent'
  language: PostCreate_postCreate_contents_language
  title: string
  description: string
  imageAlt: string
  tags: string[]
  metaTitle: string | null
  metaDescription: string | null
}

export interface PostCreate_postCreate {
  __typename: 'Post'
  id: string
  author: PostCreate_postCreate_author
  slug: string
  imageSrc: string
  contents: PostCreate_postCreate_contents[] | null
  isPublished: boolean
}

export interface PostCreate {
  postCreate: PostCreate_postCreate
}

export interface PostCreateVariables {
  data: PostCreateInput
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: postDelete
// ====================================================

export interface postDelete_postDelete {
  __typename: 'Post'
  id: string
}

export interface postDelete {
  postDelete: postDelete_postDelete
}

export interface postDeleteVariables {
  where: PostWhereInput
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PostUpdate
// ====================================================

export interface PostUpdate_postUpdate_author_avatar {
  __typename: 'Avatar'
  id: string
  src: string
  publicId: string
}

export interface PostUpdate_postUpdate_author {
  __typename: 'User'
  id: string
  name: string
  role: Role
  avatar: PostUpdate_postUpdate_author_avatar | null
}

export interface PostUpdate_postUpdate_contents_language {
  __typename: 'PostLng'
  country: string
}

export interface PostUpdate_postUpdate_contents {
  __typename: 'PostContent'
  id: string
  language: PostUpdate_postUpdate_contents_language
  title: string
  description: string
  imageAlt: string
  tags: string[]
  metaTitle: string | null
  metaDescription: string | null
}

export interface PostUpdate_postUpdate {
  __typename: 'Post'
  id: string
  author: PostUpdate_postUpdate_author
  slug: string
  imageSrc: string
  contents: PostUpdate_postUpdate_contents[] | null
  isPublished: boolean
}

export interface PostUpdate {
  postUpdate: PostUpdate_postUpdate
}

export interface PostUpdateVariables {
  data: PostUpdateInput
  where: PostWhereUniqueInput
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: projectCategoryCreate
// ====================================================

export interface projectCategoryCreate_projectCategoryCreate_contents_language {
  __typename: 'ProjectCategoryLng'
  country: string
}

export interface projectCategoryCreate_projectCategoryCreate_contents {
  __typename: 'ProjectCategoryContent'
  language: projectCategoryCreate_projectCategoryCreate_contents_language
  title: string
  image: string
  imageAlt: string
  metaTitle: string | null
  metaDescription: string | null
}

export interface projectCategoryCreate_projectCategoryCreate {
  __typename: 'ProjectCategory'
  id: string
  slug: string
  contents: projectCategoryCreate_projectCategoryCreate_contents[] | null
}

export interface projectCategoryCreate {
  projectCategoryCreate: projectCategoryCreate_projectCategoryCreate
}

export interface projectCategoryCreateVariables {
  projectCategory: ProjectCategoryCreateInput
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: projectCategoryDelete
// ====================================================

export interface projectCategoryDelete_projectCategoryDelete {
  __typename: 'ProjectCategory'
  id: string
}

export interface projectCategoryDelete {
  projectCategoryDelete: projectCategoryDelete_projectCategoryDelete
}

export interface projectCategoryDeleteVariables {
  where: ProjectCategoryWhereInput
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ProjectCategoryUpdate
// ====================================================

export interface ProjectCategoryUpdate_projectCategoryUpdate_contents_language {
  __typename: 'ProjectCategoryLng'
  country: string
}

export interface ProjectCategoryUpdate_projectCategoryUpdate_contents {
  __typename: 'ProjectCategoryContent'
  language: ProjectCategoryUpdate_projectCategoryUpdate_contents_language
  title: string
  image: string
  imageAlt: string
  metaTitle: string | null
  metaDescription: string | null
}

export interface ProjectCategoryUpdate_projectCategoryUpdate {
  __typename: 'ProjectCategory'
  id: string
  slug: string
  contents: ProjectCategoryUpdate_projectCategoryUpdate_contents[] | null
}

export interface ProjectCategoryUpdate {
  projectCategoryUpdate: ProjectCategoryUpdate_projectCategoryUpdate
}

export interface ProjectCategoryUpdateVariables {
  projectCategory: ProjectCategoryUpdateInput
  where: ProjectCategoryWhereUniqueInput
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ProjectCreate
// ====================================================

export interface ProjectCreate_projectCreate_album_images_contents_language {
  __typename: 'ProjectImageLng'
  country: string
}

export interface ProjectCreate_projectCreate_album_images_contents {
  __typename: 'ProjectImageContent'
  language: ProjectCreate_projectCreate_album_images_contents_language
  alt: string
}

export interface ProjectCreate_projectCreate_album_images {
  __typename: 'ProjectImage'
  publicId: string
  src: string
  contents: ProjectCreate_projectCreate_album_images_contents
}

export interface ProjectCreate_projectCreate_album {
  __typename: 'ProjectAlbum'
  images: ProjectCreate_projectCreate_album_images[] | null
}

export interface ProjectCreate_projectCreate_contents_language {
  __typename: 'ProjectLng'
  country: string
}

export interface ProjectCreate_projectCreate_contents {
  __typename: 'ProjectContent'
  language: ProjectCreate_projectCreate_contents_language
  title: string
  description: string
  tags: string[]
  metaTitle: string | null
  metaDescription: string | null
  isActive: boolean
}

export interface ProjectCreate_projectCreate {
  __typename: 'Project'
  id: string
  slug: string
  album: ProjectCreate_projectCreate_album
  contents: ProjectCreate_projectCreate_contents[] | null
}

export interface ProjectCreate {
  projectCreate: ProjectCreate_projectCreate
}

export interface ProjectCreateVariables {
  project: ProjectCreateInput
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ProjectDelete
// ====================================================

export interface ProjectDelete_projectDelete {
  __typename: 'Project'
  id: string
}

export interface ProjectDelete {
  projectDelete: ProjectDelete_projectDelete
}

export interface ProjectDeleteVariables {
  where: ProjectWhereInput
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ProjectUpdate
// ====================================================

export interface ProjectUpdate_projectUpdate_album_images_contents_language {
  __typename: 'ProjectImageLng'
  country: string
}

export interface ProjectUpdate_projectUpdate_album_images_contents {
  __typename: 'ProjectImageContent'
  language: ProjectUpdate_projectUpdate_album_images_contents_language
  alt: string
}

export interface ProjectUpdate_projectUpdate_album_images {
  __typename: 'ProjectImage'
  publicId: string
  src: string
  contents: ProjectUpdate_projectUpdate_album_images_contents
}

export interface ProjectUpdate_projectUpdate_album {
  __typename: 'ProjectAlbum'
  images: ProjectUpdate_projectUpdate_album_images[] | null
}

export interface ProjectUpdate_projectUpdate_contents_language {
  __typename: 'ProjectLng'
  country: string
}

export interface ProjectUpdate_projectUpdate_contents {
  __typename: 'ProjectContent'
  language: ProjectUpdate_projectUpdate_contents_language
  title: string
  description: string
  tags: string[]
  metaTitle: string | null
  metaDescription: string | null
  isActive: boolean
}

export interface ProjectUpdate_projectUpdate {
  __typename: 'Project'
  id: string
  slug: string
  album: ProjectUpdate_projectUpdate_album
  contents: ProjectUpdate_projectUpdate_contents[] | null
}

export interface ProjectUpdate {
  projectUpdate: ProjectUpdate_projectUpdate
}

export interface ProjectUpdateVariables {
  project: ProjectUpdateInput
  where: ProjectWhereUniqueInput
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserCreate
// ====================================================

export interface UserCreate_userCreate_user {
  __typename: 'User'
  id: string
  name: string
  email: string | null
}

export interface UserCreate_userCreate {
  __typename: 'AuthPayload'
  user: UserCreate_userCreate_user
}

export interface UserCreate_userLogin_user {
  __typename: 'User'
  id: string
  name: string
  email: string | null
}

export interface UserCreate_userLogin {
  __typename: 'AuthPayload'
  token: string
  user: UserCreate_userLogin_user
}

export interface UserCreate {
  userCreate: UserCreate_userCreate
  userLogin: UserCreate_userLogin
}

export interface UserCreateVariables {
  name: string
  email: string
  password: string
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserDelete
// ====================================================

export interface UserDelete_userDelete {
  __typename: 'User'
  id: string
}

export interface UserDelete {
  userDelete: UserDelete_userDelete
}

export interface UserDeleteVariables {
  where: UserWhereUniqueInput
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserLogin
// ====================================================

export interface UserLogin_userLogin_user {
  __typename: 'User'
  id: string
  name: string
  email: string | null
}

export interface UserLogin_userLogin {
  __typename: 'AuthPayload'
  token: string
  user: UserLogin_userLogin_user
}

export interface UserLogin {
  userLogin: UserLogin_userLogin
}

export interface UserLoginVariables {
  email: string
  password: string
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserUpdate
// ====================================================

export interface UserUpdate_userUpdate_avatar {
  __typename: 'Avatar'
  id: string
  publicId: string
  src: string
}

export interface UserUpdate_userUpdate {
  __typename: 'User'
  id: string
  name: string
  email: string | null
  avatar: UserUpdate_userUpdate_avatar | null
}

export interface UserUpdate {
  userUpdate: UserUpdate_userUpdate
}

export interface UserUpdateVariables {
  user: UserUpdateInput
  where: UserWhereInput
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostBySlug
// ====================================================

export interface PostBySlug_postBySlug_author_avatar {
  __typename: 'Avatar'
  id: string
  src: string
  publicId: string
}

export interface PostBySlug_postBySlug_author {
  __typename: 'User'
  id: string
  name: string
  role: Role
  avatar: PostBySlug_postBySlug_author_avatar | null
}

export interface PostBySlug_postBySlug_contents_language {
  __typename: 'PostLng'
  country: string
}

export interface PostBySlug_postBySlug_contents {
  __typename: 'PostContent'
  id: string
  language: PostBySlug_postBySlug_contents_language
  title: string
  description: string
  imageAlt: string
  tags: string[]
  metaTitle: string | null
  metaDescription: string | null
}

export interface PostBySlug_postBySlug {
  __typename: 'Post'
  id: string
  createdAt: any
  updatedAt: any
  slug: string
  author: PostBySlug_postBySlug_author
  imageSrc: string
  isPublished: boolean
  contents: PostBySlug_postBySlug_contents[] | null
}

export interface PostBySlug {
  postBySlug: PostBySlug_postBySlug | null
}

export interface PostBySlugVariables {
  slug?: string | null
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostsByIsPublished
// ====================================================

export interface PostsByIsPublished_postsByIsPublished_author_avatar {
  __typename: 'Avatar'
  id: string
  src: string
  publicId: string
}

export interface PostsByIsPublished_postsByIsPublished_author {
  __typename: 'User'
  id: string
  name: string
  role: Role
  avatar: PostsByIsPublished_postsByIsPublished_author_avatar | null
}

export interface PostsByIsPublished_postsByIsPublished_contents_language {
  __typename: 'PostLng'
  country: string
}

export interface PostsByIsPublished_postsByIsPublished_contents {
  __typename: 'PostContent'
  id: string
  language: PostsByIsPublished_postsByIsPublished_contents_language
  title: string
  description: string
  imageAlt: string
  tags: string[]
  metaTitle: string | null
  metaDescription: string | null
}

export interface PostsByIsPublished_postsByIsPublished {
  __typename: 'Post'
  id: string
  createdAt: any
  updatedAt: any
  slug: string
  author: PostsByIsPublished_postsByIsPublished_author
  imageSrc: string
  isPublished: boolean
  contents: PostsByIsPublished_postsByIsPublished_contents[] | null
}

export interface PostsByIsPublished {
  postsByIsPublished: PostsByIsPublished_postsByIsPublished[]
}

export interface PostsByIsPublishedVariables {
  isPublished?: boolean | null
  orderBy?: PostOrderByInput | null
  first?: number | null
  last?: number | null
  skip?: number | null
  after?: string | null
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProjectCategoriesAll
// ====================================================

export interface ProjectCategoriesAll_projectCategoriesAll_contents_language {
  __typename: 'ProjectCategoryLng'
  country: string
}

export interface ProjectCategoriesAll_projectCategoriesAll_contents {
  __typename: 'ProjectCategoryContent'
  id: string
  language: ProjectCategoriesAll_projectCategoriesAll_contents_language
  title: string
  image: string
  imageAlt: string
  metaTitle: string | null
  metaDescription: string | null
}

export interface ProjectCategoriesAll_projectCategoriesAll_projects_contents_language {
  __typename: 'ProjectLng'
  country: string
}

export interface ProjectCategoriesAll_projectCategoriesAll_projects_contents {
  __typename: 'ProjectContent'
  id: string
  language: ProjectCategoriesAll_projectCategoriesAll_projects_contents_language
  title: string
  description: string
  tags: string[]
  metaTitle: string | null
  metaDescription: string | null
  isActive: boolean
}

export interface ProjectCategoriesAll_projectCategoriesAll_projects {
  __typename: 'Project'
  slug: string
  contents: ProjectCategoriesAll_projectCategoriesAll_projects_contents[] | null
}

export interface ProjectCategoriesAll_projectCategoriesAll {
  __typename: 'ProjectCategory'
  id: string
  slug: string
  contents: ProjectCategoriesAll_projectCategoriesAll_contents[] | null
  projects: ProjectCategoriesAll_projectCategoriesAll_projects[] | null
}

export interface ProjectCategoriesAll {
  projectCategoriesAll: (ProjectCategoriesAll_projectCategoriesAll | null)[]
}

export interface ProjectCategoriesAllVariables {
  orderBy?: ProjectCategoryOrderByInput | null
  first?: number | null
  last?: number | null
  skip?: number | null
  after?: string | null
  projectOrderBy?: ProjectOrderByInput | null
  projectFirst?: number | null
  projectLast?: number | null
  projectSkip?: number | null
  projectAfter?: string | null
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProjectCategoryById
// ====================================================

export interface ProjectCategoryById_projectCategoryById_contents_language {
  __typename: 'ProjectCategoryLng'
  country: string
}

export interface ProjectCategoryById_projectCategoryById_contents {
  __typename: 'ProjectCategoryContent'
  id: string
  language: ProjectCategoryById_projectCategoryById_contents_language
  title: string
  image: string
  imageAlt: string
  metaTitle: string | null
  metaDescription: string | null
}

export interface ProjectCategoryById_projectCategoryById_projects_contents_language {
  __typename: 'ProjectLng'
  country: string
}

export interface ProjectCategoryById_projectCategoryById_projects_contents {
  __typename: 'ProjectContent'
  id: string
  language: ProjectCategoryById_projectCategoryById_projects_contents_language
  title: string
  description: string
  tags: string[]
  metaTitle: string | null
  metaDescription: string | null
  isActive: boolean
}

export interface ProjectCategoryById_projectCategoryById_projects {
  __typename: 'Project'
  slug: string
  contents: ProjectCategoryById_projectCategoryById_projects_contents[] | null
}

export interface ProjectCategoryById_projectCategoryById {
  __typename: 'ProjectCategory'
  id: string
  slug: string
  contents: ProjectCategoryById_projectCategoryById_contents[] | null
  projects: ProjectCategoryById_projectCategoryById_projects[] | null
}

export interface ProjectCategoryById {
  projectCategoryById: ProjectCategoryById_projectCategoryById | null
}

export interface ProjectCategoryByIdVariables {
  id: string
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProjectCategoryBySlug
// ====================================================

export interface ProjectCategoryBySlug_projectCategoryBySlug_contents_language {
  __typename: 'ProjectCategoryLng'
  country: string
}

export interface ProjectCategoryBySlug_projectCategoryBySlug_contents {
  __typename: 'ProjectCategoryContent'
  id: string
  language: ProjectCategoryBySlug_projectCategoryBySlug_contents_language
  title: string
  image: string
  imageAlt: string
  metaTitle: string | null
  metaDescription: string | null
}

export interface ProjectCategoryBySlug_projectCategoryBySlug_projects_contents_language {
  __typename: 'ProjectLng'
  country: string
}

export interface ProjectCategoryBySlug_projectCategoryBySlug_projects_contents {
  __typename: 'ProjectContent'
  id: string
  language: ProjectCategoryBySlug_projectCategoryBySlug_projects_contents_language
  title: string
  description: string
  tags: string[]
  metaTitle: string | null
  metaDescription: string | null
  isActive: boolean
}

export interface ProjectCategoryBySlug_projectCategoryBySlug_projects {
  __typename: 'Project'
  slug: string
  contents:
    | ProjectCategoryBySlug_projectCategoryBySlug_projects_contents[]
    | null
}

export interface ProjectCategoryBySlug_projectCategoryBySlug {
  __typename: 'ProjectCategory'
  id: string
  slug: string
  contents: ProjectCategoryBySlug_projectCategoryBySlug_contents[] | null
  projects: ProjectCategoryBySlug_projectCategoryBySlug_projects[] | null
}

export interface ProjectCategoryBySlug {
  projectCategoryBySlug: ProjectCategoryBySlug_projectCategoryBySlug | null
}

export interface ProjectCategoryBySlugVariables {
  slug: string
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProjectById
// ====================================================

export interface ProjectById_projectById_contents_language {
  __typename: 'ProjectLng'
  country: string
}

export interface ProjectById_projectById_contents {
  __typename: 'ProjectContent'
  id: string
  language: ProjectById_projectById_contents_language
  title: string
  description: string
  tags: string[]
  metaTitle: string | null
  metaDescription: string | null
  isActive: boolean
}

export interface ProjectById_projectById {
  __typename: 'Project'
  id: string
  contents: ProjectById_projectById_contents[] | null
}

export interface ProjectById {
  projectById: ProjectById_projectById | null
}

export interface ProjectByIdVariables {
  id: string
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProjectBySlug
// ====================================================

export interface ProjectBySlug_projectBySlug_contents_language {
  __typename: 'ProjectLng'
  country: string
}

export interface ProjectBySlug_projectBySlug_contents {
  __typename: 'ProjectContent'
  id: string
  language: ProjectBySlug_projectBySlug_contents_language
  title: string
  description: string
  tags: string[]
  metaTitle: string | null
  metaDescription: string | null
  isActive: boolean
}

export interface ProjectBySlug_projectBySlug {
  __typename: 'Project'
  slug: string
  contents: ProjectBySlug_projectBySlug_contents[] | null
}

export interface ProjectBySlug {
  projectBySlug: ProjectBySlug_projectBySlug | null
}

export interface ProjectBySlugVariables {
  slug: string
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProjectsAll
// ====================================================

export interface ProjectsAll_projectsAll_contents_language {
  __typename: 'ProjectLng'
  country: string
}

export interface ProjectsAll_projectsAll_contents {
  __typename: 'ProjectContent'
  id: string
  language: ProjectsAll_projectsAll_contents_language
  title: string
  description: string
  tags: string[]
  metaTitle: string | null
  metaDescription: string | null
  isActive: boolean
}

export interface ProjectsAll_projectsAll {
  __typename: 'Project'
  id: string
  contents: ProjectsAll_projectsAll_contents[] | null
}

export interface ProjectsAll {
  projectsAll: (ProjectsAll_projectsAll | null)[]
}

export interface ProjectsAllVariables {
  orderBy?: ProjectOrderByInput | null
  first?: number | null
  last?: number | null
  skip?: number | null
  after?: string | null
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me_avatar {
  __typename: 'Avatar'
  id: string
  publicId: string
  src: string
}

export interface Me_me {
  __typename: 'User'
  id: string
  avatar: Me_me_avatar | null
  role: Role
  name: string
  email: string | null
}

export interface Me {
  me: Me_me | null
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum PostOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  imageSrc_ASC = 'imageSrc_ASC',
  imageSrc_DESC = 'imageSrc_DESC',
  isPublished_ASC = 'isPublished_ASC',
  isPublished_DESC = 'isPublished_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export enum ProjectCategoryOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export enum ProjectOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export enum Role {
  ADMIN = 'ADMIN',
  SITEMANAGER = 'SITEMANAGER',
  USER = 'USER'
}

export interface AvatarCreateInput {
  publicId: string
  src: string
}

export interface AvatarCreateOneInput {
  create?: AvatarCreateInput | null
  connect?: AvatarWhereUniqueInput | null
}

export interface AvatarUpdateDataInput {
  publicId?: string | null
  src?: string | null
}

export interface AvatarUpdateOneInput {
  create?: AvatarCreateInput | null
  connect?: AvatarWhereUniqueInput | null
  disconnect?: boolean | null
  delete?: boolean | null
  update?: AvatarUpdateDataInput | null
  upsert?: AvatarUpsertNestedInput | null
}

export interface AvatarUpsertNestedInput {
  update: AvatarUpdateDataInput
  create: AvatarCreateInput
}

export interface AvatarWhereInput {
  AND?: AvatarWhereInput[] | null
  OR?: AvatarWhereInput[] | null
  NOT?: AvatarWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  publicId?: string | null
  publicId_not?: string | null
  publicId_in?: string[] | null
  publicId_not_in?: string[] | null
  publicId_lt?: string | null
  publicId_lte?: string | null
  publicId_gt?: string | null
  publicId_gte?: string | null
  publicId_contains?: string | null
  publicId_not_contains?: string | null
  publicId_starts_with?: string | null
  publicId_not_starts_with?: string | null
  publicId_ends_with?: string | null
  publicId_not_ends_with?: string | null
  src?: string | null
  src_not?: string | null
  src_in?: string[] | null
  src_not_in?: string[] | null
  src_lt?: string | null
  src_lte?: string | null
  src_gt?: string | null
  src_gte?: string | null
  src_contains?: string | null
  src_not_contains?: string | null
  src_starts_with?: string | null
  src_not_starts_with?: string | null
  src_ends_with?: string | null
  src_not_ends_with?: string | null
}

export interface AvatarWhereUniqueInput {
  id?: string | null
}

export interface CommentCreateManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[] | null
  connect?: CommentWhereUniqueInput[] | null
}

export interface CommentCreateManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[] | null
  connect?: CommentWhereUniqueInput[] | null
}

export interface CommentCreateWithoutAuthorInput {
  post: PostCreateOneWithoutCommentsInput
}

export interface CommentCreateWithoutPostInput {
  author: UserCreateOneWithoutCommentsInput
}

export interface CommentScalarWhereInput {
  AND?: CommentScalarWhereInput[] | null
  OR?: CommentScalarWhereInput[] | null
  NOT?: CommentScalarWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
}

export interface CommentUpdateManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[] | null
  connect?: CommentWhereUniqueInput[] | null
  disconnect?: CommentWhereUniqueInput[] | null
  delete?: CommentWhereUniqueInput[] | null
  update?: CommentUpdateWithWhereUniqueWithoutAuthorInput[] | null
  deleteMany?: CommentScalarWhereInput[] | null
  upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput[] | null
}

export interface CommentUpdateManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[] | null
  connect?: CommentWhereUniqueInput[] | null
  disconnect?: CommentWhereUniqueInput[] | null
  delete?: CommentWhereUniqueInput[] | null
  update?: CommentUpdateWithWhereUniqueWithoutPostInput[] | null
  deleteMany?: CommentScalarWhereInput[] | null
  upsert?: CommentUpsertWithWhereUniqueWithoutPostInput[] | null
}

export interface CommentUpdateWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateWithoutAuthorDataInput
}

export interface CommentUpdateWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateWithoutPostDataInput
}

export interface CommentUpdateWithoutAuthorDataInput {
  post?: PostUpdateOneRequiredWithoutCommentsInput | null
}

export interface CommentUpdateWithoutPostDataInput {
  author?: UserUpdateOneRequiredWithoutCommentsInput | null
}

export interface CommentUpsertWithWhereUniqueWithoutAuthorInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateWithoutAuthorDataInput
  create: CommentCreateWithoutAuthorInput
}

export interface CommentUpsertWithWhereUniqueWithoutPostInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateWithoutPostDataInput
  create: CommentCreateWithoutPostInput
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[] | null
  OR?: CommentWhereInput[] | null
  NOT?: CommentWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  author?: UserWhereInput | null
  post?: PostWhereInput | null
}

export interface CommentWhereUniqueInput {
  id?: string | null
}

export interface PostContentCreateManyWithoutPostInput {
  create?: PostContentCreateWithoutPostInput[] | null
  connect?: PostContentWhereUniqueInput[] | null
}

export interface PostContentCreateWithoutPostInput {
  title: string
  description: string
  imageAlt: string
  metaTitle?: string | null
  metaDescription?: string | null
  tags?: PostContentCreatetagsInput | null
  language: PostLngCreateOneWithoutPostsInput
}

export interface PostContentCreatetagsInput {
  set?: string[] | null
}

export interface PostContentScalarWhereInput {
  AND?: PostContentScalarWhereInput[] | null
  OR?: PostContentScalarWhereInput[] | null
  NOT?: PostContentScalarWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  title?: string | null
  title_not?: string | null
  title_in?: string[] | null
  title_not_in?: string[] | null
  title_lt?: string | null
  title_lte?: string | null
  title_gt?: string | null
  title_gte?: string | null
  title_contains?: string | null
  title_not_contains?: string | null
  title_starts_with?: string | null
  title_not_starts_with?: string | null
  title_ends_with?: string | null
  title_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  imageAlt?: string | null
  imageAlt_not?: string | null
  imageAlt_in?: string[] | null
  imageAlt_not_in?: string[] | null
  imageAlt_lt?: string | null
  imageAlt_lte?: string | null
  imageAlt_gt?: string | null
  imageAlt_gte?: string | null
  imageAlt_contains?: string | null
  imageAlt_not_contains?: string | null
  imageAlt_starts_with?: string | null
  imageAlt_not_starts_with?: string | null
  imageAlt_ends_with?: string | null
  imageAlt_not_ends_with?: string | null
  metaTitle?: string | null
  metaTitle_not?: string | null
  metaTitle_in?: string[] | null
  metaTitle_not_in?: string[] | null
  metaTitle_lt?: string | null
  metaTitle_lte?: string | null
  metaTitle_gt?: string | null
  metaTitle_gte?: string | null
  metaTitle_contains?: string | null
  metaTitle_not_contains?: string | null
  metaTitle_starts_with?: string | null
  metaTitle_not_starts_with?: string | null
  metaTitle_ends_with?: string | null
  metaTitle_not_ends_with?: string | null
  metaDescription?: string | null
  metaDescription_not?: string | null
  metaDescription_in?: string[] | null
  metaDescription_not_in?: string[] | null
  metaDescription_lt?: string | null
  metaDescription_lte?: string | null
  metaDescription_gt?: string | null
  metaDescription_gte?: string | null
  metaDescription_contains?: string | null
  metaDescription_not_contains?: string | null
  metaDescription_starts_with?: string | null
  metaDescription_not_starts_with?: string | null
  metaDescription_ends_with?: string | null
  metaDescription_not_ends_with?: string | null
}

export interface PostContentUpdateManyDataInput {
  title?: string | null
  description?: string | null
  imageAlt?: string | null
  metaTitle?: string | null
  metaDescription?: string | null
  tags?: PostContentUpdatetagsInput | null
}

export interface PostContentUpdateManyWithWhereNestedInput {
  where: PostContentScalarWhereInput
  data: PostContentUpdateManyDataInput
}

export interface PostContentUpdateManyWithoutPostInput {
  create?: PostContentCreateWithoutPostInput[] | null
  connect?: PostContentWhereUniqueInput[] | null
  disconnect?: PostContentWhereUniqueInput[] | null
  delete?: PostContentWhereUniqueInput[] | null
  update?: PostContentUpdateWithWhereUniqueWithoutPostInput[] | null
  updateMany?: PostContentUpdateManyWithWhereNestedInput[] | null
  deleteMany?: PostContentScalarWhereInput[] | null
  upsert?: PostContentUpsertWithWhereUniqueWithoutPostInput[] | null
}

export interface PostContentUpdateWithWhereUniqueWithoutPostInput {
  where: PostContentWhereUniqueInput
  data: PostContentUpdateWithoutPostDataInput
}

export interface PostContentUpdateWithoutPostDataInput {
  title?: string | null
  description?: string | null
  imageAlt?: string | null
  metaTitle?: string | null
  metaDescription?: string | null
  tags?: PostContentUpdatetagsInput | null
  language?: PostLngUpdateOneRequiredWithoutPostsInput | null
}

export interface PostContentUpdatetagsInput {
  set?: string[] | null
}

export interface PostContentUpsertWithWhereUniqueWithoutPostInput {
  where: PostContentWhereUniqueInput
  update: PostContentUpdateWithoutPostDataInput
  create: PostContentCreateWithoutPostInput
}

export interface PostContentWhereInput {
  AND?: PostContentWhereInput[] | null
  OR?: PostContentWhereInput[] | null
  NOT?: PostContentWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  title?: string | null
  title_not?: string | null
  title_in?: string[] | null
  title_not_in?: string[] | null
  title_lt?: string | null
  title_lte?: string | null
  title_gt?: string | null
  title_gte?: string | null
  title_contains?: string | null
  title_not_contains?: string | null
  title_starts_with?: string | null
  title_not_starts_with?: string | null
  title_ends_with?: string | null
  title_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  imageAlt?: string | null
  imageAlt_not?: string | null
  imageAlt_in?: string[] | null
  imageAlt_not_in?: string[] | null
  imageAlt_lt?: string | null
  imageAlt_lte?: string | null
  imageAlt_gt?: string | null
  imageAlt_gte?: string | null
  imageAlt_contains?: string | null
  imageAlt_not_contains?: string | null
  imageAlt_starts_with?: string | null
  imageAlt_not_starts_with?: string | null
  imageAlt_ends_with?: string | null
  imageAlt_not_ends_with?: string | null
  metaTitle?: string | null
  metaTitle_not?: string | null
  metaTitle_in?: string[] | null
  metaTitle_not_in?: string[] | null
  metaTitle_lt?: string | null
  metaTitle_lte?: string | null
  metaTitle_gt?: string | null
  metaTitle_gte?: string | null
  metaTitle_contains?: string | null
  metaTitle_not_contains?: string | null
  metaTitle_starts_with?: string | null
  metaTitle_not_starts_with?: string | null
  metaTitle_ends_with?: string | null
  metaTitle_not_ends_with?: string | null
  metaDescription?: string | null
  metaDescription_not?: string | null
  metaDescription_in?: string[] | null
  metaDescription_not_in?: string[] | null
  metaDescription_lt?: string | null
  metaDescription_lte?: string | null
  metaDescription_gt?: string | null
  metaDescription_gte?: string | null
  metaDescription_contains?: string | null
  metaDescription_not_contains?: string | null
  metaDescription_starts_with?: string | null
  metaDescription_not_starts_with?: string | null
  metaDescription_ends_with?: string | null
  metaDescription_not_ends_with?: string | null
  post?: PostWhereInput | null
  language?: PostLngWhereInput | null
}

export interface PostContentWhereUniqueInput {
  id?: string | null
}

export interface PostCreateInput {
  slug: string
  imageSrc: string
  isPublished?: boolean | null
  author: UserCreateOneWithoutPostsInput
  contents?: PostContentCreateManyWithoutPostInput | null
  comments?: CommentCreateManyWithoutPostInput | null
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | null
  connect?: PostWhereUniqueInput[] | null
}

export interface PostCreateOneWithoutCommentsInput {
  create?: PostCreateWithoutCommentsInput | null
  connect?: PostWhereUniqueInput | null
}

export interface PostCreateWithoutAuthorInput {
  slug: string
  imageSrc: string
  isPublished?: boolean | null
  contents?: PostContentCreateManyWithoutPostInput | null
  comments?: CommentCreateManyWithoutPostInput | null
}

export interface PostCreateWithoutCommentsInput {
  slug: string
  imageSrc: string
  isPublished?: boolean | null
  author: UserCreateOneWithoutPostsInput
  contents?: PostContentCreateManyWithoutPostInput | null
}

export interface PostLngCreateOneWithoutPostsInput {
  create?: PostLngCreateWithoutPostsInput | null
  connect?: PostLngWhereUniqueInput | null
}

export interface PostLngCreateWithoutPostsInput {
  country: string
  locale?: string | null
}

export interface PostLngUpdateOneRequiredWithoutPostsInput {
  create?: PostLngCreateWithoutPostsInput | null
  connect?: PostLngWhereUniqueInput | null
  update?: PostLngUpdateWithoutPostsDataInput | null
  upsert?: PostLngUpsertWithoutPostsInput | null
}

export interface PostLngUpdateWithoutPostsDataInput {
  country?: string | null
  locale?: string | null
}

export interface PostLngUpsertWithoutPostsInput {
  update: PostLngUpdateWithoutPostsDataInput
  create: PostLngCreateWithoutPostsInput
}

export interface PostLngWhereInput {
  AND?: PostLngWhereInput[] | null
  OR?: PostLngWhereInput[] | null
  NOT?: PostLngWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  country?: string | null
  country_not?: string | null
  country_in?: string[] | null
  country_not_in?: string[] | null
  country_lt?: string | null
  country_lte?: string | null
  country_gt?: string | null
  country_gte?: string | null
  country_contains?: string | null
  country_not_contains?: string | null
  country_starts_with?: string | null
  country_not_starts_with?: string | null
  country_ends_with?: string | null
  country_not_ends_with?: string | null
  locale?: string | null
  locale_not?: string | null
  locale_in?: string[] | null
  locale_not_in?: string[] | null
  locale_lt?: string | null
  locale_lte?: string | null
  locale_gt?: string | null
  locale_gte?: string | null
  locale_contains?: string | null
  locale_not_contains?: string | null
  locale_starts_with?: string | null
  locale_not_starts_with?: string | null
  locale_ends_with?: string | null
  locale_not_ends_with?: string | null
  posts_every?: PostContentWhereInput | null
  posts_some?: PostContentWhereInput | null
  posts_none?: PostContentWhereInput | null
}

export interface PostLngWhereUniqueInput {
  id?: string | null
  country?: string | null
  locale?: string | null
}

export interface PostScalarWhereInput {
  AND?: PostScalarWhereInput[] | null
  OR?: PostScalarWhereInput[] | null
  NOT?: PostScalarWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  slug?: string | null
  slug_not?: string | null
  slug_in?: string[] | null
  slug_not_in?: string[] | null
  slug_lt?: string | null
  slug_lte?: string | null
  slug_gt?: string | null
  slug_gte?: string | null
  slug_contains?: string | null
  slug_not_contains?: string | null
  slug_starts_with?: string | null
  slug_not_starts_with?: string | null
  slug_ends_with?: string | null
  slug_not_ends_with?: string | null
  imageSrc?: string | null
  imageSrc_not?: string | null
  imageSrc_in?: string[] | null
  imageSrc_not_in?: string[] | null
  imageSrc_lt?: string | null
  imageSrc_lte?: string | null
  imageSrc_gt?: string | null
  imageSrc_gte?: string | null
  imageSrc_contains?: string | null
  imageSrc_not_contains?: string | null
  imageSrc_starts_with?: string | null
  imageSrc_not_starts_with?: string | null
  imageSrc_ends_with?: string | null
  imageSrc_not_ends_with?: string | null
  isPublished?: boolean | null
  isPublished_not?: boolean | null
}

export interface PostUpdateInput {
  slug?: string | null
  imageSrc?: string | null
  isPublished?: boolean | null
  author?: UserUpdateOneRequiredWithoutPostsInput | null
  contents?: PostContentUpdateManyWithoutPostInput | null
  comments?: CommentUpdateManyWithoutPostInput | null
}

export interface PostUpdateManyDataInput {
  slug?: string | null
  imageSrc?: string | null
  isPublished?: boolean | null
}

export interface PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput
  data: PostUpdateManyDataInput
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | null
  connect?: PostWhereUniqueInput[] | null
  disconnect?: PostWhereUniqueInput[] | null
  delete?: PostWhereUniqueInput[] | null
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | null
  updateMany?: PostUpdateManyWithWhereNestedInput[] | null
  deleteMany?: PostScalarWhereInput[] | null
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | null
}

export interface PostUpdateOneRequiredWithoutCommentsInput {
  create?: PostCreateWithoutCommentsInput | null
  connect?: PostWhereUniqueInput | null
  update?: PostUpdateWithoutCommentsDataInput | null
  upsert?: PostUpsertWithoutCommentsInput | null
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutAuthorDataInput
}

export interface PostUpdateWithoutAuthorDataInput {
  slug?: string | null
  imageSrc?: string | null
  isPublished?: boolean | null
  contents?: PostContentUpdateManyWithoutPostInput | null
  comments?: CommentUpdateManyWithoutPostInput | null
}

export interface PostUpdateWithoutCommentsDataInput {
  slug?: string | null
  imageSrc?: string | null
  isPublished?: boolean | null
  author?: UserUpdateOneRequiredWithoutPostsInput | null
  contents?: PostContentUpdateManyWithoutPostInput | null
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutAuthorDataInput
  create: PostCreateWithoutAuthorInput
}

export interface PostUpsertWithoutCommentsInput {
  update: PostUpdateWithoutCommentsDataInput
  create: PostCreateWithoutCommentsInput
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | null
  OR?: PostWhereInput[] | null
  NOT?: PostWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  slug?: string | null
  slug_not?: string | null
  slug_in?: string[] | null
  slug_not_in?: string[] | null
  slug_lt?: string | null
  slug_lte?: string | null
  slug_gt?: string | null
  slug_gte?: string | null
  slug_contains?: string | null
  slug_not_contains?: string | null
  slug_starts_with?: string | null
  slug_not_starts_with?: string | null
  slug_ends_with?: string | null
  slug_not_ends_with?: string | null
  imageSrc?: string | null
  imageSrc_not?: string | null
  imageSrc_in?: string[] | null
  imageSrc_not_in?: string[] | null
  imageSrc_lt?: string | null
  imageSrc_lte?: string | null
  imageSrc_gt?: string | null
  imageSrc_gte?: string | null
  imageSrc_contains?: string | null
  imageSrc_not_contains?: string | null
  imageSrc_starts_with?: string | null
  imageSrc_not_starts_with?: string | null
  imageSrc_ends_with?: string | null
  imageSrc_not_ends_with?: string | null
  isPublished?: boolean | null
  isPublished_not?: boolean | null
  author?: UserWhereInput | null
  contents_every?: PostContentWhereInput | null
  contents_some?: PostContentWhereInput | null
  contents_none?: PostContentWhereInput | null
  comments_every?: CommentWhereInput | null
  comments_some?: CommentWhereInput | null
  comments_none?: CommentWhereInput | null
}

export interface PostWhereUniqueInput {
  id?: string | null
  slug?: string | null
}

export interface ProjectAlbumCreateOneWithoutProjectInput {
  create?: ProjectAlbumCreateWithoutProjectInput | null
  connect?: ProjectAlbumWhereUniqueInput | null
}

export interface ProjectAlbumCreateWithoutProjectInput {
  images?: ProjectImageCreateManyWithoutAlbumInput | null
}

export interface ProjectAlbumUpdateOneRequiredWithoutProjectInput {
  create?: ProjectAlbumCreateWithoutProjectInput | null
  connect?: ProjectAlbumWhereUniqueInput | null
  update?: ProjectAlbumUpdateWithoutProjectDataInput | null
  upsert?: ProjectAlbumUpsertWithoutProjectInput | null
}

export interface ProjectAlbumUpdateWithoutProjectDataInput {
  images?: ProjectImageUpdateManyWithoutAlbumInput | null
}

export interface ProjectAlbumUpsertWithoutProjectInput {
  update: ProjectAlbumUpdateWithoutProjectDataInput
  create: ProjectAlbumCreateWithoutProjectInput
}

export interface ProjectAlbumWhereInput {
  AND?: ProjectAlbumWhereInput[] | null
  OR?: ProjectAlbumWhereInput[] | null
  NOT?: ProjectAlbumWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  project?: ProjectWhereInput | null
  images_every?: ProjectImageWhereInput | null
  images_some?: ProjectImageWhereInput | null
  images_none?: ProjectImageWhereInput | null
}

export interface ProjectAlbumWhereUniqueInput {
  id?: string | null
}

export interface ProjectCategoryContentCreateManyWithoutCategoryInput {
  create?: ProjectCategoryContentCreateWithoutCategoryInput[] | null
  connect?: ProjectCategoryContentWhereUniqueInput[] | null
}

export interface ProjectCategoryContentCreateWithoutCategoryInput {
  title: string
  image: string
  imageAlt: string
  metaTitle?: string | null
  metaDescription?: string | null
  language: ProjectCategoryLngCreateOneWithoutCategoriesInput
}

export interface ProjectCategoryContentScalarWhereInput {
  AND?: ProjectCategoryContentScalarWhereInput[] | null
  OR?: ProjectCategoryContentScalarWhereInput[] | null
  NOT?: ProjectCategoryContentScalarWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  title?: string | null
  title_not?: string | null
  title_in?: string[] | null
  title_not_in?: string[] | null
  title_lt?: string | null
  title_lte?: string | null
  title_gt?: string | null
  title_gte?: string | null
  title_contains?: string | null
  title_not_contains?: string | null
  title_starts_with?: string | null
  title_not_starts_with?: string | null
  title_ends_with?: string | null
  title_not_ends_with?: string | null
  image?: string | null
  image_not?: string | null
  image_in?: string[] | null
  image_not_in?: string[] | null
  image_lt?: string | null
  image_lte?: string | null
  image_gt?: string | null
  image_gte?: string | null
  image_contains?: string | null
  image_not_contains?: string | null
  image_starts_with?: string | null
  image_not_starts_with?: string | null
  image_ends_with?: string | null
  image_not_ends_with?: string | null
  imageAlt?: string | null
  imageAlt_not?: string | null
  imageAlt_in?: string[] | null
  imageAlt_not_in?: string[] | null
  imageAlt_lt?: string | null
  imageAlt_lte?: string | null
  imageAlt_gt?: string | null
  imageAlt_gte?: string | null
  imageAlt_contains?: string | null
  imageAlt_not_contains?: string | null
  imageAlt_starts_with?: string | null
  imageAlt_not_starts_with?: string | null
  imageAlt_ends_with?: string | null
  imageAlt_not_ends_with?: string | null
  metaTitle?: string | null
  metaTitle_not?: string | null
  metaTitle_in?: string[] | null
  metaTitle_not_in?: string[] | null
  metaTitle_lt?: string | null
  metaTitle_lte?: string | null
  metaTitle_gt?: string | null
  metaTitle_gte?: string | null
  metaTitle_contains?: string | null
  metaTitle_not_contains?: string | null
  metaTitle_starts_with?: string | null
  metaTitle_not_starts_with?: string | null
  metaTitle_ends_with?: string | null
  metaTitle_not_ends_with?: string | null
  metaDescription?: string | null
  metaDescription_not?: string | null
  metaDescription_in?: string[] | null
  metaDescription_not_in?: string[] | null
  metaDescription_lt?: string | null
  metaDescription_lte?: string | null
  metaDescription_gt?: string | null
  metaDescription_gte?: string | null
  metaDescription_contains?: string | null
  metaDescription_not_contains?: string | null
  metaDescription_starts_with?: string | null
  metaDescription_not_starts_with?: string | null
  metaDescription_ends_with?: string | null
  metaDescription_not_ends_with?: string | null
}

export interface ProjectCategoryContentUpdateManyDataInput {
  title?: string | null
  image?: string | null
  imageAlt?: string | null
  metaTitle?: string | null
  metaDescription?: string | null
}

export interface ProjectCategoryContentUpdateManyWithWhereNestedInput {
  where: ProjectCategoryContentScalarWhereInput
  data: ProjectCategoryContentUpdateManyDataInput
}

export interface ProjectCategoryContentUpdateManyWithoutCategoryInput {
  create?: ProjectCategoryContentCreateWithoutCategoryInput[] | null
  connect?: ProjectCategoryContentWhereUniqueInput[] | null
  disconnect?: ProjectCategoryContentWhereUniqueInput[] | null
  delete?: ProjectCategoryContentWhereUniqueInput[] | null
  update?:
    | ProjectCategoryContentUpdateWithWhereUniqueWithoutCategoryInput[]
    | null
  updateMany?: ProjectCategoryContentUpdateManyWithWhereNestedInput[] | null
  deleteMany?: ProjectCategoryContentScalarWhereInput[] | null
  upsert?:
    | ProjectCategoryContentUpsertWithWhereUniqueWithoutCategoryInput[]
    | null
}

export interface ProjectCategoryContentUpdateWithWhereUniqueWithoutCategoryInput {
  where: ProjectCategoryContentWhereUniqueInput
  data: ProjectCategoryContentUpdateWithoutCategoryDataInput
}

export interface ProjectCategoryContentUpdateWithoutCategoryDataInput {
  title?: string | null
  image?: string | null
  imageAlt?: string | null
  metaTitle?: string | null
  metaDescription?: string | null
  language?: ProjectCategoryLngUpdateOneRequiredWithoutCategoriesInput | null
}

export interface ProjectCategoryContentUpsertWithWhereUniqueWithoutCategoryInput {
  where: ProjectCategoryContentWhereUniqueInput
  update: ProjectCategoryContentUpdateWithoutCategoryDataInput
  create: ProjectCategoryContentCreateWithoutCategoryInput
}

export interface ProjectCategoryContentWhereInput {
  AND?: ProjectCategoryContentWhereInput[] | null
  OR?: ProjectCategoryContentWhereInput[] | null
  NOT?: ProjectCategoryContentWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  title?: string | null
  title_not?: string | null
  title_in?: string[] | null
  title_not_in?: string[] | null
  title_lt?: string | null
  title_lte?: string | null
  title_gt?: string | null
  title_gte?: string | null
  title_contains?: string | null
  title_not_contains?: string | null
  title_starts_with?: string | null
  title_not_starts_with?: string | null
  title_ends_with?: string | null
  title_not_ends_with?: string | null
  image?: string | null
  image_not?: string | null
  image_in?: string[] | null
  image_not_in?: string[] | null
  image_lt?: string | null
  image_lte?: string | null
  image_gt?: string | null
  image_gte?: string | null
  image_contains?: string | null
  image_not_contains?: string | null
  image_starts_with?: string | null
  image_not_starts_with?: string | null
  image_ends_with?: string | null
  image_not_ends_with?: string | null
  imageAlt?: string | null
  imageAlt_not?: string | null
  imageAlt_in?: string[] | null
  imageAlt_not_in?: string[] | null
  imageAlt_lt?: string | null
  imageAlt_lte?: string | null
  imageAlt_gt?: string | null
  imageAlt_gte?: string | null
  imageAlt_contains?: string | null
  imageAlt_not_contains?: string | null
  imageAlt_starts_with?: string | null
  imageAlt_not_starts_with?: string | null
  imageAlt_ends_with?: string | null
  imageAlt_not_ends_with?: string | null
  metaTitle?: string | null
  metaTitle_not?: string | null
  metaTitle_in?: string[] | null
  metaTitle_not_in?: string[] | null
  metaTitle_lt?: string | null
  metaTitle_lte?: string | null
  metaTitle_gt?: string | null
  metaTitle_gte?: string | null
  metaTitle_contains?: string | null
  metaTitle_not_contains?: string | null
  metaTitle_starts_with?: string | null
  metaTitle_not_starts_with?: string | null
  metaTitle_ends_with?: string | null
  metaTitle_not_ends_with?: string | null
  metaDescription?: string | null
  metaDescription_not?: string | null
  metaDescription_in?: string[] | null
  metaDescription_not_in?: string[] | null
  metaDescription_lt?: string | null
  metaDescription_lte?: string | null
  metaDescription_gt?: string | null
  metaDescription_gte?: string | null
  metaDescription_contains?: string | null
  metaDescription_not_contains?: string | null
  metaDescription_starts_with?: string | null
  metaDescription_not_starts_with?: string | null
  metaDescription_ends_with?: string | null
  metaDescription_not_ends_with?: string | null
  category?: ProjectCategoryWhereInput | null
  language?: ProjectCategoryLngWhereInput | null
}

export interface ProjectCategoryContentWhereUniqueInput {
  id?: string | null
}

export interface ProjectCategoryCreateInput {
  slug: string
  contents?: ProjectCategoryContentCreateManyWithoutCategoryInput | null
  projects?: ProjectCreateManyWithoutCategoryInput | null
}

export interface ProjectCategoryCreateOneWithoutProjectsInput {
  create?: ProjectCategoryCreateWithoutProjectsInput | null
  connect?: ProjectCategoryWhereUniqueInput | null
}

export interface ProjectCategoryCreateWithoutProjectsInput {
  slug: string
  contents?: ProjectCategoryContentCreateManyWithoutCategoryInput | null
}

export interface ProjectCategoryLngCreateOneWithoutCategoriesInput {
  create?: ProjectCategoryLngCreateWithoutCategoriesInput | null
  connect?: ProjectCategoryLngWhereUniqueInput | null
}

export interface ProjectCategoryLngCreateWithoutCategoriesInput {
  country: string
  locale?: string | null
}

export interface ProjectCategoryLngUpdateOneRequiredWithoutCategoriesInput {
  create?: ProjectCategoryLngCreateWithoutCategoriesInput | null
  connect?: ProjectCategoryLngWhereUniqueInput | null
  update?: ProjectCategoryLngUpdateWithoutCategoriesDataInput | null
  upsert?: ProjectCategoryLngUpsertWithoutCategoriesInput | null
}

export interface ProjectCategoryLngUpdateWithoutCategoriesDataInput {
  country?: string | null
  locale?: string | null
}

export interface ProjectCategoryLngUpsertWithoutCategoriesInput {
  update: ProjectCategoryLngUpdateWithoutCategoriesDataInput
  create: ProjectCategoryLngCreateWithoutCategoriesInput
}

export interface ProjectCategoryLngWhereInput {
  AND?: ProjectCategoryLngWhereInput[] | null
  OR?: ProjectCategoryLngWhereInput[] | null
  NOT?: ProjectCategoryLngWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  country?: string | null
  country_not?: string | null
  country_in?: string[] | null
  country_not_in?: string[] | null
  country_lt?: string | null
  country_lte?: string | null
  country_gt?: string | null
  country_gte?: string | null
  country_contains?: string | null
  country_not_contains?: string | null
  country_starts_with?: string | null
  country_not_starts_with?: string | null
  country_ends_with?: string | null
  country_not_ends_with?: string | null
  locale?: string | null
  locale_not?: string | null
  locale_in?: string[] | null
  locale_not_in?: string[] | null
  locale_lt?: string | null
  locale_lte?: string | null
  locale_gt?: string | null
  locale_gte?: string | null
  locale_contains?: string | null
  locale_not_contains?: string | null
  locale_starts_with?: string | null
  locale_not_starts_with?: string | null
  locale_ends_with?: string | null
  locale_not_ends_with?: string | null
  categories_every?: ProjectCategoryContentWhereInput | null
  categories_some?: ProjectCategoryContentWhereInput | null
  categories_none?: ProjectCategoryContentWhereInput | null
}

export interface ProjectCategoryLngWhereUniqueInput {
  id?: string | null
  country?: string | null
  locale?: string | null
}

export interface ProjectCategoryUpdateInput {
  slug?: string | null
  contents?: ProjectCategoryContentUpdateManyWithoutCategoryInput | null
  projects?: ProjectUpdateManyWithoutCategoryInput | null
}

export interface ProjectCategoryUpdateOneRequiredWithoutProjectsInput {
  create?: ProjectCategoryCreateWithoutProjectsInput | null
  connect?: ProjectCategoryWhereUniqueInput | null
  update?: ProjectCategoryUpdateWithoutProjectsDataInput | null
  upsert?: ProjectCategoryUpsertWithoutProjectsInput | null
}

export interface ProjectCategoryUpdateWithoutProjectsDataInput {
  slug?: string | null
  contents?: ProjectCategoryContentUpdateManyWithoutCategoryInput | null
}

export interface ProjectCategoryUpsertWithoutProjectsInput {
  update: ProjectCategoryUpdateWithoutProjectsDataInput
  create: ProjectCategoryCreateWithoutProjectsInput
}

export interface ProjectCategoryWhereInput {
  AND?: ProjectCategoryWhereInput[] | null
  OR?: ProjectCategoryWhereInput[] | null
  NOT?: ProjectCategoryWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  slug?: string | null
  slug_not?: string | null
  slug_in?: string[] | null
  slug_not_in?: string[] | null
  slug_lt?: string | null
  slug_lte?: string | null
  slug_gt?: string | null
  slug_gte?: string | null
  slug_contains?: string | null
  slug_not_contains?: string | null
  slug_starts_with?: string | null
  slug_not_starts_with?: string | null
  slug_ends_with?: string | null
  slug_not_ends_with?: string | null
  contents_every?: ProjectCategoryContentWhereInput | null
  contents_some?: ProjectCategoryContentWhereInput | null
  contents_none?: ProjectCategoryContentWhereInput | null
  projects_every?: ProjectWhereInput | null
  projects_some?: ProjectWhereInput | null
  projects_none?: ProjectWhereInput | null
}

export interface ProjectCategoryWhereUniqueInput {
  id?: string | null
  slug?: string | null
}

export interface ProjectContentCreateManyWithoutProjectInput {
  create?: ProjectContentCreateWithoutProjectInput[] | null
  connect?: ProjectContentWhereUniqueInput[] | null
}

export interface ProjectContentCreateWithoutProjectInput {
  title: string
  description: string
  metaTitle?: string | null
  metaDescription?: string | null
  isActive?: boolean | null
  tags?: ProjectContentCreatetagsInput | null
  language: ProjectLngCreateOneWithoutProjectsInput
}

export interface ProjectContentCreatetagsInput {
  set?: string[] | null
}

export interface ProjectContentScalarWhereInput {
  AND?: ProjectContentScalarWhereInput[] | null
  OR?: ProjectContentScalarWhereInput[] | null
  NOT?: ProjectContentScalarWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  title?: string | null
  title_not?: string | null
  title_in?: string[] | null
  title_not_in?: string[] | null
  title_lt?: string | null
  title_lte?: string | null
  title_gt?: string | null
  title_gte?: string | null
  title_contains?: string | null
  title_not_contains?: string | null
  title_starts_with?: string | null
  title_not_starts_with?: string | null
  title_ends_with?: string | null
  title_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  metaTitle?: string | null
  metaTitle_not?: string | null
  metaTitle_in?: string[] | null
  metaTitle_not_in?: string[] | null
  metaTitle_lt?: string | null
  metaTitle_lte?: string | null
  metaTitle_gt?: string | null
  metaTitle_gte?: string | null
  metaTitle_contains?: string | null
  metaTitle_not_contains?: string | null
  metaTitle_starts_with?: string | null
  metaTitle_not_starts_with?: string | null
  metaTitle_ends_with?: string | null
  metaTitle_not_ends_with?: string | null
  metaDescription?: string | null
  metaDescription_not?: string | null
  metaDescription_in?: string[] | null
  metaDescription_not_in?: string[] | null
  metaDescription_lt?: string | null
  metaDescription_lte?: string | null
  metaDescription_gt?: string | null
  metaDescription_gte?: string | null
  metaDescription_contains?: string | null
  metaDescription_not_contains?: string | null
  metaDescription_starts_with?: string | null
  metaDescription_not_starts_with?: string | null
  metaDescription_ends_with?: string | null
  metaDescription_not_ends_with?: string | null
  isActive?: boolean | null
  isActive_not?: boolean | null
}

export interface ProjectContentUpdateManyDataInput {
  title?: string | null
  description?: string | null
  metaTitle?: string | null
  metaDescription?: string | null
  isActive?: boolean | null
  tags?: ProjectContentUpdatetagsInput | null
}

export interface ProjectContentUpdateManyWithWhereNestedInput {
  where: ProjectContentScalarWhereInput
  data: ProjectContentUpdateManyDataInput
}

export interface ProjectContentUpdateManyWithoutProjectInput {
  create?: ProjectContentCreateWithoutProjectInput[] | null
  connect?: ProjectContentWhereUniqueInput[] | null
  disconnect?: ProjectContentWhereUniqueInput[] | null
  delete?: ProjectContentWhereUniqueInput[] | null
  update?: ProjectContentUpdateWithWhereUniqueWithoutProjectInput[] | null
  updateMany?: ProjectContentUpdateManyWithWhereNestedInput[] | null
  deleteMany?: ProjectContentScalarWhereInput[] | null
  upsert?: ProjectContentUpsertWithWhereUniqueWithoutProjectInput[] | null
}

export interface ProjectContentUpdateWithWhereUniqueWithoutProjectInput {
  where: ProjectContentWhereUniqueInput
  data: ProjectContentUpdateWithoutProjectDataInput
}

export interface ProjectContentUpdateWithoutProjectDataInput {
  title?: string | null
  description?: string | null
  metaTitle?: string | null
  metaDescription?: string | null
  isActive?: boolean | null
  tags?: ProjectContentUpdatetagsInput | null
  language?: ProjectLngUpdateOneRequiredWithoutProjectsInput | null
}

export interface ProjectContentUpdatetagsInput {
  set?: string[] | null
}

export interface ProjectContentUpsertWithWhereUniqueWithoutProjectInput {
  where: ProjectContentWhereUniqueInput
  update: ProjectContentUpdateWithoutProjectDataInput
  create: ProjectContentCreateWithoutProjectInput
}

export interface ProjectContentWhereInput {
  AND?: ProjectContentWhereInput[] | null
  OR?: ProjectContentWhereInput[] | null
  NOT?: ProjectContentWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  title?: string | null
  title_not?: string | null
  title_in?: string[] | null
  title_not_in?: string[] | null
  title_lt?: string | null
  title_lte?: string | null
  title_gt?: string | null
  title_gte?: string | null
  title_contains?: string | null
  title_not_contains?: string | null
  title_starts_with?: string | null
  title_not_starts_with?: string | null
  title_ends_with?: string | null
  title_not_ends_with?: string | null
  description?: string | null
  description_not?: string | null
  description_in?: string[] | null
  description_not_in?: string[] | null
  description_lt?: string | null
  description_lte?: string | null
  description_gt?: string | null
  description_gte?: string | null
  description_contains?: string | null
  description_not_contains?: string | null
  description_starts_with?: string | null
  description_not_starts_with?: string | null
  description_ends_with?: string | null
  description_not_ends_with?: string | null
  metaTitle?: string | null
  metaTitle_not?: string | null
  metaTitle_in?: string[] | null
  metaTitle_not_in?: string[] | null
  metaTitle_lt?: string | null
  metaTitle_lte?: string | null
  metaTitle_gt?: string | null
  metaTitle_gte?: string | null
  metaTitle_contains?: string | null
  metaTitle_not_contains?: string | null
  metaTitle_starts_with?: string | null
  metaTitle_not_starts_with?: string | null
  metaTitle_ends_with?: string | null
  metaTitle_not_ends_with?: string | null
  metaDescription?: string | null
  metaDescription_not?: string | null
  metaDescription_in?: string[] | null
  metaDescription_not_in?: string[] | null
  metaDescription_lt?: string | null
  metaDescription_lte?: string | null
  metaDescription_gt?: string | null
  metaDescription_gte?: string | null
  metaDescription_contains?: string | null
  metaDescription_not_contains?: string | null
  metaDescription_starts_with?: string | null
  metaDescription_not_starts_with?: string | null
  metaDescription_ends_with?: string | null
  metaDescription_not_ends_with?: string | null
  isActive?: boolean | null
  isActive_not?: boolean | null
  project?: ProjectWhereInput | null
  language?: ProjectLngWhereInput | null
}

export interface ProjectContentWhereUniqueInput {
  id?: string | null
}

export interface ProjectCreateInput {
  slug: string
  category: ProjectCategoryCreateOneWithoutProjectsInput
  album: ProjectAlbumCreateOneWithoutProjectInput
  contents?: ProjectContentCreateManyWithoutProjectInput | null
}

export interface ProjectCreateManyWithoutCategoryInput {
  create?: ProjectCreateWithoutCategoryInput[] | null
  connect?: ProjectWhereUniqueInput[] | null
}

export interface ProjectCreateWithoutCategoryInput {
  slug: string
  album: ProjectAlbumCreateOneWithoutProjectInput
  contents?: ProjectContentCreateManyWithoutProjectInput | null
}

export interface ProjectImageContentCreateOneWithoutImageInput {
  create?: ProjectImageContentCreateWithoutImageInput | null
  connect?: ProjectImageContentWhereUniqueInput | null
}

export interface ProjectImageContentCreateWithoutImageInput {
  alt: string
  language: ProjectImageLngCreateOneWithoutImagesInput
}

export interface ProjectImageContentUpdateOneRequiredWithoutImageInput {
  create?: ProjectImageContentCreateWithoutImageInput | null
  connect?: ProjectImageContentWhereUniqueInput | null
  update?: ProjectImageContentUpdateWithoutImageDataInput | null
  upsert?: ProjectImageContentUpsertWithoutImageInput | null
}

export interface ProjectImageContentUpdateWithoutImageDataInput {
  alt?: string | null
  language?: ProjectImageLngUpdateOneRequiredWithoutImagesInput | null
}

export interface ProjectImageContentUpsertWithoutImageInput {
  update: ProjectImageContentUpdateWithoutImageDataInput
  create: ProjectImageContentCreateWithoutImageInput
}

export interface ProjectImageContentWhereInput {
  AND?: ProjectImageContentWhereInput[] | null
  OR?: ProjectImageContentWhereInput[] | null
  NOT?: ProjectImageContentWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  alt?: string | null
  alt_not?: string | null
  alt_in?: string[] | null
  alt_not_in?: string[] | null
  alt_lt?: string | null
  alt_lte?: string | null
  alt_gt?: string | null
  alt_gte?: string | null
  alt_contains?: string | null
  alt_not_contains?: string | null
  alt_starts_with?: string | null
  alt_not_starts_with?: string | null
  alt_ends_with?: string | null
  alt_not_ends_with?: string | null
  image?: ProjectImageWhereInput | null
  language?: ProjectImageLngWhereInput | null
}

export interface ProjectImageContentWhereUniqueInput {
  id?: string | null
  alt?: string | null
}

export interface ProjectImageCreateManyWithoutAlbumInput {
  create?: ProjectImageCreateWithoutAlbumInput[] | null
  connect?: ProjectImageWhereUniqueInput[] | null
}

export interface ProjectImageCreateWithoutAlbumInput {
  publicId: string
  src: string
  contents: ProjectImageContentCreateOneWithoutImageInput
}

export interface ProjectImageLngCreateOneWithoutImagesInput {
  create?: ProjectImageLngCreateWithoutImagesInput | null
  connect?: ProjectImageLngWhereUniqueInput | null
}

export interface ProjectImageLngCreateWithoutImagesInput {
  country: string
  locale?: string | null
}

export interface ProjectImageLngUpdateOneRequiredWithoutImagesInput {
  create?: ProjectImageLngCreateWithoutImagesInput | null
  connect?: ProjectImageLngWhereUniqueInput | null
  update?: ProjectImageLngUpdateWithoutImagesDataInput | null
  upsert?: ProjectImageLngUpsertWithoutImagesInput | null
}

export interface ProjectImageLngUpdateWithoutImagesDataInput {
  country?: string | null
  locale?: string | null
}

export interface ProjectImageLngUpsertWithoutImagesInput {
  update: ProjectImageLngUpdateWithoutImagesDataInput
  create: ProjectImageLngCreateWithoutImagesInput
}

export interface ProjectImageLngWhereInput {
  AND?: ProjectImageLngWhereInput[] | null
  OR?: ProjectImageLngWhereInput[] | null
  NOT?: ProjectImageLngWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  country?: string | null
  country_not?: string | null
  country_in?: string[] | null
  country_not_in?: string[] | null
  country_lt?: string | null
  country_lte?: string | null
  country_gt?: string | null
  country_gte?: string | null
  country_contains?: string | null
  country_not_contains?: string | null
  country_starts_with?: string | null
  country_not_starts_with?: string | null
  country_ends_with?: string | null
  country_not_ends_with?: string | null
  locale?: string | null
  locale_not?: string | null
  locale_in?: string[] | null
  locale_not_in?: string[] | null
  locale_lt?: string | null
  locale_lte?: string | null
  locale_gt?: string | null
  locale_gte?: string | null
  locale_contains?: string | null
  locale_not_contains?: string | null
  locale_starts_with?: string | null
  locale_not_starts_with?: string | null
  locale_ends_with?: string | null
  locale_not_ends_with?: string | null
  images_every?: ProjectImageContentWhereInput | null
  images_some?: ProjectImageContentWhereInput | null
  images_none?: ProjectImageContentWhereInput | null
}

export interface ProjectImageLngWhereUniqueInput {
  id?: string | null
  country?: string | null
  locale?: string | null
}

export interface ProjectImageScalarWhereInput {
  AND?: ProjectImageScalarWhereInput[] | null
  OR?: ProjectImageScalarWhereInput[] | null
  NOT?: ProjectImageScalarWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  publicId?: string | null
  publicId_not?: string | null
  publicId_in?: string[] | null
  publicId_not_in?: string[] | null
  publicId_lt?: string | null
  publicId_lte?: string | null
  publicId_gt?: string | null
  publicId_gte?: string | null
  publicId_contains?: string | null
  publicId_not_contains?: string | null
  publicId_starts_with?: string | null
  publicId_not_starts_with?: string | null
  publicId_ends_with?: string | null
  publicId_not_ends_with?: string | null
  src?: string | null
  src_not?: string | null
  src_in?: string[] | null
  src_not_in?: string[] | null
  src_lt?: string | null
  src_lte?: string | null
  src_gt?: string | null
  src_gte?: string | null
  src_contains?: string | null
  src_not_contains?: string | null
  src_starts_with?: string | null
  src_not_starts_with?: string | null
  src_ends_with?: string | null
  src_not_ends_with?: string | null
}

export interface ProjectImageUpdateManyDataInput {
  publicId?: string | null
  src?: string | null
}

export interface ProjectImageUpdateManyWithWhereNestedInput {
  where: ProjectImageScalarWhereInput
  data: ProjectImageUpdateManyDataInput
}

export interface ProjectImageUpdateManyWithoutAlbumInput {
  create?: ProjectImageCreateWithoutAlbumInput[] | null
  connect?: ProjectImageWhereUniqueInput[] | null
  disconnect?: ProjectImageWhereUniqueInput[] | null
  delete?: ProjectImageWhereUniqueInput[] | null
  update?: ProjectImageUpdateWithWhereUniqueWithoutAlbumInput[] | null
  updateMany?: ProjectImageUpdateManyWithWhereNestedInput[] | null
  deleteMany?: ProjectImageScalarWhereInput[] | null
  upsert?: ProjectImageUpsertWithWhereUniqueWithoutAlbumInput[] | null
}

export interface ProjectImageUpdateWithWhereUniqueWithoutAlbumInput {
  where: ProjectImageWhereUniqueInput
  data: ProjectImageUpdateWithoutAlbumDataInput
}

export interface ProjectImageUpdateWithoutAlbumDataInput {
  publicId?: string | null
  src?: string | null
  contents?: ProjectImageContentUpdateOneRequiredWithoutImageInput | null
}

export interface ProjectImageUpsertWithWhereUniqueWithoutAlbumInput {
  where: ProjectImageWhereUniqueInput
  update: ProjectImageUpdateWithoutAlbumDataInput
  create: ProjectImageCreateWithoutAlbumInput
}

export interface ProjectImageWhereInput {
  AND?: ProjectImageWhereInput[] | null
  OR?: ProjectImageWhereInput[] | null
  NOT?: ProjectImageWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  publicId?: string | null
  publicId_not?: string | null
  publicId_in?: string[] | null
  publicId_not_in?: string[] | null
  publicId_lt?: string | null
  publicId_lte?: string | null
  publicId_gt?: string | null
  publicId_gte?: string | null
  publicId_contains?: string | null
  publicId_not_contains?: string | null
  publicId_starts_with?: string | null
  publicId_not_starts_with?: string | null
  publicId_ends_with?: string | null
  publicId_not_ends_with?: string | null
  src?: string | null
  src_not?: string | null
  src_in?: string[] | null
  src_not_in?: string[] | null
  src_lt?: string | null
  src_lte?: string | null
  src_gt?: string | null
  src_gte?: string | null
  src_contains?: string | null
  src_not_contains?: string | null
  src_starts_with?: string | null
  src_not_starts_with?: string | null
  src_ends_with?: string | null
  src_not_ends_with?: string | null
  album?: ProjectAlbumWhereInput | null
  contents?: ProjectImageContentWhereInput | null
}

export interface ProjectImageWhereUniqueInput {
  id?: string | null
}

export interface ProjectLngCreateOneWithoutProjectsInput {
  create?: ProjectLngCreateWithoutProjectsInput | null
  connect?: ProjectLngWhereUniqueInput | null
}

export interface ProjectLngCreateWithoutProjectsInput {
  country: string
  locale?: string | null
}

export interface ProjectLngUpdateOneRequiredWithoutProjectsInput {
  create?: ProjectLngCreateWithoutProjectsInput | null
  connect?: ProjectLngWhereUniqueInput | null
  update?: ProjectLngUpdateWithoutProjectsDataInput | null
  upsert?: ProjectLngUpsertWithoutProjectsInput | null
}

export interface ProjectLngUpdateWithoutProjectsDataInput {
  country?: string | null
  locale?: string | null
}

export interface ProjectLngUpsertWithoutProjectsInput {
  update: ProjectLngUpdateWithoutProjectsDataInput
  create: ProjectLngCreateWithoutProjectsInput
}

export interface ProjectLngWhereInput {
  AND?: ProjectLngWhereInput[] | null
  OR?: ProjectLngWhereInput[] | null
  NOT?: ProjectLngWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  country?: string | null
  country_not?: string | null
  country_in?: string[] | null
  country_not_in?: string[] | null
  country_lt?: string | null
  country_lte?: string | null
  country_gt?: string | null
  country_gte?: string | null
  country_contains?: string | null
  country_not_contains?: string | null
  country_starts_with?: string | null
  country_not_starts_with?: string | null
  country_ends_with?: string | null
  country_not_ends_with?: string | null
  locale?: string | null
  locale_not?: string | null
  locale_in?: string[] | null
  locale_not_in?: string[] | null
  locale_lt?: string | null
  locale_lte?: string | null
  locale_gt?: string | null
  locale_gte?: string | null
  locale_contains?: string | null
  locale_not_contains?: string | null
  locale_starts_with?: string | null
  locale_not_starts_with?: string | null
  locale_ends_with?: string | null
  locale_not_ends_with?: string | null
  projects_every?: ProjectContentWhereInput | null
  projects_some?: ProjectContentWhereInput | null
  projects_none?: ProjectContentWhereInput | null
}

export interface ProjectLngWhereUniqueInput {
  id?: string | null
  country?: string | null
  locale?: string | null
}

export interface ProjectScalarWhereInput {
  AND?: ProjectScalarWhereInput[] | null
  OR?: ProjectScalarWhereInput[] | null
  NOT?: ProjectScalarWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  slug?: string | null
  slug_not?: string | null
  slug_in?: string[] | null
  slug_not_in?: string[] | null
  slug_lt?: string | null
  slug_lte?: string | null
  slug_gt?: string | null
  slug_gte?: string | null
  slug_contains?: string | null
  slug_not_contains?: string | null
  slug_starts_with?: string | null
  slug_not_starts_with?: string | null
  slug_ends_with?: string | null
  slug_not_ends_with?: string | null
}

export interface ProjectUpdateInput {
  slug?: string | null
  category?: ProjectCategoryUpdateOneRequiredWithoutProjectsInput | null
  album?: ProjectAlbumUpdateOneRequiredWithoutProjectInput | null
  contents?: ProjectContentUpdateManyWithoutProjectInput | null
}

export interface ProjectUpdateManyDataInput {
  slug?: string | null
}

export interface ProjectUpdateManyWithWhereNestedInput {
  where: ProjectScalarWhereInput
  data: ProjectUpdateManyDataInput
}

export interface ProjectUpdateManyWithoutCategoryInput {
  create?: ProjectCreateWithoutCategoryInput[] | null
  connect?: ProjectWhereUniqueInput[] | null
  disconnect?: ProjectWhereUniqueInput[] | null
  delete?: ProjectWhereUniqueInput[] | null
  update?: ProjectUpdateWithWhereUniqueWithoutCategoryInput[] | null
  updateMany?: ProjectUpdateManyWithWhereNestedInput[] | null
  deleteMany?: ProjectScalarWhereInput[] | null
  upsert?: ProjectUpsertWithWhereUniqueWithoutCategoryInput[] | null
}

export interface ProjectUpdateWithWhereUniqueWithoutCategoryInput {
  where: ProjectWhereUniqueInput
  data: ProjectUpdateWithoutCategoryDataInput
}

export interface ProjectUpdateWithoutCategoryDataInput {
  slug?: string | null
  album?: ProjectAlbumUpdateOneRequiredWithoutProjectInput | null
  contents?: ProjectContentUpdateManyWithoutProjectInput | null
}

export interface ProjectUpsertWithWhereUniqueWithoutCategoryInput {
  where: ProjectWhereUniqueInput
  update: ProjectUpdateWithoutCategoryDataInput
  create: ProjectCreateWithoutCategoryInput
}

export interface ProjectWhereInput {
  AND?: ProjectWhereInput[] | null
  OR?: ProjectWhereInput[] | null
  NOT?: ProjectWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  slug?: string | null
  slug_not?: string | null
  slug_in?: string[] | null
  slug_not_in?: string[] | null
  slug_lt?: string | null
  slug_lte?: string | null
  slug_gt?: string | null
  slug_gte?: string | null
  slug_contains?: string | null
  slug_not_contains?: string | null
  slug_starts_with?: string | null
  slug_not_starts_with?: string | null
  slug_ends_with?: string | null
  slug_not_ends_with?: string | null
  category?: ProjectCategoryWhereInput | null
  album?: ProjectAlbumWhereInput | null
  contents_every?: ProjectContentWhereInput | null
  contents_some?: ProjectContentWhereInput | null
  contents_none?: ProjectContentWhereInput | null
}

export interface ProjectWhereUniqueInput {
  id?: string | null
  slug?: string | null
}

export interface UserCreateOneWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutCommentsInput {
  role?: Role | null
  name: string
  email?: string | null
  password: string
  avatar?: AvatarCreateOneInput | null
  posts?: PostCreateManyWithoutAuthorInput | null
}

export interface UserCreateWithoutPostsInput {
  role?: Role | null
  name: string
  email?: string | null
  password: string
  avatar?: AvatarCreateOneInput | null
  comments?: CommentCreateManyWithoutAuthorInput | null
}

export interface UserUpdateInput {
  role?: Role | null
  name?: string | null
  email?: string | null
  password?: string | null
  avatar?: AvatarUpdateOneInput | null
  posts?: PostUpdateManyWithoutAuthorInput | null
  comments?: CommentUpdateManyWithoutAuthorInput | null
}

export interface UserUpdateOneRequiredWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutCommentsDataInput | null
  upsert?: UserUpsertWithoutCommentsInput | null
}

export interface UserUpdateOneRequiredWithoutPostsInput {
  create?: UserCreateWithoutPostsInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutPostsDataInput | null
  upsert?: UserUpsertWithoutPostsInput | null
}

export interface UserUpdateWithoutCommentsDataInput {
  role?: Role | null
  name?: string | null
  email?: string | null
  password?: string | null
  avatar?: AvatarUpdateOneInput | null
  posts?: PostUpdateManyWithoutAuthorInput | null
}

export interface UserUpdateWithoutPostsDataInput {
  role?: Role | null
  name?: string | null
  email?: string | null
  password?: string | null
  avatar?: AvatarUpdateOneInput | null
  comments?: CommentUpdateManyWithoutAuthorInput | null
}

export interface UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput
  create: UserCreateWithoutCommentsInput
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | null
  OR?: UserWhereInput[] | null
  NOT?: UserWhereInput[] | null
  id?: string | null
  id_not?: string | null
  id_in?: string[] | null
  id_not_in?: string[] | null
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  createdAt?: any | null
  createdAt_not?: any | null
  createdAt_in?: any[] | null
  createdAt_not_in?: any[] | null
  createdAt_lt?: any | null
  createdAt_lte?: any | null
  createdAt_gt?: any | null
  createdAt_gte?: any | null
  updatedAt?: any | null
  updatedAt_not?: any | null
  updatedAt_in?: any[] | null
  updatedAt_not_in?: any[] | null
  updatedAt_lt?: any | null
  updatedAt_lte?: any | null
  updatedAt_gt?: any | null
  updatedAt_gte?: any | null
  role?: Role | null
  role_not?: Role | null
  role_in?: Role[] | null
  role_not_in?: Role[] | null
  name?: string | null
  name_not?: string | null
  name_in?: string[] | null
  name_not_in?: string[] | null
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  email?: string | null
  email_not?: string | null
  email_in?: string[] | null
  email_not_in?: string[] | null
  email_lt?: string | null
  email_lte?: string | null
  email_gt?: string | null
  email_gte?: string | null
  email_contains?: string | null
  email_not_contains?: string | null
  email_starts_with?: string | null
  email_not_starts_with?: string | null
  email_ends_with?: string | null
  email_not_ends_with?: string | null
  password?: string | null
  password_not?: string | null
  password_in?: string[] | null
  password_not_in?: string[] | null
  password_lt?: string | null
  password_lte?: string | null
  password_gt?: string | null
  password_gte?: string | null
  password_contains?: string | null
  password_not_contains?: string | null
  password_starts_with?: string | null
  password_not_starts_with?: string | null
  password_ends_with?: string | null
  password_not_ends_with?: string | null
  avatar?: AvatarWhereInput | null
  posts_every?: PostWhereInput | null
  posts_some?: PostWhereInput | null
  posts_none?: PostWhereInput | null
  comments_every?: CommentWhereInput | null
  comments_some?: CommentWhereInput | null
  comments_none?: CommentWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: string | null
  email?: string | null
}

//==============================================================
// END Enums and Input Objects
//==============================================================
