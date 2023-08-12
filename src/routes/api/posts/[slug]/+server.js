import { posts } from '$lib/data/posts'
import { json } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function GET({ params }) {
  const { slug } = params

  // get post with metadata
  const post = posts.find((post) => slug === post.slug)

  if (!post) {
    return json({
        post: null
    })
  }

  return json(post)
}
