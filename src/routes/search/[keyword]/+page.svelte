<script>
  import PostsList from '$lib/components/PostsList.svelte'
  import SearchPage from '$lib/components/SearchPage.svelte'
  import { bio, name } from '$lib/info.js'

  /** @type {import('./$types').PageData} */
  export let data

</script>

<svelte:head>
  <title>{name}</title>
  <meta name="description" content={bio} />
</svelte:head>

<div class="flex flex-col flex-grow gap-8">
  <section class="w-full">
    <SearchPage />

    <PostsList posts={data.posts} />

  </section>
</div>
