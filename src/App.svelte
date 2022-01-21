<script>
   let defaultValue = "";
   let url = defaultValue;
   let urlObj = {};
   let API_URL = "./api/backend";
   let changedURL;

   const go = async (e) => {
        e.preventDefault();
        urlObj.ourUrl = url;


        const fs = require('fs') 
        const envfile = require('envfile')
        const sourcePath = '.env'
        console.log(envfile.parseFileSync(sourcePath))
        let parsedFile = envfile.parseFileSync(sourcePath);
        parsedFile.ORIGIN = url;
        fs.writeFileSync('.env', envfile.stringifySync(parsedFile)) 
        console.log(envfile.stringifySync(parsedFile))

       try {
           let response = await fetch(API_URL,{
               method:"POST",
               headers:{'Content-Type':'application/json'},
               body: JSON.stringify(urlObj)
           }).then(response =>
               response.json());
       } catch (e) {
           console.log("Error occurred: " + e);
       }
       document.getElementById('myIframe').setAttribute("src", urlObj.url);
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
    <!-- svelte-ignore a11y-missing-attribute -->
    <iframe id="myIframe" src="" frameborder="0" class="iframe-style"></iframe>
</main>

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