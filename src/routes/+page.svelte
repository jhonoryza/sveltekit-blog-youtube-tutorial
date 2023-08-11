<script>
    import { goto } from '$app/navigation'
  import ArrowLeftIcon from '$lib/components/ArrowLeftIcon.svelte'
  import ArrowRightIcon from '$lib/components/ArrowRightIcon.svelte'
  import PostsList from '$lib/components/PostsList.svelte'
  import { bio, name } from '$lib/info.js'

  /** @type {import('./$types').PageData} */
  export let data

  let searchTerm = '';

  $: isFirstPage = data.page === 1
  $: hasNextPage = data.posts[data.posts.length - 1]?.previous

</script>

<svelte:head>
  <title>{name}</title>
  <meta name="description" content={bio} />
</svelte:head>

<div class="flex flex-col flex-grow gap-8">
  <section class="w-full">
    <div class="flex items-center justify-between pb-8">
      {#if !isFirstPage}
        <a href={`?page=${data.page - 1}`} data-sveltekit-prefetch>
          <ArrowLeftIcon class="w-4 h-4" />
          Previous
        </a>
      {:else}
        <div />
      {/if}

      <form action="/">
        <input bind:value={searchTerm} type="search" name="search" id="search" placeholder="search here .." class="border border-green-300 p-2 rounded-lg">
      </form>
  
      {#if hasNextPage}
        <a href={`?page=${data.page + 1}`} data-sveltekit-prefetch
          >Next
          <ArrowRightIcon class="w-4 h-4" />
        </a>
      {/if}
    </div>
    
    <PostsList posts={data.posts} />

    <div class="flex items-center justify-between pt-16">
      {#if !isFirstPage}
        <a href={`?page=${data.page - 1}`} data-sveltekit-prefetch>
          <ArrowLeftIcon class="w-4 h-4" />
          Previous
        </a>
      {:else}
        <div />
      {/if}
  
      {#if hasNextPage}
        <a href={`?page=${data.page + 1}`} data-sveltekit-prefetch
          >Next
          <ArrowRightIcon class="w-4 h-4" />
        </a>
      {/if}
    </div>

  </section>
</div>
