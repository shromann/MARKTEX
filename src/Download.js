function down(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }


export default function Download() {
    const file = document.getElementsByClassName('output')[0].innerHTML.replace(/<br>/g, "\n");
    down("output.tex", file);
}