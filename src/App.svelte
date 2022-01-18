<script>
    let defaultValue = "";
    let url = defaultValue;

    const go = () => {
        console.log(url);
        resetDefaultValues();
    }

    const resetDefaultValues = () => {
        url = defaultValue;
    }

</script>

<main>
    <div class="main-div text-component">
        <h1>HTTP Web Proxy</h1>
        <input placeholder="Enter url" bind:value={url} class="input-field text-component">
        <button on:click={go} class="button-style text-component">Go</button>
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