import { defaultDataIdFromObject, InMemoryCache } from 'apollo-cache-inmemory'

const cache = new InMemoryCache({
  dataIdFromObject: (object) => {
    switch (object.__typename) {
      case 'Post':
        return object.id // use `id` as the primary key
      case 'Project':
        return object.id
      case 'Category':
        return object.id
      case 'User':
        return object.id
      default:
        return defaultDataIdFromObject(object) // fall back to default handling
    }
  }
})

export default cache
