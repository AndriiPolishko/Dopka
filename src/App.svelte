<script>
   let defaultValue = "";
   let url = defaultValue;
   let urlObj = {};
   let deployUrl = '';

   const go = () => {
       document.getElementById('myIframe').setAttribute("src", changeUrl(url));
    };

    const resetDefaultValues = () => {
        url = defaultValue;
    };

    const changeUrl = (url) => {
        return deployUrl + url;
    };
</script>

<main>
    <div class="main-div text-comclassNamet">
        <h1>HTTP Web Proxy</h1>
        <input placeholder="Enter url" bind:value={url} class="input-field text-classNamenent">
        <button on:click={go} class="button-style textclassNameonent">Go</button>
    </div>
    <!-- svelte-ignore a11y-missing-attribute -->
    <iframe id="myIframe" src="" frameborder="0" class="iframe-style"></iframe>
</main>
