import postCreate from './post/postCreate'
import postDelete from './post/postDelete'
import postUpdate from './post/postUpdate'
import projectCategoryCreate from './project/category/projectCategoryCreate'
import projectCategoryDelete from './project/category/projectCategoryDelete'
import projectCategoryUpdate from './project/category/projectCategoryUpdate'
import projectCreate from './project/projectCreate'
import projectDelete from './project/projectDelete'
import projectUpdate from './project/projectUpdate'
import userCreate from './user/userCreate'
import userDelete from './user/userDelete'
import userLogin from './user/userLogin'
import userUpdate from './user/userUpdate'

const mutations = {
  postCreate,
  postDelete,
  postUpdate,

  projectCreate,
  projectDelete,
  projectUpdate,

  projectCategoryCreate,
  projectCategoryDelete,
  projectCategoryUpdate,

  userCreate,
  userDelete,
  userLogin,
  userUpdate
}

export default mutations
