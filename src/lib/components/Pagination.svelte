<script>
  import ArrowLeftIcon from './ArrowLeftIcon.svelte'
  import ArrowRightIcon from './ArrowRightIcon.svelte'

  export let isFirstPage
  export let hasNextPage
  export let page
</script>

<section>
  <div class="flex items-center justify-between py-2">
    {#if !isFirstPage}
      <a href={`/posts/page/${page - 1}`} data-sveltekit-prefetch class="hover:bg-zinc-100 p-1 rounded">
        <ArrowLeftIcon class="w-4 h-4" />
        Previous
      </a>
    {:else}
      <div />
    {/if}

    {#if hasNextPage}
      <a href={`/posts/page/${page + 1}`} data-sveltekit-prefetch class="hover:bg-zinc-100 p-1 rounded"
        >Next
        <ArrowRightIcon class="w-4 h-4" />
      </a>
    {/if}
  </div>
</section>
