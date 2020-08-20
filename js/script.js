function convert() {
	document.getElementById("output").attributes.removeNamedItem("class")
	let output = document.getElementById("input").value.split("\n");
	output.forEach((e, i) => output[i] = e.trim());
	document.getElementById("output").innerText = output.join("\n");
	hljs.highlightBlock(document.getElementById("output"))
}

function copy() {
	var textArea = document.createElement("textarea");
	textArea.value = document.getElementById("output").innerText;
	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();
	document.execCommand("copy");
	document.body.removeChild(textArea);
	let button = document.getElementById("copy");
	button.value = "Copied!";
	window.setTimeout(() => button.value = "Copy", 1500);
}

hljs.configure({useBR: true});

window.onload = () => document.getElementById("output").style.height = `${document.getElementById("input").offsetHeight}px`;