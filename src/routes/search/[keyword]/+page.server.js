import { posts } from '$lib/data/posts'

/** @type {import("../$types").PageServerLoad} */
export function load({ params }) {
  let search = params.keyword

  const postsForPage = search
    ? posts.filter((post) => {
        return post.title.toLowerCase().indexOf(search) > -1
      })
    : posts

  if (postsForPage.length == 0) {
    return {
      posts: []
    }
  }

  return {
    posts: postsForPage
  }
}

export const prerender = false