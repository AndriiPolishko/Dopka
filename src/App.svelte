<script>
    let defaultValue = "";
    let url = defaultValue;
    let urlObj = {};
    let API_URL = "./api/backend";
    let POST_result = "";
    const go = async (e) => {
        e.preventDefault();
        urlObj.url = url;
        console.log(url);
        await fetch(API_URL, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(urlObj)
        });

        resetDefaultValues();
    };


    const resetDefaultValues = () => {
        url = defaultValue;
    };

</script>

<main>
    <div class="main-div text-comclassNamet">
        <h1>HTTP Web Proxy</h1>
        <form action="./api/backend.js">
            <input placeholder="Enter url" bind:value={url} class="input-field text-classNamenent">
            <button on:click={go} class="button-style textclassNameonent">Go</button>
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