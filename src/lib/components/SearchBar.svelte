<script>
  let form
  let timer

  let searchTerm = ''

  function reloadPage() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      form.requestSubmit()
    }, 500)
  }
</script>

<section>
  <form data-sveltekit-keepfocus bind:this={form}>
    <input
      bind:value={searchTerm}
      on:input={reloadPage}
      type="search"
      name="search"
      id="search"
      placeholder="  search here .."
      autocomplete="off"
      class="border border-slate-300 p-1 rounded-lg w-full shadow focus:border-red-500 focus:outline-none 
      dark:bg-slate-800 dark:text-white dark:border-white dark:focus:border-green-300 max-w-sm"
    />
  </form>
</section>
