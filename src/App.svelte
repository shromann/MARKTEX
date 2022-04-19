<script>
	import Banner from "./Banner.svelte"
	import MDtoLatex from "./MDtoLatex.js";
	let text = '';

	$: latex = MDtoLatex(text).split('\n');


</script>

<Banner/>
<main>
	<textarea bind:value={text}></textarea>
	<div class="output">
		{#each latex as line}
			{line}<br>
		{/each}
	</div>
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
		padding: 10px;
	}

	textarea {
		width: 50vw;
		height: 100vh;
		border: 1px solid #ccc;
		font-size: 1.4em;
		font-family: monospace;
		padding: 10px;
	}	
</style>