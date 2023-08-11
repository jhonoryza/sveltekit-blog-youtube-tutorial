import { posts } from '$lib/data/posts'
import { paginate } from '$lib/util'
import { error } from 'console'

/** @type {import('./$types').PageServerLoad} */
export async function load(params) {
  let page = params.url.searchParams.get('page') ? parseInt(params.url.searchParams.get('page')) : 1
  let limit = 3
  let search = params.url.searchParams.get('search')
  page = search ? 1 : page

  console.log(params)
  console.log('sebelum ' +posts.length)
  const filtered = search ?
    posts.filter((post) => {
      return ( post.title.toLowerCase().indexOf(search) > -1 )
    }) : posts;
  const postsForPage = paginate(filtered, { limit, page })
  console.log('sesudah ' +filtered.length)

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
