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
    <label>
        Input HTTP URL <input bind:value={url} class="input-field">
    </label>
    <button on:click={go}>Go</button>
</main>

<style>
.input-field {
    outline: none;
}
</style>