<script>
  import { bio, name } from '$lib/info.js'
</script>

<svelte:head>
  <title>{name}</title>
  <meta name="description" content={bio} />
</svelte:head>

<div class="flex flex-col flex-grow gap-8">
  <section class="w-full">
    <div class="pt-20">
      <p>this website contains tutorial articles and my notes about everything</p>
      <p class="pt-4">you can see <a href="/posts/page/1" class="text-green-500">all the articles here</a></p>
      <img class="mt-12 border rounded-3xl shadow border-slate-400 dark:border-white" src="https://source.unsplash.com/random/640x480/?onepiece" alt="">
    </div>
  </section>
</div>
