<script>
   let defaultValue = "";
   let url = defaultValue;
   let urlObj = {};
   const go = async (e) => {
       e.preventDefault();
       urlObj.url = url;
       console.log(url);
       let responce = await fetch("./api/backend.js",{
           method:"POST",
           body: JSON.stringify(urlObj)
       });
       resetDefaultValues();
    };


    const resetDefaultValues = () => {
        url = defaultValue;
    };

</script>

<main>
    <div class="main-div text-component">
        <h1>HTTP Web Proxy</h1>
        <form action="./api/backend.js">
            <input placeholder="Enter url" bind:value={url} class="input-field text-component">
            <button on:click={go} class="button-style text-component">Go</button>
        </form>
    </div>
</main>

<style>

.main-div {
    text-align: center;
    padding-top: 10%;
}

.input-field {
    outline: none;
    border-radius: 2px;
    height: 30px;
    width: 500px;
    text-align: center;
}

.text-component {
    font-size: 25px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.button-style {
    border-radius: 2px;
    height: 38px;
    width: 100px;
}

</style>