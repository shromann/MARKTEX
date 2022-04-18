/* 1. Section
 * 2. SubSection 
 * 3. SubSubSection
 *
 */

export default function MDToLate(md) {  

  console.log(md);

  md = md.replace(/\n/g, "\n");
  md = md.replace(/(#) ([\w ]+)/, "\\section{$2}");
  md = md.replace(/(##) ([\w ]+)/, "\\subsection{$2}");
  md = md.replace(/(###) ([\w ]+)/, "\\subsubsection{$2}");
  
  md = md.replace(/(\*)(.*?)\*/, "\\textbf{$2}");
  md = md.replace(/(\*\*)(.*?)\*\*/, "\\textit{$2}");
  md = md.replace(/(\$\$)(.*?)\$\$/, "$ $2 $");
  md = md.replace(/(\$\$\$\$)(.*?)\$\$\$\$/, "$$ $2 $$");
  md = md.replace(/\n\n\$\$/, "\\begin{equation}");
  md = md.replace(/\$\$\n\n/, "\\end{equation}");
  
  md = md.replace(/(\*)(.*?)/, "\\item $2");
  md = md.replace(/\n(\*(.*?)\n)+/, "\\begin{item} $1 \\end{item}");


  return md;

}