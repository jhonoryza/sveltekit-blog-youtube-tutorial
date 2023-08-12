<script>
  import ArrowLeftIcon from '$lib/components/ArrowLeftIcon.svelte'
  import ArrowRightIcon from '$lib/components/ArrowRightIcon.svelte'
  import PostsList from '$lib/components/PostsList.svelte'
  import { bio, name } from '$lib/info.js'

  /** @type {import('./$types').PageData} */
  export let data
  let form
  let timer

  let searchTerm = ''

  $: isFirstPage = data.page === 1
  $: hasNextPage = data.posts[data.posts.length - 1]?.previous

  function reloadPage() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      form.requestSubmit()
    }, 500)
  }
</script>

<svelte:head>
  <title>{name}</title>
  <meta name="description" content={bio} />
</svelte:head>

<div class="flex flex-col flex-grow gap-8">
  <section class="w-full">
    <form data-sveltekit-keepfocus bind:this={form} class="pb-8">
      <input
        bind:value={searchTerm}
        on:input={reloadPage}
        type="search"
        name="search"
        id="search"
        placeholder="search here .."
        class="border border-green-300 p-2 rounded-lg w-full"
      />
    </form>

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
