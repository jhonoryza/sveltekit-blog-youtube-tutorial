<script>
  import Pagination from '$lib/components/Pagination.svelte'
  import PostsList from '$lib/components/PostsList.svelte'
  import SearchBar from '$lib/components/SearchBar.svelte'
  import { bio, name } from '$lib/info.js'

  /** @type {import('./$types').PageData} */
  export let data

  $: isFirstPage = data.page === 1
  $: hasNextPage = data.posts[data.posts.length - 1]?.previous
</script>

<svelte:head>
  <title>{name}</title>
  <meta name="description" content={bio} />
</svelte:head>

<div class="flex flex-col flex-grow gap-8">
  <section class="w-full">
    <SearchBar />

    <Pagination page={data.page} isFirstPage={isFirstPage} hasNextPage={hasNextPage} />

    <PostsList posts={data.posts} />

    <Pagination page={data.page} isFirstPage={isFirstPage} hasNextPage={hasNextPage} />
  </section>
</div>
