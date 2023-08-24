import { posts } from '$lib/data/posts'
import { paginate } from '$lib/util'
import { error } from 'console'

export async function load({ url }) {
  let page = url.searchParams.get('page') ? parseInt(url.searchParams.get('page')) : 1
  let limit = 10
  let search = url.searchParams.get('search')
  page = search ? 1 : page

  const filtered = search ?
    posts.filter((post) => {
      return (post.title.toLowerCase().indexOf(search) > -1)
    }) : posts;
  const postsForPage = paginate(filtered, { limit, page })

  // if page doesn't exist, 404
  if (postsForPage.length === 0 && page > 1) {
    throw error(404, 'Page not found')
  }

  return {
    posts: postsForPage,
    page,
    limit
  }
}
