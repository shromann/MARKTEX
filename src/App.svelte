<script>
	import "carbon-components-svelte/css/g10.css";

	import Banner from "./Banner.svelte"
	import MDtoLatex from "./MDtoLatex.js";
	let text = '';

	$: latex = MDtoLatex(text).split('\n');

	let detail = {
		title: '',
		author: '',
		size: 11,
		margin: 1,
		selected: 'report',
	}

	function handleMessage(event){
		detail = event.detail; 
	}

	$: title = detail.title;
	$: author = detail.author;
	$: size = detail.size;
	$: margin = detail.margin;
	$: style = detail.selected;



</script>

<Banner on:spec={handleMessage}/>

<main >
	<textarea bind:value={text}></textarea>
	<div class="output">
		{"\\documentclass[" + size + "pt]{" + style + "}"}
		<br/>
		{"\\usepackage[margin=" + margin + "in]{geometry}"}
		<br/>
		{"\\usepackage{amsmath}"}
		<br/>
		<br/>
		{"\\tile{"+ title +"}"}
		<br/>
		{"\\author{"+ author +"}"}
		<br/>
	
		<br/>
		{"\\begin{document}"}
		<br/>
		{"\\maketitle"}
		<br/>
		<br/>


		{#each latex as line}
			{line}<br>
		{/each}

		<br/>
		{"\\end{document}"}
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
		background-color: rgb(244, 244, 244);
	}	
</style>