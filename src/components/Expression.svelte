<script>
  export let name;
  export let formula;
  export let search;
  export let tags;

  import katex from "katex";

  let showMsg = false;

  function copyFormula(){
    showMsg = true;
    navigator.clipboard.writeText(formula);

    setTimeout(() => {
      showMsg = false;
    }, 1000);
  }

  $: formulaHtml = katex.renderToString(formula.trim(), {
    throwOnError: false,
    displayMode: true,
  });

  $: textAlign = formula.split("\n").length > 1 ? "left" : "center";

</script>

<div class="formula" on:click={copyFormula}>
  <span class="formula-name">{name}</span>
  <div class="formula-display">
    {@html formulaHtml}
  </div>
  <code class="formula-code" style:text-align={textAlign}>
    {formula}
  </code>
  <div class="formula-copy" />
  {#if showMsg}
    <span class="formula-copied">Copied!</span>
  {/if}
</div>

<style>
  .formula {
    background: var(--color-grey-dark);
    border: 4px solid var(--color-grey-dark);
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s;
    overflow: hidden;
  }

  .formula:hover {
    border-color: var(--color-gold);
  }

  .formula-name {
    display: block;
    color: var(--color-white);
    font-weight: 600;
    text-align: center;
    padding: 5px 5px 8px 5px;
  }

  .formula-display {
    background: var(--color-black);
    color: var(--color-white);
    display: block;
    text-align: center;
    padding: 5px;
    font-size: 20px;
  }

  .formula-code {
    display: block;
    color: var(--color-grey-light);
    text-align: left;
    margin: 5px 0 0 0;
    padding: 5px;
    line-height: 1.3;
    font-size: var(--typesize-body);
    font-family: monospace;
    white-space: break-spaces;
  }

  .formula-copy {
    position: absolute;
    top: 0px;
    right: 0px;
    background: var(--color-gold);
    background-image: url("/copy.svg");
    background-repeat: no-repeat;
    background-position: 4px 2px;
    height: 30px;
    width: 30px;
    border-radius: 0px 0px 0px 3px;
    opacity: 0;
    transition: all 0.3s;
  }

  .formula:hover .formula-copy {
    opacity: 1;
  }

  .formula-copied {
    background: var(--color-gold);
    color: var(--color-black);
    font-size: var(--typesize-small);
    padding: 10px 10px 8px 10px;
    border-radius: 5px;
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
</style>
