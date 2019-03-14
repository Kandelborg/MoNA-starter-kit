import postBySlug from './post/postBySlug'
import postsByIsPublished from './post/postsByIsPublished'
import projectCategoriesAll from './project/category/projectCategoriesAll'
import projectCategoryById from './project/category/projectCategoryById'
import projectCategoryBySlug from './project/category/projectCategoryBySlug'
import projectById from './project/projectById'
import projectBySlug from './project/projectBySlug'
import projectsAll from './project/projectsAll'
import me from './user/me'

const queries = {
  postBySlug,
  postsByIsPublished,

  projectById,
  projectBySlug,
  projectsAll,

  projectCategoriesAll,
  projectCategoryById,
  projectCategoryBySlug,

  me
}

export default queries
