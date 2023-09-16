import { posts } from '$lib/data/posts'
import { paginate } from '$lib/util'
import { redirect } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  let page = params.page
  let limit = 3

  page = parseInt(page)

  const postsForPage = paginate(posts, { limit, page })

  if (postsForPage.length == 0 && page > 1) {
    return redirect(302, `/posts/page/${page - 1}`)
  }

  return {
    posts: postsForPage,
    page: page,
    limit: limit
  }
}
