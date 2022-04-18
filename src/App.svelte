<script>
	import Banner from "./Banner.svelte"
	import MDtoLatex from "./MDtoLatex.js";
	let text = '';
</script>

<Banner/>
<main>
	
	<textarea bind:value={text}></textarea>
	<div class="output">{MDtoLatex(text)}</div>
</main>

<style>
	main {
		margin: 0 auto;
		display: flex;
	}

	.output {
		margin: 0px;
		width: 50vw;
		height: 100vh;
		font-family: monospace;
		font-size: 1.4em ;
		border: #ccc 1px solid;
	}

	textarea {
		width: 50vw;
		height: 100vh;
		border: 1px solid #ccc;
		font-size: 1.4em;
		font-family: monospace;
	}
	
</style>