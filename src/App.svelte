<style>
.iframe-style {
  width: 100%;
  height: 800px;
}

.main-div {
  text-align: center;
}

.input-field {
  outline: none;
  border-radius: 2px;
  height: 30px;
  width: 500px;
  text-align: center;
}

.button-style {
  border-radius: 2px;
  height: 38px;
  width: 100px;
}
</style>

<script>
let defaultValue = "";
let url = defaultValue;
let deployUrl = deploy_url;

let iframe;

const go = () => {
  if (!url) return;

  iframe.src = changeUrl(url);
};

const changeUrl = (url) => {
  return deployUrl + url;
};
</script>

<main>
  <div class="main-div text-comclassNamet">
    <h1>HTTP Web Proxy</h1>
    <input
      placeholder="Enter url"
      bind:value="{url}"
      class="input-field text-classNamenent"
    />
    <button on:click="{go}" class="button-style textclassNameonent">Go</button>
  </div>
  <!-- svelte-ignore a11y-missing-attribute -->
  <iframe bind:this="{iframe}" src="" frameborder="0" class="iframe-style"
  ></iframe>
</main>
