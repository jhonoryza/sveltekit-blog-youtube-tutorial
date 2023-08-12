import { posts } from '$lib/data/posts.js'
import { paginate } from '$lib/util.js'
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
  let page = url.searchParams.get('page') ? parseInt(url.searchParams.get('page')) : 1
  let limit = url.searchParams.get('limit') ? parseInt(url.searchParams.get('limit')) : 3
  let search = url.searchParams.get('search')
  page = search ? 1 : page

  const filtered = search
    ? posts.filter((post) => {
        return post.title.toLowerCase().indexOf(search) > -1
      })
    : posts
  const postsForPage = paginate(filtered, { limit, page })

  if (postsForPage.length === 0 && page > 1) {
    return json({
        posts: [],
        error: 'data is not found'
    })
  }
  return json({
    posts: postsForPage,
    page,
    limit
  })
}
