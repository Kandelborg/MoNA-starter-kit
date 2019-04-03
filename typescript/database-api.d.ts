/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_me {
  __typename: 'User'
  email: string | null
  id: any
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

export interface PostCreate_postCreate_author_profile_avatar {
  __typename: 'Avatar'
  id: any
  src: string | null
  publicId: string | null
}

export interface PostCreate_postCreate_author_profile {
  __typename: 'Profile'
  avatar: PostCreate_postCreate_author_profile_avatar
}

export interface PostCreate_postCreate_author {
  __typename: 'User'
  id: any
  name: string
  role: Role
  profile: PostCreate_postCreate_author_profile | null
}

export interface PostCreate_postCreate_tags_contents {
  __typename: 'PostTagContent'
  title: string
}

export interface PostCreate_postCreate_tags {
  __typename: 'PostTag'
  contents: PostCreate_postCreate_tags_contents
  color: string
}

export interface PostCreate_postCreate_contents_language {
  __typename: 'PostLng'
  country: string
}

export interface PostCreate_postCreate_contents {
  __typename: 'PostContent'
  language: PostCreate_postCreate_contents_language
  title: string
  text: string
  imageAlt: string
  metaTitle: string | null
  metaDescription: string | null
}

export interface PostCreate_postCreate {
  __typename: 'Post'
  id: any
  author: PostCreate_postCreate_author
  slug: string
  imageSrc: string
  tags: PostCreate_postCreate_tags[] | null
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
  id: any
}

export interface postDelete {
  postDelete: postDelete_postDelete | null
}

export interface postDeleteVariables {
  where: PostWhereUniqueInput
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PostUpdate
// ====================================================

export interface PostUpdate_postUpdate_author_profile_avatar {
  __typename: 'Avatar'
  id: any
  src: string | null
  publicId: string | null
}

export interface PostUpdate_postUpdate_author_profile {
  __typename: 'Profile'
  avatar: PostUpdate_postUpdate_author_profile_avatar
}

export interface PostUpdate_postUpdate_author {
  __typename: 'User'
  id: any
  name: string
  role: Role
  profile: PostUpdate_postUpdate_author_profile | null
}

export interface PostUpdate_postUpdate_tags_contents {
  __typename: 'PostTagContent'
  title: string
}

export interface PostUpdate_postUpdate_tags {
  __typename: 'PostTag'
  contents: PostUpdate_postUpdate_tags_contents
  color: string
}

export interface PostUpdate_postUpdate_contents_language {
  __typename: 'PostLng'
  country: string
}

export interface PostUpdate_postUpdate_contents {
  __typename: 'PostContent'
  id: any
  language: PostUpdate_postUpdate_contents_language
  title: string
  text: string
  imageAlt: string
  metaTitle: string | null
  metaDescription: string | null
}

export interface PostUpdate_postUpdate {
  __typename: 'Post'
  id: any
  author: PostUpdate_postUpdate_author
  slug: string
  imageSrc: string
  tags: PostUpdate_postUpdate_tags[] | null
  contents: PostUpdate_postUpdate_contents[] | null
  isPublished: boolean
}

export interface PostUpdate {
  postUpdate: PostUpdate_postUpdate | null
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
  imageAlt: string
  metaTitle: string | null
  metaDescription: string | null
}

export interface projectCategoryCreate_projectCategoryCreate {
  __typename: 'ProjectCategory'
  id: any
  slug: string
  image: string
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
  id: any
}

export interface projectCategoryDelete {
  projectCategoryDelete: projectCategoryDelete_projectCategoryDelete | null
}

export interface projectCategoryDeleteVariables {
  where: ProjectCategoryWhereUniqueInput
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
  imageAlt: string
  metaTitle: string | null
  metaDescription: string | null
}

export interface ProjectCategoryUpdate_projectCategoryUpdate {
  __typename: 'ProjectCategory'
  id: any
  slug: string
  image: string
  contents: ProjectCategoryUpdate_projectCategoryUpdate_contents[] | null
}

export interface ProjectCategoryUpdate {
  projectCategoryUpdate: ProjectCategoryUpdate_projectCategoryUpdate | null
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

export interface ProjectCreate_projectCreate_tags_contents {
  __typename: 'ProjectTagContent'
  title: string | null
}

export interface ProjectCreate_projectCreate_tags {
  __typename: 'ProjectTag'
  contents: ProjectCreate_projectCreate_tags_contents
  color: string | null
}

export interface ProjectCreate_projectCreate_contents_language {
  __typename: 'ProjectLng'
  country: string
}

export interface ProjectCreate_projectCreate_contents {
  __typename: 'ProjectContent'
  language: ProjectCreate_projectCreate_contents_language
  title: string
  text: string
  metaTitle: string | null
  metaDescription: string | null
  isActive: boolean
}

export interface ProjectCreate_projectCreate {
  __typename: 'Project'
  id: any
  slug: string
  album: ProjectCreate_projectCreate_album
  tags: ProjectCreate_projectCreate_tags[] | null
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
  id: any
}

export interface ProjectDelete {
  projectDelete: ProjectDelete_projectDelete | null
}

export interface ProjectDeleteVariables {
  where: ProjectWhereUniqueInput
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

export interface ProjectUpdate_projectUpdate_tags_contents {
  __typename: 'ProjectTagContent'
  title: string | null
}

export interface ProjectUpdate_projectUpdate_tags {
  __typename: 'ProjectTag'
  contents: ProjectUpdate_projectUpdate_tags_contents
  color: string | null
}

export interface ProjectUpdate_projectUpdate_contents_language {
  __typename: 'ProjectLng'
  country: string
}

export interface ProjectUpdate_projectUpdate_contents {
  __typename: 'ProjectContent'
  language: ProjectUpdate_projectUpdate_contents_language
  title: string
  text: string
  metaTitle: string | null
  metaDescription: string | null
  isActive: boolean
}

export interface ProjectUpdate_projectUpdate {
  __typename: 'Project'
  id: any
  slug: string
  album: ProjectUpdate_projectUpdate_album
  tags: ProjectUpdate_projectUpdate_tags[] | null
  contents: ProjectUpdate_projectUpdate_contents[] | null
}

export interface ProjectUpdate {
  projectUpdate: ProjectUpdate_projectUpdate | null
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
  id: any
  name: string
  email: string | null
}

export interface UserCreate_userCreate {
  __typename: 'AuthPayload'
  user: UserCreate_userCreate_user
}

export interface UserCreate_userLogin_user {
  __typename: 'User'
  id: any
  name: string
  email: string | null
}

export interface UserCreate_userLogin {
  __typename: 'AuthPayload'
  token: string
  user: UserCreate_userLogin_user
}

export interface UserCreate {
  userCreate: UserCreate_userCreate | null
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
  id: any
}

export interface UserDelete {
  userDelete: UserDelete_userDelete | null
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
  id: any
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

export interface UserUpdate_userUpdate_profile_avatar {
  __typename: 'Avatar'
  id: any
  publicId: string | null
  src: string | null
}

export interface UserUpdate_userUpdate_profile {
  __typename: 'Profile'
  avatar: UserUpdate_userUpdate_profile_avatar
}

export interface UserUpdate_userUpdate {
  __typename: 'User'
  id: any
  name: string
  email: string | null
  profile: UserUpdate_userUpdate_profile | null
}

export interface UserUpdate {
  userUpdate: UserUpdate_userUpdate | null
}

export interface UserUpdateVariables {
  user: UserUpdateInput
  where: UserWhereUniqueInput
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostBySlug
// ====================================================

export interface PostBySlug_postBySlug_author_profile_avatar {
  __typename: 'Avatar'
  id: any
  src: string | null
  publicId: string | null
}

export interface PostBySlug_postBySlug_author_profile {
  __typename: 'Profile'
  avatar: PostBySlug_postBySlug_author_profile_avatar
}

export interface PostBySlug_postBySlug_author {
  __typename: 'User'
  id: any
  name: string
  role: Role
  profile: PostBySlug_postBySlug_author_profile | null
}

export interface PostBySlug_postBySlug_tags_contents {
  __typename: 'PostTagContent'
  title: string
}

export interface PostBySlug_postBySlug_tags {
  __typename: 'PostTag'
  contents: PostBySlug_postBySlug_tags_contents
  color: string
}

export interface PostBySlug_postBySlug_contents_language {
  __typename: 'PostLng'
  country: string
}

export interface PostBySlug_postBySlug_contents {
  __typename: 'PostContent'
  id: any
  language: PostBySlug_postBySlug_contents_language
  title: string
  text: string
  imageAlt: string
  metaTitle: string | null
  metaDescription: string | null
}

export interface PostBySlug_postBySlug {
  __typename: 'Post'
  id: any
  createdAt: any
  updatedAt: any
  slug: string
  author: PostBySlug_postBySlug_author
  imageSrc: string
  isPublished: boolean
  tags: PostBySlug_postBySlug_tags[] | null
  contents: PostBySlug_postBySlug_contents[] | null
}

export interface PostBySlug {
  postBySlug: PostBySlug_postBySlug | null
}

export interface PostBySlugVariables {
  slug: string
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostsByIsPublished
// ====================================================

export interface PostsByIsPublished_postsByIsPublished_author {
  __typename: 'User'
  id: any
  name: string
  role: Role
}

export interface PostsByIsPublished_postsByIsPublished_tags_contents {
  __typename: 'PostTagContent'
  title: string
}

export interface PostsByIsPublished_postsByIsPublished_tags {
  __typename: 'PostTag'
  contents: PostsByIsPublished_postsByIsPublished_tags_contents
  color: string
}

export interface PostsByIsPublished_postsByIsPublished_contents_language {
  __typename: 'PostLng'
  country: string
}

export interface PostsByIsPublished_postsByIsPublished_contents {
  __typename: 'PostContent'
  id: any
  language: PostsByIsPublished_postsByIsPublished_contents_language
  title: string
  text: string
  imageAlt: string
  metaTitle: string | null
  metaDescription: string | null
}

export interface PostsByIsPublished_postsByIsPublished {
  __typename: 'Post'
  id: any
  createdAt: any
  updatedAt: any
  slug: string
  author: PostsByIsPublished_postsByIsPublished_author
  imageSrc: string
  isPublished: boolean
  tags: PostsByIsPublished_postsByIsPublished_tags[] | null
  contents: PostsByIsPublished_postsByIsPublished_contents[] | null
}

export interface PostsByIsPublished {
  postsByIsPublished: PostsByIsPublished_postsByIsPublished[] | null
}

export interface PostsByIsPublishedVariables {
  isPublished: boolean
  orderBy?: PostOrderByInput | null
  first?: number | null
  last?: number | null
  skip?: number | null
  after?: string | null
  before?: string | null
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
  id: any
  language: ProjectCategoriesAll_projectCategoriesAll_contents_language
  title: string
  imageAlt: string
  metaTitle: string | null
  metaDescription: string | null
}

export interface ProjectCategoriesAll_projectCategoriesAll_projects_tags_contents {
  __typename: 'ProjectTagContent'
  title: string | null
}

export interface ProjectCategoriesAll_projectCategoriesAll_projects_tags {
  __typename: 'ProjectTag'
  contents: ProjectCategoriesAll_projectCategoriesAll_projects_tags_contents
  color: string | null
}

export interface ProjectCategoriesAll_projectCategoriesAll_projects_contents_language {
  __typename: 'ProjectLng'
  country: string
}

export interface ProjectCategoriesAll_projectCategoriesAll_projects_contents {
  __typename: 'ProjectContent'
  id: any
  language: ProjectCategoriesAll_projectCategoriesAll_projects_contents_language
  title: string
  text: string
  metaTitle: string | null
  metaDescription: string | null
  isActive: boolean
}

export interface ProjectCategoriesAll_projectCategoriesAll_projects {
  __typename: 'Project'
  slug: string
  tags: ProjectCategoriesAll_projectCategoriesAll_projects_tags[] | null
  contents: ProjectCategoriesAll_projectCategoriesAll_projects_contents[] | null
}

export interface ProjectCategoriesAll_projectCategoriesAll {
  __typename: 'ProjectCategory'
  id: any
  slug: string
  image: string
  contents: ProjectCategoriesAll_projectCategoriesAll_contents[] | null
  projects: ProjectCategoriesAll_projectCategoriesAll_projects[] | null
}

export interface ProjectCategoriesAll {
  projectCategoriesAll: ProjectCategoriesAll_projectCategoriesAll[]
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
  id: any
  language: ProjectCategoryById_projectCategoryById_contents_language
  title: string
  imageAlt: string
  metaTitle: string | null
  metaDescription: string | null
}

export interface ProjectCategoryById_projectCategoryById_projects_tags_contents {
  __typename: 'ProjectTagContent'
  title: string | null
}

export interface ProjectCategoryById_projectCategoryById_projects_tags {
  __typename: 'ProjectTag'
  contents: ProjectCategoryById_projectCategoryById_projects_tags_contents
  color: string | null
}

export interface ProjectCategoryById_projectCategoryById_projects_contents_language {
  __typename: 'ProjectLng'
  country: string
}

export interface ProjectCategoryById_projectCategoryById_projects_contents {
  __typename: 'ProjectContent'
  id: any
  language: ProjectCategoryById_projectCategoryById_projects_contents_language
  title: string
  text: string
  metaTitle: string | null
  metaDescription: string | null
  isActive: boolean
}

export interface ProjectCategoryById_projectCategoryById_projects {
  __typename: 'Project'
  slug: string
  tags: ProjectCategoryById_projectCategoryById_projects_tags[] | null
  contents: ProjectCategoryById_projectCategoryById_projects_contents[] | null
}

export interface ProjectCategoryById_projectCategoryById {
  __typename: 'ProjectCategory'
  id: any
  slug: string
  image: string
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
  id: any
  language: ProjectCategoryBySlug_projectCategoryBySlug_contents_language
  title: string
  imageAlt: string
  metaTitle: string | null
  metaDescription: string | null
}

export interface ProjectCategoryBySlug_projectCategoryBySlug_projects_tags_contents {
  __typename: 'ProjectTagContent'
  title: string | null
}

export interface ProjectCategoryBySlug_projectCategoryBySlug_projects_tags {
  __typename: 'ProjectTag'
  contents: ProjectCategoryBySlug_projectCategoryBySlug_projects_tags_contents
  color: string | null
}

export interface ProjectCategoryBySlug_projectCategoryBySlug_projects_contents_language {
  __typename: 'ProjectLng'
  country: string
}

export interface ProjectCategoryBySlug_projectCategoryBySlug_projects_contents {
  __typename: 'ProjectContent'
  id: any
  language: ProjectCategoryBySlug_projectCategoryBySlug_projects_contents_language
  title: string
  text: string
  metaTitle: string | null
  metaDescription: string | null
  isActive: boolean
}

export interface ProjectCategoryBySlug_projectCategoryBySlug_projects {
  __typename: 'Project'
  slug: string
  tags: ProjectCategoryBySlug_projectCategoryBySlug_projects_tags[] | null
  contents:
    | ProjectCategoryBySlug_projectCategoryBySlug_projects_contents[]
    | null
}

export interface ProjectCategoryBySlug_projectCategoryBySlug {
  __typename: 'ProjectCategory'
  id: any
  slug: string
  image: string
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

export interface ProjectById_projectById_tags_contents {
  __typename: 'ProjectTagContent'
  title: string | null
}

export interface ProjectById_projectById_tags {
  __typename: 'ProjectTag'
  contents: ProjectById_projectById_tags_contents
  color: string | null
}

export interface ProjectById_projectById_contents_language {
  __typename: 'ProjectLng'
  country: string
}

export interface ProjectById_projectById_contents {
  __typename: 'ProjectContent'
  id: any
  language: ProjectById_projectById_contents_language
  title: string
  text: string
  metaTitle: string | null
  metaDescription: string | null
  isActive: boolean
}

export interface ProjectById_projectById {
  __typename: 'Project'
  id: any
  tags: ProjectById_projectById_tags[] | null
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

export interface ProjectBySlug_projectBySlug_tags_contents {
  __typename: 'ProjectTagContent'
  title: string | null
}

export interface ProjectBySlug_projectBySlug_tags {
  __typename: 'ProjectTag'
  contents: ProjectBySlug_projectBySlug_tags_contents
  color: string | null
}

export interface ProjectBySlug_projectBySlug_contents_language {
  __typename: 'ProjectLng'
  country: string
}

export interface ProjectBySlug_projectBySlug_contents {
  __typename: 'ProjectContent'
  id: any
  language: ProjectBySlug_projectBySlug_contents_language
  title: string
  text: string
  metaTitle: string | null
  metaDescription: string | null
  isActive: boolean
}

export interface ProjectBySlug_projectBySlug {
  __typename: 'Project'
  slug: string
  tags: ProjectBySlug_projectBySlug_tags[] | null
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
// GraphQL query operation: Projects
// ====================================================

export interface Projects_projects_tags_contents {
  __typename: 'ProjectTagContent'
  title: string | null
}

export interface Projects_projects_tags {
  __typename: 'ProjectTag'
  contents: Projects_projects_tags_contents
  color: string | null
}

export interface Projects_projects_contents_language {
  __typename: 'ProjectLng'
  country: string
}

export interface Projects_projects_contents {
  __typename: 'ProjectContent'
  id: any
  language: Projects_projects_contents_language
  title: string
  text: string
  metaTitle: string | null
  metaDescription: string | null
  isActive: boolean
}

export interface Projects_projects {
  __typename: 'Project'
  id: any
  tags: Projects_projects_tags[] | null
  contents: Projects_projects_contents[] | null
}

export interface Projects {
  projects: Projects_projects[]
}

export interface ProjectsVariables {
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

export interface Me_me_profile_avatar {
  __typename: 'Avatar'
  id: any
  publicId: string | null
  src: string | null
}

export interface Me_me_profile {
  __typename: 'Profile'
  bio: string
  avatar: Me_me_profile_avatar
}

export interface Me_me {
  __typename: 'User'
  id: any
  profile: Me_me_profile | null
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
  likes_ASC = 'likes_ASC',
  likes_DESC = 'likes_DESC',
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
  image_ASC = 'image_ASC',
  image_DESC = 'image_DESC',
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
  publicId?: string | null
  src?: string | null
}

export interface AvatarCreateOneInput {
  create?: AvatarCreateInput | null
  connect?: AvatarWhereUniqueInput | null
}

export interface AvatarUpdateDataInput {
  publicId?: string | null
  src?: string | null
}

export interface AvatarUpdateOneRequiredInput {
  create?: AvatarCreateInput | null
  update?: AvatarUpdateDataInput | null
  upsert?: AvatarUpsertNestedInput | null
  connect?: AvatarWhereUniqueInput | null
}

export interface AvatarUpsertNestedInput {
  update: AvatarUpdateDataInput
  create: AvatarCreateInput
}

export interface AvatarWhereUniqueInput {
  id?: any | null
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
  id?: any | null
  id_not?: any | null
  id_in?: any[] | null
  id_not_in?: any[] | null
  id_lt?: any | null
  id_lte?: any | null
  id_gt?: any | null
  id_gte?: any | null
  id_contains?: any | null
  id_not_contains?: any | null
  id_starts_with?: any | null
  id_not_starts_with?: any | null
  id_ends_with?: any | null
  id_not_ends_with?: any | null
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
  AND?: CommentScalarWhereInput[] | null
  OR?: CommentScalarWhereInput[] | null
  NOT?: CommentScalarWhereInput[] | null
}

export interface CommentUpdateManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[] | null
  delete?: CommentWhereUniqueInput[] | null
  connect?: CommentWhereUniqueInput[] | null
  set?: CommentWhereUniqueInput[] | null
  disconnect?: CommentWhereUniqueInput[] | null
  update?: CommentUpdateWithWhereUniqueWithoutAuthorInput[] | null
  upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput[] | null
  deleteMany?: CommentScalarWhereInput[] | null
}

export interface CommentUpdateManyWithoutPostInput {
  create?: CommentCreateWithoutPostInput[] | null
  delete?: CommentWhereUniqueInput[] | null
  connect?: CommentWhereUniqueInput[] | null
  set?: CommentWhereUniqueInput[] | null
  disconnect?: CommentWhereUniqueInput[] | null
  update?: CommentUpdateWithWhereUniqueWithoutPostInput[] | null
  upsert?: CommentUpsertWithWhereUniqueWithoutPostInput[] | null
  deleteMany?: CommentScalarWhereInput[] | null
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

export interface CommentWhereUniqueInput {
  id?: any | null
}

export interface PostContentCreateManyWithoutPostInput {
  create?: PostContentCreateWithoutPostInput[] | null
  connect?: PostContentWhereUniqueInput[] | null
}

export interface PostContentCreateWithoutPostInput {
  language: PostLngCreateOneWithoutPostsInput
  title: string
  text: string
  metaTitle?: string | null
  metaDescription?: string | null
  imageAlt: string
}

export interface PostContentScalarWhereInput {
  id?: any | null
  id_not?: any | null
  id_in?: any[] | null
  id_not_in?: any[] | null
  id_lt?: any | null
  id_lte?: any | null
  id_gt?: any | null
  id_gte?: any | null
  id_contains?: any | null
  id_not_contains?: any | null
  id_starts_with?: any | null
  id_not_starts_with?: any | null
  id_ends_with?: any | null
  id_not_ends_with?: any | null
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
  text?: string | null
  text_not?: string | null
  text_in?: string[] | null
  text_not_in?: string[] | null
  text_lt?: string | null
  text_lte?: string | null
  text_gt?: string | null
  text_gte?: string | null
  text_contains?: string | null
  text_not_contains?: string | null
  text_starts_with?: string | null
  text_not_starts_with?: string | null
  text_ends_with?: string | null
  text_not_ends_with?: string | null
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
  AND?: PostContentScalarWhereInput[] | null
  OR?: PostContentScalarWhereInput[] | null
  NOT?: PostContentScalarWhereInput[] | null
}

export interface PostContentUpdateManyDataInput {
  title?: string | null
  text?: string | null
  metaTitle?: string | null
  metaDescription?: string | null
  imageAlt?: string | null
}

export interface PostContentUpdateManyWithWhereNestedInput {
  where: PostContentScalarWhereInput
  data: PostContentUpdateManyDataInput
}

export interface PostContentUpdateManyWithoutPostInput {
  create?: PostContentCreateWithoutPostInput[] | null
  delete?: PostContentWhereUniqueInput[] | null
  connect?: PostContentWhereUniqueInput[] | null
  set?: PostContentWhereUniqueInput[] | null
  disconnect?: PostContentWhereUniqueInput[] | null
  update?: PostContentUpdateWithWhereUniqueWithoutPostInput[] | null
  upsert?: PostContentUpsertWithWhereUniqueWithoutPostInput[] | null
  deleteMany?: PostContentScalarWhereInput[] | null
  updateMany?: PostContentUpdateManyWithWhereNestedInput[] | null
}

export interface PostContentUpdateWithWhereUniqueWithoutPostInput {
  where: PostContentWhereUniqueInput
  data: PostContentUpdateWithoutPostDataInput
}

export interface PostContentUpdateWithoutPostDataInput {
  language?: PostLngUpdateOneRequiredWithoutPostsInput | null
  title?: string | null
  text?: string | null
  metaTitle?: string | null
  metaDescription?: string | null
  imageAlt?: string | null
}

export interface PostContentUpsertWithWhereUniqueWithoutPostInput {
  where: PostContentWhereUniqueInput
  update: PostContentUpdateWithoutPostDataInput
  create: PostContentCreateWithoutPostInput
}

export interface PostContentWhereUniqueInput {
  id?: any | null
}

export interface PostCreateInput {
  author: UserCreateOneWithoutPostsInput
  slug: string
  isPublished?: boolean | null
  imageSrc: string
  contents?: PostContentCreateManyWithoutPostInput | null
  tags?: PostTagCreateManyInput | null
  comments?: CommentCreateManyWithoutPostInput | null
  likes?: number | null
  likedBy?: UserCreateManyWithoutPostLikesInput | null
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | null
  connect?: PostWhereUniqueInput[] | null
}

export interface PostCreateManyWithoutLikedByInput {
  create?: PostCreateWithoutLikedByInput[] | null
  connect?: PostWhereUniqueInput[] | null
}

export interface PostCreateOneWithoutCommentsInput {
  create?: PostCreateWithoutCommentsInput | null
  connect?: PostWhereUniqueInput | null
}

export interface PostCreateWithoutAuthorInput {
  slug: string
  isPublished?: boolean | null
  imageSrc: string
  contents?: PostContentCreateManyWithoutPostInput | null
  tags?: PostTagCreateManyInput | null
  comments?: CommentCreateManyWithoutPostInput | null
  likes?: number | null
  likedBy?: UserCreateManyWithoutPostLikesInput | null
}

export interface PostCreateWithoutCommentsInput {
  author: UserCreateOneWithoutPostsInput
  slug: string
  isPublished?: boolean | null
  imageSrc: string
  contents?: PostContentCreateManyWithoutPostInput | null
  tags?: PostTagCreateManyInput | null
  likes?: number | null
  likedBy?: UserCreateManyWithoutPostLikesInput | null
}

export interface PostCreateWithoutLikedByInput {
  author: UserCreateOneWithoutPostsInput
  slug: string
  isPublished?: boolean | null
  imageSrc: string
  contents?: PostContentCreateManyWithoutPostInput | null
  tags?: PostTagCreateManyInput | null
  comments?: CommentCreateManyWithoutPostInput | null
  likes?: number | null
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
  update?: PostLngUpdateWithoutPostsDataInput | null
  upsert?: PostLngUpsertWithoutPostsInput | null
  connect?: PostLngWhereUniqueInput | null
}

export interface PostLngUpdateWithoutPostsDataInput {
  country?: string | null
  locale?: string | null
}

export interface PostLngUpsertWithoutPostsInput {
  update: PostLngUpdateWithoutPostsDataInput
  create: PostLngCreateWithoutPostsInput
}

export interface PostLngWhereUniqueInput {
  id?: any | null
  country?: string | null
  locale?: string | null
}

export interface PostScalarWhereInput {
  id?: any | null
  id_not?: any | null
  id_in?: any[] | null
  id_not_in?: any[] | null
  id_lt?: any | null
  id_lte?: any | null
  id_gt?: any | null
  id_gte?: any | null
  id_contains?: any | null
  id_not_contains?: any | null
  id_starts_with?: any | null
  id_not_starts_with?: any | null
  id_ends_with?: any | null
  id_not_ends_with?: any | null
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
  isPublished?: boolean | null
  isPublished_not?: boolean | null
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
  likes?: number | null
  likes_not?: number | null
  likes_in?: number[] | null
  likes_not_in?: number[] | null
  likes_lt?: number | null
  likes_lte?: number | null
  likes_gt?: number | null
  likes_gte?: number | null
  AND?: PostScalarWhereInput[] | null
  OR?: PostScalarWhereInput[] | null
  NOT?: PostScalarWhereInput[] | null
}

export interface PostTagContentCreateOneWithoutTagInput {
  create?: PostTagContentCreateWithoutTagInput | null
  connect?: PostTagContentWhereUniqueInput | null
}

export interface PostTagContentCreateWithoutTagInput {
  title: string
}

export interface PostTagContentUpdateOneRequiredWithoutTagInput {
  create?: PostTagContentCreateWithoutTagInput | null
  update?: PostTagContentUpdateWithoutTagDataInput | null
  upsert?: PostTagContentUpsertWithoutTagInput | null
  connect?: PostTagContentWhereUniqueInput | null
}

export interface PostTagContentUpdateWithoutTagDataInput {
  title?: string | null
}

export interface PostTagContentUpsertWithoutTagInput {
  update: PostTagContentUpdateWithoutTagDataInput
  create: PostTagContentCreateWithoutTagInput
}

export interface PostTagContentWhereUniqueInput {
  id?: any | null
}

export interface PostTagCreateInput {
  color: string
  language: PostTagLngCreateOneWithoutTagsInput
  contents: PostTagContentCreateOneWithoutTagInput
}

export interface PostTagCreateManyInput {
  create?: PostTagCreateInput[] | null
  connect?: PostTagWhereUniqueInput[] | null
}

export interface PostTagLngCreateOneWithoutTagsInput {
  create?: PostTagLngCreateWithoutTagsInput | null
  connect?: PostTagLngWhereUniqueInput | null
}

export interface PostTagLngCreateWithoutTagsInput {
  country: string
  locale: string
}

export interface PostTagLngUpdateOneRequiredWithoutTagsInput {
  create?: PostTagLngCreateWithoutTagsInput | null
  update?: PostTagLngUpdateWithoutTagsDataInput | null
  upsert?: PostTagLngUpsertWithoutTagsInput | null
  connect?: PostTagLngWhereUniqueInput | null
}

export interface PostTagLngUpdateWithoutTagsDataInput {
  country?: string | null
  locale?: string | null
}

export interface PostTagLngUpsertWithoutTagsInput {
  update: PostTagLngUpdateWithoutTagsDataInput
  create: PostTagLngCreateWithoutTagsInput
}

export interface PostTagLngWhereUniqueInput {
  id?: any | null
}

export interface PostTagScalarWhereInput {
  id?: any | null
  id_not?: any | null
  id_in?: any[] | null
  id_not_in?: any[] | null
  id_lt?: any | null
  id_lte?: any | null
  id_gt?: any | null
  id_gte?: any | null
  id_contains?: any | null
  id_not_contains?: any | null
  id_starts_with?: any | null
  id_not_starts_with?: any | null
  id_ends_with?: any | null
  id_not_ends_with?: any | null
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
  color?: string | null
  color_not?: string | null
  color_in?: string[] | null
  color_not_in?: string[] | null
  color_lt?: string | null
  color_lte?: string | null
  color_gt?: string | null
  color_gte?: string | null
  color_contains?: string | null
  color_not_contains?: string | null
  color_starts_with?: string | null
  color_not_starts_with?: string | null
  color_ends_with?: string | null
  color_not_ends_with?: string | null
  AND?: PostTagScalarWhereInput[] | null
  OR?: PostTagScalarWhereInput[] | null
  NOT?: PostTagScalarWhereInput[] | null
}

export interface PostTagUpdateDataInput {
  color?: string | null
  language?: PostTagLngUpdateOneRequiredWithoutTagsInput | null
  contents?: PostTagContentUpdateOneRequiredWithoutTagInput | null
}

export interface PostTagUpdateManyDataInput {
  color?: string | null
}

export interface PostTagUpdateManyInput {
  create?: PostTagCreateInput[] | null
  update?: PostTagUpdateWithWhereUniqueNestedInput[] | null
  upsert?: PostTagUpsertWithWhereUniqueNestedInput[] | null
  delete?: PostTagWhereUniqueInput[] | null
  connect?: PostTagWhereUniqueInput[] | null
  set?: PostTagWhereUniqueInput[] | null
  disconnect?: PostTagWhereUniqueInput[] | null
  deleteMany?: PostTagScalarWhereInput[] | null
  updateMany?: PostTagUpdateManyWithWhereNestedInput[] | null
}

export interface PostTagUpdateManyWithWhereNestedInput {
  where: PostTagScalarWhereInput
  data: PostTagUpdateManyDataInput
}

export interface PostTagUpdateWithWhereUniqueNestedInput {
  where: PostTagWhereUniqueInput
  data: PostTagUpdateDataInput
}

export interface PostTagUpsertWithWhereUniqueNestedInput {
  where: PostTagWhereUniqueInput
  update: PostTagUpdateDataInput
  create: PostTagCreateInput
}

export interface PostTagWhereUniqueInput {
  id?: any | null
}

export interface PostUpdateInput {
  author?: UserUpdateOneRequiredWithoutPostsInput | null
  slug?: string | null
  isPublished?: boolean | null
  imageSrc?: string | null
  contents?: PostContentUpdateManyWithoutPostInput | null
  tags?: PostTagUpdateManyInput | null
  comments?: CommentUpdateManyWithoutPostInput | null
  likes?: number | null
  likedBy?: UserUpdateManyWithoutPostLikesInput | null
}

export interface PostUpdateManyDataInput {
  slug?: string | null
  isPublished?: boolean | null
  imageSrc?: string | null
  likes?: number | null
}

export interface PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput
  data: PostUpdateManyDataInput
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | null
  delete?: PostWhereUniqueInput[] | null
  connect?: PostWhereUniqueInput[] | null
  set?: PostWhereUniqueInput[] | null
  disconnect?: PostWhereUniqueInput[] | null
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | null
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | null
  deleteMany?: PostScalarWhereInput[] | null
  updateMany?: PostUpdateManyWithWhereNestedInput[] | null
}

export interface PostUpdateManyWithoutLikedByInput {
  create?: PostCreateWithoutLikedByInput[] | null
  delete?: PostWhereUniqueInput[] | null
  connect?: PostWhereUniqueInput[] | null
  set?: PostWhereUniqueInput[] | null
  disconnect?: PostWhereUniqueInput[] | null
  update?: PostUpdateWithWhereUniqueWithoutLikedByInput[] | null
  upsert?: PostUpsertWithWhereUniqueWithoutLikedByInput[] | null
  deleteMany?: PostScalarWhereInput[] | null
  updateMany?: PostUpdateManyWithWhereNestedInput[] | null
}

export interface PostUpdateOneRequiredWithoutCommentsInput {
  create?: PostCreateWithoutCommentsInput | null
  update?: PostUpdateWithoutCommentsDataInput | null
  upsert?: PostUpsertWithoutCommentsInput | null
  connect?: PostWhereUniqueInput | null
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutAuthorDataInput
}

export interface PostUpdateWithWhereUniqueWithoutLikedByInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutLikedByDataInput
}

export interface PostUpdateWithoutAuthorDataInput {
  slug?: string | null
  isPublished?: boolean | null
  imageSrc?: string | null
  contents?: PostContentUpdateManyWithoutPostInput | null
  tags?: PostTagUpdateManyInput | null
  comments?: CommentUpdateManyWithoutPostInput | null
  likes?: number | null
  likedBy?: UserUpdateManyWithoutPostLikesInput | null
}

export interface PostUpdateWithoutCommentsDataInput {
  author?: UserUpdateOneRequiredWithoutPostsInput | null
  slug?: string | null
  isPublished?: boolean | null
  imageSrc?: string | null
  contents?: PostContentUpdateManyWithoutPostInput | null
  tags?: PostTagUpdateManyInput | null
  likes?: number | null
  likedBy?: UserUpdateManyWithoutPostLikesInput | null
}

export interface PostUpdateWithoutLikedByDataInput {
  author?: UserUpdateOneRequiredWithoutPostsInput | null
  slug?: string | null
  isPublished?: boolean | null
  imageSrc?: string | null
  contents?: PostContentUpdateManyWithoutPostInput | null
  tags?: PostTagUpdateManyInput | null
  comments?: CommentUpdateManyWithoutPostInput | null
  likes?: number | null
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutAuthorDataInput
  create: PostCreateWithoutAuthorInput
}

export interface PostUpsertWithWhereUniqueWithoutLikedByInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutLikedByDataInput
  create: PostCreateWithoutLikedByInput
}

export interface PostUpsertWithoutCommentsInput {
  update: PostUpdateWithoutCommentsDataInput
  create: PostCreateWithoutCommentsInput
}

export interface PostWhereUniqueInput {
  id?: any | null
  slug?: string | null
}

export interface ProfileCreateOneWithoutUserInput {
  create?: ProfileCreateWithoutUserInput | null
  connect?: ProfileWhereUniqueInput | null
}

export interface ProfileCreateWithoutUserInput {
  bio: string
  avatar: AvatarCreateOneInput
}

export interface ProfileUpdateOneWithoutUserInput {
  create?: ProfileCreateWithoutUserInput | null
  update?: ProfileUpdateWithoutUserDataInput | null
  upsert?: ProfileUpsertWithoutUserInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: ProfileWhereUniqueInput | null
}

export interface ProfileUpdateWithoutUserDataInput {
  bio?: string | null
  avatar?: AvatarUpdateOneRequiredInput | null
}

export interface ProfileUpsertWithoutUserInput {
  update: ProfileUpdateWithoutUserDataInput
  create: ProfileCreateWithoutUserInput
}

export interface ProfileWhereUniqueInput {
  id?: any | null
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
  update?: ProjectAlbumUpdateWithoutProjectDataInput | null
  upsert?: ProjectAlbumUpsertWithoutProjectInput | null
  connect?: ProjectAlbumWhereUniqueInput | null
}

export interface ProjectAlbumUpdateWithoutProjectDataInput {
  images?: ProjectImageUpdateManyWithoutAlbumInput | null
}

export interface ProjectAlbumUpsertWithoutProjectInput {
  update: ProjectAlbumUpdateWithoutProjectDataInput
  create: ProjectAlbumCreateWithoutProjectInput
}

export interface ProjectAlbumWhereUniqueInput {
  id?: any | null
}

export interface ProjectCategoryContentCreateManyWithoutCategoryInput {
  create?: ProjectCategoryContentCreateWithoutCategoryInput[] | null
  connect?: ProjectCategoryContentWhereUniqueInput[] | null
}

export interface ProjectCategoryContentCreateWithoutCategoryInput {
  language: ProjectCategoryLngCreateOneWithoutCategoriesInput
  title: string
  text: string
  imageAlt: string
  metaTitle?: string | null
  metaDescription?: string | null
}

export interface ProjectCategoryContentScalarWhereInput {
  id?: any | null
  id_not?: any | null
  id_in?: any[] | null
  id_not_in?: any[] | null
  id_lt?: any | null
  id_lte?: any | null
  id_gt?: any | null
  id_gte?: any | null
  id_contains?: any | null
  id_not_contains?: any | null
  id_starts_with?: any | null
  id_not_starts_with?: any | null
  id_ends_with?: any | null
  id_not_ends_with?: any | null
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
  text?: string | null
  text_not?: string | null
  text_in?: string[] | null
  text_not_in?: string[] | null
  text_lt?: string | null
  text_lte?: string | null
  text_gt?: string | null
  text_gte?: string | null
  text_contains?: string | null
  text_not_contains?: string | null
  text_starts_with?: string | null
  text_not_starts_with?: string | null
  text_ends_with?: string | null
  text_not_ends_with?: string | null
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
  AND?: ProjectCategoryContentScalarWhereInput[] | null
  OR?: ProjectCategoryContentScalarWhereInput[] | null
  NOT?: ProjectCategoryContentScalarWhereInput[] | null
}

export interface ProjectCategoryContentUpdateManyDataInput {
  title?: string | null
  text?: string | null
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
  delete?: ProjectCategoryContentWhereUniqueInput[] | null
  connect?: ProjectCategoryContentWhereUniqueInput[] | null
  set?: ProjectCategoryContentWhereUniqueInput[] | null
  disconnect?: ProjectCategoryContentWhereUniqueInput[] | null
  update?:
    | ProjectCategoryContentUpdateWithWhereUniqueWithoutCategoryInput[]
    | null
  upsert?:
    | ProjectCategoryContentUpsertWithWhereUniqueWithoutCategoryInput[]
    | null
  deleteMany?: ProjectCategoryContentScalarWhereInput[] | null
  updateMany?: ProjectCategoryContentUpdateManyWithWhereNestedInput[] | null
}

export interface ProjectCategoryContentUpdateWithWhereUniqueWithoutCategoryInput {
  where: ProjectCategoryContentWhereUniqueInput
  data: ProjectCategoryContentUpdateWithoutCategoryDataInput
}

export interface ProjectCategoryContentUpdateWithoutCategoryDataInput {
  language?: ProjectCategoryLngUpdateOneRequiredWithoutCategoriesInput | null
  title?: string | null
  text?: string | null
  imageAlt?: string | null
  metaTitle?: string | null
  metaDescription?: string | null
}

export interface ProjectCategoryContentUpsertWithWhereUniqueWithoutCategoryInput {
  where: ProjectCategoryContentWhereUniqueInput
  update: ProjectCategoryContentUpdateWithoutCategoryDataInput
  create: ProjectCategoryContentCreateWithoutCategoryInput
}

export interface ProjectCategoryContentWhereUniqueInput {
  id?: any | null
}

export interface ProjectCategoryCreateInput {
  contents?: ProjectCategoryContentCreateManyWithoutCategoryInput | null
  slug: string
  image: string
  projects?: ProjectCreateManyWithoutCategoryInput | null
}

export interface ProjectCategoryCreateOneWithoutProjectsInput {
  create?: ProjectCategoryCreateWithoutProjectsInput | null
  connect?: ProjectCategoryWhereUniqueInput | null
}

export interface ProjectCategoryCreateWithoutProjectsInput {
  contents?: ProjectCategoryContentCreateManyWithoutCategoryInput | null
  slug: string
  image: string
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
  update?: ProjectCategoryLngUpdateWithoutCategoriesDataInput | null
  upsert?: ProjectCategoryLngUpsertWithoutCategoriesInput | null
  connect?: ProjectCategoryLngWhereUniqueInput | null
}

export interface ProjectCategoryLngUpdateWithoutCategoriesDataInput {
  country?: string | null
  locale?: string | null
}

export interface ProjectCategoryLngUpsertWithoutCategoriesInput {
  update: ProjectCategoryLngUpdateWithoutCategoriesDataInput
  create: ProjectCategoryLngCreateWithoutCategoriesInput
}

export interface ProjectCategoryLngWhereUniqueInput {
  id?: any | null
  country?: string | null
  locale?: string | null
}

export interface ProjectCategoryUpdateInput {
  contents?: ProjectCategoryContentUpdateManyWithoutCategoryInput | null
  slug?: string | null
  image?: string | null
  projects?: ProjectUpdateManyWithoutCategoryInput | null
}

export interface ProjectCategoryUpdateOneRequiredWithoutProjectsInput {
  create?: ProjectCategoryCreateWithoutProjectsInput | null
  update?: ProjectCategoryUpdateWithoutProjectsDataInput | null
  upsert?: ProjectCategoryUpsertWithoutProjectsInput | null
  connect?: ProjectCategoryWhereUniqueInput | null
}

export interface ProjectCategoryUpdateWithoutProjectsDataInput {
  contents?: ProjectCategoryContentUpdateManyWithoutCategoryInput | null
  slug?: string | null
  image?: string | null
}

export interface ProjectCategoryUpsertWithoutProjectsInput {
  update: ProjectCategoryUpdateWithoutProjectsDataInput
  create: ProjectCategoryCreateWithoutProjectsInput
}

export interface ProjectCategoryWhereUniqueInput {
  id?: any | null
  slug?: string | null
}

export interface ProjectContentCreateManyWithoutProjectInput {
  create?: ProjectContentCreateWithoutProjectInput[] | null
  connect?: ProjectContentWhereUniqueInput[] | null
}

export interface ProjectContentCreateWithoutProjectInput {
  language: ProjectLngCreateOneWithoutProjectsInput
  title: string
  text: string
  metaTitle?: string | null
  metaDescription?: string | null
  isActive?: boolean | null
}

export interface ProjectContentScalarWhereInput {
  id?: any | null
  id_not?: any | null
  id_in?: any[] | null
  id_not_in?: any[] | null
  id_lt?: any | null
  id_lte?: any | null
  id_gt?: any | null
  id_gte?: any | null
  id_contains?: any | null
  id_not_contains?: any | null
  id_starts_with?: any | null
  id_not_starts_with?: any | null
  id_ends_with?: any | null
  id_not_ends_with?: any | null
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
  text?: string | null
  text_not?: string | null
  text_in?: string[] | null
  text_not_in?: string[] | null
  text_lt?: string | null
  text_lte?: string | null
  text_gt?: string | null
  text_gte?: string | null
  text_contains?: string | null
  text_not_contains?: string | null
  text_starts_with?: string | null
  text_not_starts_with?: string | null
  text_ends_with?: string | null
  text_not_ends_with?: string | null
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
  AND?: ProjectContentScalarWhereInput[] | null
  OR?: ProjectContentScalarWhereInput[] | null
  NOT?: ProjectContentScalarWhereInput[] | null
}

export interface ProjectContentUpdateManyDataInput {
  title?: string | null
  text?: string | null
  metaTitle?: string | null
  metaDescription?: string | null
  isActive?: boolean | null
}

export interface ProjectContentUpdateManyWithWhereNestedInput {
  where: ProjectContentScalarWhereInput
  data: ProjectContentUpdateManyDataInput
}

export interface ProjectContentUpdateManyWithoutProjectInput {
  create?: ProjectContentCreateWithoutProjectInput[] | null
  delete?: ProjectContentWhereUniqueInput[] | null
  connect?: ProjectContentWhereUniqueInput[] | null
  set?: ProjectContentWhereUniqueInput[] | null
  disconnect?: ProjectContentWhereUniqueInput[] | null
  update?: ProjectContentUpdateWithWhereUniqueWithoutProjectInput[] | null
  upsert?: ProjectContentUpsertWithWhereUniqueWithoutProjectInput[] | null
  deleteMany?: ProjectContentScalarWhereInput[] | null
  updateMany?: ProjectContentUpdateManyWithWhereNestedInput[] | null
}

export interface ProjectContentUpdateWithWhereUniqueWithoutProjectInput {
  where: ProjectContentWhereUniqueInput
  data: ProjectContentUpdateWithoutProjectDataInput
}

export interface ProjectContentUpdateWithoutProjectDataInput {
  language?: ProjectLngUpdateOneRequiredWithoutProjectsInput | null
  title?: string | null
  text?: string | null
  metaTitle?: string | null
  metaDescription?: string | null
  isActive?: boolean | null
}

export interface ProjectContentUpsertWithWhereUniqueWithoutProjectInput {
  where: ProjectContentWhereUniqueInput
  update: ProjectContentUpdateWithoutProjectDataInput
  create: ProjectContentCreateWithoutProjectInput
}

export interface ProjectContentWhereUniqueInput {
  id?: any | null
}

export interface ProjectCreateInput {
  slug: string
  category: ProjectCategoryCreateOneWithoutProjectsInput
  author: UserCreateOneWithoutProjectsInput
  album: ProjectAlbumCreateOneWithoutProjectInput
  contents?: ProjectContentCreateManyWithoutProjectInput | null
  tags?: ProjectTagCreateManyInput | null
}

export interface ProjectCreateManyWithoutAuthorInput {
  create?: ProjectCreateWithoutAuthorInput[] | null
  connect?: ProjectWhereUniqueInput[] | null
}

export interface ProjectCreateManyWithoutCategoryInput {
  create?: ProjectCreateWithoutCategoryInput[] | null
  connect?: ProjectWhereUniqueInput[] | null
}

export interface ProjectCreateWithoutAuthorInput {
  slug: string
  category: ProjectCategoryCreateOneWithoutProjectsInput
  album: ProjectAlbumCreateOneWithoutProjectInput
  contents?: ProjectContentCreateManyWithoutProjectInput | null
  tags?: ProjectTagCreateManyInput | null
}

export interface ProjectCreateWithoutCategoryInput {
  slug: string
  author: UserCreateOneWithoutProjectsInput
  album: ProjectAlbumCreateOneWithoutProjectInput
  contents?: ProjectContentCreateManyWithoutProjectInput | null
  tags?: ProjectTagCreateManyInput | null
}

export interface ProjectImageContentCreateOneWithoutImageInput {
  create?: ProjectImageContentCreateWithoutImageInput | null
  connect?: ProjectImageContentWhereUniqueInput | null
}

export interface ProjectImageContentCreateWithoutImageInput {
  language: ProjectImageLngCreateOneWithoutImagesInput
  alt: string
}

export interface ProjectImageContentUpdateOneRequiredWithoutImageInput {
  create?: ProjectImageContentCreateWithoutImageInput | null
  update?: ProjectImageContentUpdateWithoutImageDataInput | null
  upsert?: ProjectImageContentUpsertWithoutImageInput | null
  connect?: ProjectImageContentWhereUniqueInput | null
}

export interface ProjectImageContentUpdateWithoutImageDataInput {
  language?: ProjectImageLngUpdateOneRequiredWithoutImagesInput | null
  alt?: string | null
}

export interface ProjectImageContentUpsertWithoutImageInput {
  update: ProjectImageContentUpdateWithoutImageDataInput
  create: ProjectImageContentCreateWithoutImageInput
}

export interface ProjectImageContentWhereUniqueInput {
  id?: any | null
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
  update?: ProjectImageLngUpdateWithoutImagesDataInput | null
  upsert?: ProjectImageLngUpsertWithoutImagesInput | null
  connect?: ProjectImageLngWhereUniqueInput | null
}

export interface ProjectImageLngUpdateWithoutImagesDataInput {
  country?: string | null
  locale?: string | null
}

export interface ProjectImageLngUpsertWithoutImagesInput {
  update: ProjectImageLngUpdateWithoutImagesDataInput
  create: ProjectImageLngCreateWithoutImagesInput
}

export interface ProjectImageLngWhereUniqueInput {
  id?: any | null
  country?: string | null
  locale?: string | null
}

export interface ProjectImageScalarWhereInput {
  id?: any | null
  id_not?: any | null
  id_in?: any[] | null
  id_not_in?: any[] | null
  id_lt?: any | null
  id_lte?: any | null
  id_gt?: any | null
  id_gte?: any | null
  id_contains?: any | null
  id_not_contains?: any | null
  id_starts_with?: any | null
  id_not_starts_with?: any | null
  id_ends_with?: any | null
  id_not_ends_with?: any | null
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
  AND?: ProjectImageScalarWhereInput[] | null
  OR?: ProjectImageScalarWhereInput[] | null
  NOT?: ProjectImageScalarWhereInput[] | null
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
  delete?: ProjectImageWhereUniqueInput[] | null
  connect?: ProjectImageWhereUniqueInput[] | null
  set?: ProjectImageWhereUniqueInput[] | null
  disconnect?: ProjectImageWhereUniqueInput[] | null
  update?: ProjectImageUpdateWithWhereUniqueWithoutAlbumInput[] | null
  upsert?: ProjectImageUpsertWithWhereUniqueWithoutAlbumInput[] | null
  deleteMany?: ProjectImageScalarWhereInput[] | null
  updateMany?: ProjectImageUpdateManyWithWhereNestedInput[] | null
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

export interface ProjectImageWhereUniqueInput {
  id?: any | null
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
  update?: ProjectLngUpdateWithoutProjectsDataInput | null
  upsert?: ProjectLngUpsertWithoutProjectsInput | null
  connect?: ProjectLngWhereUniqueInput | null
}

export interface ProjectLngUpdateWithoutProjectsDataInput {
  country?: string | null
  locale?: string | null
}

export interface ProjectLngUpsertWithoutProjectsInput {
  update: ProjectLngUpdateWithoutProjectsDataInput
  create: ProjectLngCreateWithoutProjectsInput
}

export interface ProjectLngWhereUniqueInput {
  id?: any | null
  country?: string | null
  locale?: string | null
}

export interface ProjectScalarWhereInput {
  id?: any | null
  id_not?: any | null
  id_in?: any[] | null
  id_not_in?: any[] | null
  id_lt?: any | null
  id_lte?: any | null
  id_gt?: any | null
  id_gte?: any | null
  id_contains?: any | null
  id_not_contains?: any | null
  id_starts_with?: any | null
  id_not_starts_with?: any | null
  id_ends_with?: any | null
  id_not_ends_with?: any | null
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
  AND?: ProjectScalarWhereInput[] | null
  OR?: ProjectScalarWhereInput[] | null
  NOT?: ProjectScalarWhereInput[] | null
}

export interface ProjectTagContentCreateOneWithoutTagInput {
  create?: ProjectTagContentCreateWithoutTagInput | null
  connect?: ProjectTagContentWhereUniqueInput | null
}

export interface ProjectTagContentCreateWithoutTagInput {
  title?: string | null
}

export interface ProjectTagContentUpdateOneRequiredWithoutTagInput {
  create?: ProjectTagContentCreateWithoutTagInput | null
  update?: ProjectTagContentUpdateWithoutTagDataInput | null
  upsert?: ProjectTagContentUpsertWithoutTagInput | null
  connect?: ProjectTagContentWhereUniqueInput | null
}

export interface ProjectTagContentUpdateWithoutTagDataInput {
  title?: string | null
}

export interface ProjectTagContentUpsertWithoutTagInput {
  update: ProjectTagContentUpdateWithoutTagDataInput
  create: ProjectTagContentCreateWithoutTagInput
}

export interface ProjectTagContentWhereUniqueInput {
  id?: any | null
}

export interface ProjectTagCreateInput {
  language: ProjectTagLngCreateOneWithoutTagsInput
  contents: ProjectTagContentCreateOneWithoutTagInput
  title: string
  color?: string | null
}

export interface ProjectTagCreateManyInput {
  create?: ProjectTagCreateInput[] | null
  connect?: ProjectTagWhereUniqueInput[] | null
}

export interface ProjectTagLngCreateOneWithoutTagsInput {
  create?: ProjectTagLngCreateWithoutTagsInput | null
  connect?: ProjectTagLngWhereUniqueInput | null
}

export interface ProjectTagLngCreateWithoutTagsInput {
  country: string
  locale: string
}

export interface ProjectTagLngUpdateOneRequiredWithoutTagsInput {
  create?: ProjectTagLngCreateWithoutTagsInput | null
  update?: ProjectTagLngUpdateWithoutTagsDataInput | null
  upsert?: ProjectTagLngUpsertWithoutTagsInput | null
  connect?: ProjectTagLngWhereUniqueInput | null
}

export interface ProjectTagLngUpdateWithoutTagsDataInput {
  country?: string | null
  locale?: string | null
}

export interface ProjectTagLngUpsertWithoutTagsInput {
  update: ProjectTagLngUpdateWithoutTagsDataInput
  create: ProjectTagLngCreateWithoutTagsInput
}

export interface ProjectTagLngWhereUniqueInput {
  id?: any | null
}

export interface ProjectTagScalarWhereInput {
  id?: any | null
  id_not?: any | null
  id_in?: any[] | null
  id_not_in?: any[] | null
  id_lt?: any | null
  id_lte?: any | null
  id_gt?: any | null
  id_gte?: any | null
  id_contains?: any | null
  id_not_contains?: any | null
  id_starts_with?: any | null
  id_not_starts_with?: any | null
  id_ends_with?: any | null
  id_not_ends_with?: any | null
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
  color?: string | null
  color_not?: string | null
  color_in?: string[] | null
  color_not_in?: string[] | null
  color_lt?: string | null
  color_lte?: string | null
  color_gt?: string | null
  color_gte?: string | null
  color_contains?: string | null
  color_not_contains?: string | null
  color_starts_with?: string | null
  color_not_starts_with?: string | null
  color_ends_with?: string | null
  color_not_ends_with?: string | null
  AND?: ProjectTagScalarWhereInput[] | null
  OR?: ProjectTagScalarWhereInput[] | null
  NOT?: ProjectTagScalarWhereInput[] | null
}

export interface ProjectTagUpdateDataInput {
  language?: ProjectTagLngUpdateOneRequiredWithoutTagsInput | null
  contents?: ProjectTagContentUpdateOneRequiredWithoutTagInput | null
  title?: string | null
  color?: string | null
}

export interface ProjectTagUpdateManyDataInput {
  title?: string | null
  color?: string | null
}

export interface ProjectTagUpdateManyInput {
  create?: ProjectTagCreateInput[] | null
  update?: ProjectTagUpdateWithWhereUniqueNestedInput[] | null
  upsert?: ProjectTagUpsertWithWhereUniqueNestedInput[] | null
  delete?: ProjectTagWhereUniqueInput[] | null
  connect?: ProjectTagWhereUniqueInput[] | null
  set?: ProjectTagWhereUniqueInput[] | null
  disconnect?: ProjectTagWhereUniqueInput[] | null
  deleteMany?: ProjectTagScalarWhereInput[] | null
  updateMany?: ProjectTagUpdateManyWithWhereNestedInput[] | null
}

export interface ProjectTagUpdateManyWithWhereNestedInput {
  where: ProjectTagScalarWhereInput
  data: ProjectTagUpdateManyDataInput
}

export interface ProjectTagUpdateWithWhereUniqueNestedInput {
  where: ProjectTagWhereUniqueInput
  data: ProjectTagUpdateDataInput
}

export interface ProjectTagUpsertWithWhereUniqueNestedInput {
  where: ProjectTagWhereUniqueInput
  update: ProjectTagUpdateDataInput
  create: ProjectTagCreateInput
}

export interface ProjectTagWhereUniqueInput {
  id?: any | null
}

export interface ProjectUpdateInput {
  slug?: string | null
  category?: ProjectCategoryUpdateOneRequiredWithoutProjectsInput | null
  author?: UserUpdateOneRequiredWithoutProjectsInput | null
  album?: ProjectAlbumUpdateOneRequiredWithoutProjectInput | null
  contents?: ProjectContentUpdateManyWithoutProjectInput | null
  tags?: ProjectTagUpdateManyInput | null
}

export interface ProjectUpdateManyDataInput {
  slug?: string | null
}

export interface ProjectUpdateManyWithWhereNestedInput {
  where: ProjectScalarWhereInput
  data: ProjectUpdateManyDataInput
}

export interface ProjectUpdateManyWithoutAuthorInput {
  create?: ProjectCreateWithoutAuthorInput[] | null
  delete?: ProjectWhereUniqueInput[] | null
  connect?: ProjectWhereUniqueInput[] | null
  set?: ProjectWhereUniqueInput[] | null
  disconnect?: ProjectWhereUniqueInput[] | null
  update?: ProjectUpdateWithWhereUniqueWithoutAuthorInput[] | null
  upsert?: ProjectUpsertWithWhereUniqueWithoutAuthorInput[] | null
  deleteMany?: ProjectScalarWhereInput[] | null
  updateMany?: ProjectUpdateManyWithWhereNestedInput[] | null
}

export interface ProjectUpdateManyWithoutCategoryInput {
  create?: ProjectCreateWithoutCategoryInput[] | null
  delete?: ProjectWhereUniqueInput[] | null
  connect?: ProjectWhereUniqueInput[] | null
  set?: ProjectWhereUniqueInput[] | null
  disconnect?: ProjectWhereUniqueInput[] | null
  update?: ProjectUpdateWithWhereUniqueWithoutCategoryInput[] | null
  upsert?: ProjectUpsertWithWhereUniqueWithoutCategoryInput[] | null
  deleteMany?: ProjectScalarWhereInput[] | null
  updateMany?: ProjectUpdateManyWithWhereNestedInput[] | null
}

export interface ProjectUpdateWithWhereUniqueWithoutAuthorInput {
  where: ProjectWhereUniqueInput
  data: ProjectUpdateWithoutAuthorDataInput
}

export interface ProjectUpdateWithWhereUniqueWithoutCategoryInput {
  where: ProjectWhereUniqueInput
  data: ProjectUpdateWithoutCategoryDataInput
}

export interface ProjectUpdateWithoutAuthorDataInput {
  slug?: string | null
  category?: ProjectCategoryUpdateOneRequiredWithoutProjectsInput | null
  album?: ProjectAlbumUpdateOneRequiredWithoutProjectInput | null
  contents?: ProjectContentUpdateManyWithoutProjectInput | null
  tags?: ProjectTagUpdateManyInput | null
}

export interface ProjectUpdateWithoutCategoryDataInput {
  slug?: string | null
  author?: UserUpdateOneRequiredWithoutProjectsInput | null
  album?: ProjectAlbumUpdateOneRequiredWithoutProjectInput | null
  contents?: ProjectContentUpdateManyWithoutProjectInput | null
  tags?: ProjectTagUpdateManyInput | null
}

export interface ProjectUpsertWithWhereUniqueWithoutAuthorInput {
  where: ProjectWhereUniqueInput
  update: ProjectUpdateWithoutAuthorDataInput
  create: ProjectCreateWithoutAuthorInput
}

export interface ProjectUpsertWithWhereUniqueWithoutCategoryInput {
  where: ProjectWhereUniqueInput
  update: ProjectUpdateWithoutCategoryDataInput
  create: ProjectCreateWithoutCategoryInput
}

export interface ProjectWhereUniqueInput {
  id?: any | null
  slug?: string | null
}

export interface UserCreateManyWithoutPostLikesInput {
  create?: UserCreateWithoutPostLikesInput[] | null
  connect?: UserWhereUniqueInput[] | null
}

export interface UserCreateOneWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutProjectsInput {
  create?: UserCreateWithoutProjectsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutCommentsInput {
  name: string
  email?: string | null
  password: string
  role?: Role | null
  profile?: ProfileCreateOneWithoutUserInput | null
  posts?: PostCreateManyWithoutAuthorInput | null
  postLikes?: PostCreateManyWithoutLikedByInput | null
  projects?: ProjectCreateManyWithoutAuthorInput | null
}

export interface UserCreateWithoutPostLikesInput {
  name: string
  email?: string | null
  password: string
  role?: Role | null
  profile?: ProfileCreateOneWithoutUserInput | null
  posts?: PostCreateManyWithoutAuthorInput | null
  projects?: ProjectCreateManyWithoutAuthorInput | null
  comments?: CommentCreateManyWithoutAuthorInput | null
}

export interface UserCreateWithoutPostsInput {
  name: string
  email?: string | null
  password: string
  role?: Role | null
  profile?: ProfileCreateOneWithoutUserInput | null
  postLikes?: PostCreateManyWithoutLikedByInput | null
  projects?: ProjectCreateManyWithoutAuthorInput | null
  comments?: CommentCreateManyWithoutAuthorInput | null
}

export interface UserCreateWithoutProjectsInput {
  name: string
  email?: string | null
  password: string
  role?: Role | null
  profile?: ProfileCreateOneWithoutUserInput | null
  posts?: PostCreateManyWithoutAuthorInput | null
  postLikes?: PostCreateManyWithoutLikedByInput | null
  comments?: CommentCreateManyWithoutAuthorInput | null
}

export interface UserScalarWhereInput {
  id?: any | null
  id_not?: any | null
  id_in?: any[] | null
  id_not_in?: any[] | null
  id_lt?: any | null
  id_lte?: any | null
  id_gt?: any | null
  id_gte?: any | null
  id_contains?: any | null
  id_not_contains?: any | null
  id_starts_with?: any | null
  id_not_starts_with?: any | null
  id_ends_with?: any | null
  id_not_ends_with?: any | null
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
  role?: Role | null
  role_not?: Role | null
  role_in?: Role[] | null
  role_not_in?: Role[] | null
  AND?: UserScalarWhereInput[] | null
  OR?: UserScalarWhereInput[] | null
  NOT?: UserScalarWhereInput[] | null
}

export interface UserUpdateInput {
  name?: string | null
  email?: string | null
  password?: string | null
  role?: Role | null
  profile?: ProfileUpdateOneWithoutUserInput | null
  posts?: PostUpdateManyWithoutAuthorInput | null
  postLikes?: PostUpdateManyWithoutLikedByInput | null
  projects?: ProjectUpdateManyWithoutAuthorInput | null
  comments?: CommentUpdateManyWithoutAuthorInput | null
}

export interface UserUpdateManyDataInput {
  name?: string | null
  email?: string | null
  password?: string | null
  role?: Role | null
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export interface UserUpdateManyWithoutPostLikesInput {
  create?: UserCreateWithoutPostLikesInput[] | null
  delete?: UserWhereUniqueInput[] | null
  connect?: UserWhereUniqueInput[] | null
  set?: UserWhereUniqueInput[] | null
  disconnect?: UserWhereUniqueInput[] | null
  update?: UserUpdateWithWhereUniqueWithoutPostLikesInput[] | null
  upsert?: UserUpsertWithWhereUniqueWithoutPostLikesInput[] | null
  deleteMany?: UserScalarWhereInput[] | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | null
}

export interface UserUpdateOneRequiredWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput | null
  update?: UserUpdateWithoutCommentsDataInput | null
  upsert?: UserUpsertWithoutCommentsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserUpdateOneRequiredWithoutPostsInput {
  create?: UserCreateWithoutPostsInput | null
  update?: UserUpdateWithoutPostsDataInput | null
  upsert?: UserUpsertWithoutPostsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserUpdateOneRequiredWithoutProjectsInput {
  create?: UserCreateWithoutProjectsInput | null
  update?: UserUpdateWithoutProjectsDataInput | null
  upsert?: UserUpsertWithoutProjectsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserUpdateWithWhereUniqueWithoutPostLikesInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutPostLikesDataInput
}

export interface UserUpdateWithoutCommentsDataInput {
  name?: string | null
  email?: string | null
  password?: string | null
  role?: Role | null
  profile?: ProfileUpdateOneWithoutUserInput | null
  posts?: PostUpdateManyWithoutAuthorInput | null
  postLikes?: PostUpdateManyWithoutLikedByInput | null
  projects?: ProjectUpdateManyWithoutAuthorInput | null
}

export interface UserUpdateWithoutPostLikesDataInput {
  name?: string | null
  email?: string | null
  password?: string | null
  role?: Role | null
  profile?: ProfileUpdateOneWithoutUserInput | null
  posts?: PostUpdateManyWithoutAuthorInput | null
  projects?: ProjectUpdateManyWithoutAuthorInput | null
  comments?: CommentUpdateManyWithoutAuthorInput | null
}

export interface UserUpdateWithoutPostsDataInput {
  name?: string | null
  email?: string | null
  password?: string | null
  role?: Role | null
  profile?: ProfileUpdateOneWithoutUserInput | null
  postLikes?: PostUpdateManyWithoutLikedByInput | null
  projects?: ProjectUpdateManyWithoutAuthorInput | null
  comments?: CommentUpdateManyWithoutAuthorInput | null
}

export interface UserUpdateWithoutProjectsDataInput {
  name?: string | null
  email?: string | null
  password?: string | null
  role?: Role | null
  profile?: ProfileUpdateOneWithoutUserInput | null
  posts?: PostUpdateManyWithoutAuthorInput | null
  postLikes?: PostUpdateManyWithoutLikedByInput | null
  comments?: CommentUpdateManyWithoutAuthorInput | null
}

export interface UserUpsertWithWhereUniqueWithoutPostLikesInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutPostLikesDataInput
  create: UserCreateWithoutPostLikesInput
}

export interface UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput
  create: UserCreateWithoutCommentsInput
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface UserUpsertWithoutProjectsInput {
  update: UserUpdateWithoutProjectsDataInput
  create: UserCreateWithoutProjectsInput
}

export interface UserWhereUniqueInput {
  id?: any | null
  email?: string | null
}

//==============================================================
// END Enums and Input Objects
//==============================================================
