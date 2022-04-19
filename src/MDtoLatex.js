/* 1. Section
 * 2. SubSection 
 * 3. SubSubSection
 *
 */

export default function MDToLate(md) {  

  md = md.replace(/\n/g, "\n");
  md = md.replace(/(#) ([\w ]+)/g, "\\section{$2}");
  md = md.replace(/(#\\section{([\w ]+)})/g, "\\subsection{$2}");
  md = md.replace(/(#\\subsection{([\w ]+)})/g, "\\subsubsection{$2}");
  
  md = md.replace(/(\*)([\w ]+)\*/, "\\textbf{$2}");
  md = md.replace(/(\*\\textbf{([\w ]+)}\*)/, "\\textit{$2}");
  
  md = md.replace(/(\$\$) (.*?) \$\$/g, "$ $2 $");

  md = md.replace(/\n\n\$\$/g, "\\begin{equation}");
  md = md.replace(/\$\$\n\n/g, "\\end{equation}");
  
  md = md.replace(/(\-)(.*?)/g, "\\item $2");
  
  return md;

}