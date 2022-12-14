<svelte:head>
  <title>Copy Paste MathJax</title>
  <meta name="description" content="Click on an expression to copy to your clipboard" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.css"
    integrity="sha384-WsHMgfkABRyG494OmuiNmkAOk8nhO1qE+Y6wns6v+EoNoTNxrWxYpl5ZYWFOLPCM"
    crossorigin="anonymous"
  />
</svelte:head>

<script lang="ts">
  import { expressions, Category } from '../lib/expressions.ts'
  import Expression from '../components/Expression.svelte'

  let search = '';
  let activeCategories = [];

  function toggleCategory(category){
    if (activeCategories.includes(category)){
      activeCategories = activeCategories.filter((c) => {
        if (category === c) return false;
        return true;
      });
    } else {
      activeCategories = [...activeCategories, category];
    }
  }

  function setSearch(str: string){
    search = str;
  }

  $: filteredExpressions = expressions.filter(({ name = "", tags }) => {
    const isInSearch = name.toLowerCase().includes(search.toLowerCase());
    const isInCategory = activeCategories.length === 0 ?
      true : activeCategories.filter(x => tags.includes(x)).length > 0; 
    return isInSearch && isInCategory;
  });

  const categories = Object.keys(Category).filter((v) => isNaN(Number(v)));
</script>

<nav class="math-nav">
  <h1>Copy Paste MathJax</h1>
  <h4>Click on an expression to copy to your clipboard</h4>
  <span>
    Make suggestions by tweet{" "}
    <a href="https://twitter.com/maximmcnair" target="_blank" rel="noreferrer">
      @maximmcnair
    </a>{" "}
    or PR{" "}
    <a
      href="https://github.com/maximmcnair/copypastemathjax"
      target="_blank"
      rel="noreferrer"
    >
      on Github.
    </a>
  </span>
</nav>

<div class="math-container">
  <div class="math-search-wrapper">
    <input
      class="math-search"
      bind:value={search}
      placeholder="Search for expressions..."
    />
  </div>

  <div class="math-categories">
    {#each categories as category}
      <div class="math-category" on:click={() => toggleCategory(category)} data-active={activeCategories.includes(category)}>{category}</div>
    {/each}
  </div>

  <div class="formulas">
    {#each filteredExpressions as expression}
      <Expression {...expression} />
    {/each}
  </div>

  {#if filteredExpressions.length === 0}
    <span class="formula-search-error">
      Nothing found for "{search}"
    </span>
  {/if}
</div>

<style>
  .math-container {
    padding: 20px;
    max-width: 1040px;
    margin: 0 auto;
  }

  .math-nav {
    text-align: center;
  }

  .math-nav h1 {
    font-size: var(--typesize-h1);
    font-family: var(--typeface-title);
    margin-top: 30px;
    margin-bottom: 0px;
  }

  .math-nav h4 {
    font-size: var(--typesize-h5);
    font-family: var(--typeface-body);
    margin-bottom: 10px;
    margin-top: 0px;
    color: var(--color-grey-light)
  }

  .math-nav span {
    color: var(--color-grey-light)
  }

  .math-search-wrapper {
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    margin-top: 10px;
    z-index: 999;
  }

  .math-search {
    max-width: 1540px;
    width: 100%;
    background: transparent;
    color: var(--color-grey);
    border: none;
    border: 5px solid var(--color-grey-dark);
    border-radius: 5px;
    font-size: 20px;
    font-weight: 600;
    padding: 15px 10px 15px 50px;
    backdrop-filter: blur(30px);
    background-image: url("/search.svg");
    background-repeat: no-repeat;
    background-position: 15px 15px;
    transition: all 0.1s;
  }

  .math-categories {
    display: flex;
    gap: 10px;
    margin-top: 15px;
    overflow-x: scroll;
  }

  .math-category {
    background: var(--color-grey-dark);
    color: var(--color-grey-white);
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
  }

  .math-category[data-active=true] {
    background: var(--color-white);
    color: var(--color-grey-dark);
  }

  .math-search::placeholder {
    color: var(--color-grey);
  }

  .math-search:focus {
    outline: none;
    border-color: var(--color-grey-light);
    color: var(--color-white);
  }

  .formulas {
    padding-top: 15px;
    display: grid;
    gap: 15px;
  }

  @media (min-width: 540px) {
    .formulas {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 740px) {
    .formulas {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 940px) {
    .formulas {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1140px) {
    .formulas {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  .formula-search-error {
    margin-top: 10px;
    display: block;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
  }
</style>
