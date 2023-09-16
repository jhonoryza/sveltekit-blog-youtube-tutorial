import { posts } from '$lib/data/posts'
import { paginate } from '$lib/util'

import { json } from "@sveltejs/kit";

/** @type {import("./$types").RequestHandler} */
export function GET({params}) {
  let page = params.page
  let limit = 3

  let search = params.search
  search = search == 'null' ? '' : search
//   page = search ? 1 : page
  page = parseInt(page)


  const filtered = search
    ? posts.filter((post) => {
        return post.title.toLowerCase().indexOf(search) > -1
      })
    : posts
  const postsForPage = paginate(filtered, { limit, page })

  if (postsForPage.length == 0 && page > 1) {
    return json({
      posts: [],
      page,
      limit
    })
  }

  return json({
    posts: postsForPage,
    page,
    limit
  })
}

