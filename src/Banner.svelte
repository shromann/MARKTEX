<script>
    import { TextInput, Button, Select, SelectItem } from "carbon-components-svelte";
    import { createEventDispatcher } from "svelte";
    import Download from "./Download.js";

    const dispatch = createEventDispatcher();

    let title = "";
    let author = "";
    let size = 11;
    let margin = 1;
    let selected = "report";

    function spec(){
        dispatch("spec", {
            title,
            author,
            size,
            margin,
            selected
        });  
    }

    $: {
        console.log(title, author, size, margin, selected);
        spec();
    }
</script>

<div class='outer'>
<div class='main'>
    <h1>MARKTEX</h1>
    <div class='text'>
        <TextInput placeholder="Title" bind:value={title}/>
        <TextInput placeholder="Author" bind:value={author}/>
        <TextInput placeholder="Size" bind:value={size}/>
        <TextInput placeholder="Margin" bind:value={margin} />
    </div>
    <div class='select'>
        <Select bind:selected> 
            <SelectItem value="report">report</SelectItem>
            <SelectItem value="article">article</SelectItem>
            <SelectItem value="book">book</SelectItem>
        </Select>
    </div>
</div>
<Button on:click={Download}>Download</Button>
</div>

<style>
    .text {
        display: flex;
        flex-direction: row;
        justify-content: left;
        margin-top: 8px;
        margin-right: 10px;
        margin-left: 10px;
    }
    .main {
        display: flex;
        /* justify-content: space-between; */
    }
    .outer {
        display: flex;
        justify-content: space-between;
    }

    h1 {
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 3px;
    }
</style>
