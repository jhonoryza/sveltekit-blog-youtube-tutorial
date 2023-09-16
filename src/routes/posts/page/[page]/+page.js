import { redirect } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params, url }) {
  let page = params.page 

  let search = url.searchParams.get('search', '') || ''
  search = search.trim()
  search = search.includes('+') ? 'null' : search
  search = search == '' ? 'null' : search
  // page = search != 'null' ? 1 : page
  page = parseInt(page)

  const data = await fetch(`/posts/page/${page}/${search}`)

  const jsonData = await data.json()
  if (jsonData.length == 0 && page > 1) {
    return redirect(302, `/posts/page/${page - 1}`)
  }

  return {
    posts: jsonData.posts,
    page: jsonData.page,
    limit: jsonData.limit
  }
}

export const prerender = false