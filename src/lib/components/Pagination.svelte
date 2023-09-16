<script>
  import { page as hal } from '$app/stores'
  import ArrowLeftIcon from './ArrowLeftIcon.svelte'
  import ArrowRightIcon from './ArrowRightIcon.svelte'

  export let isFirstPage
  export let hasNextPage
  export let page
</script>

<section>
  <div class="flex items-center justify-between py-10">
    {#if !isFirstPage}
      <a href={`/posts/page/${page - 1}${$hal.url.search}`} data-sveltekit-prefetch>
        <ArrowLeftIcon class="w-4 h-4" />
        Previous
      </a>
    {:else}
      <div />
    {/if}

    {#if hasNextPage}
      <a href={`/posts/page/${page + 1}${$hal.url.search}`} data-sveltekit-prefetch
        >Next
        <ArrowRightIcon class="w-4 h-4" />
      </a>
    {/if}
  </div>
</section>
