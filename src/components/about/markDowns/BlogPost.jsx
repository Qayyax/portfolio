import { useEffect, useState } from "react";
import MarkDown from "./MarkDown";

export default function BlogPost({ file }) {
  // file is md 
  const [mdContent, setMdContent] = useState("")
  useEffect(() => {
    fetch(file) 
    .then(res => res.text())
    .then(text => setMdContent(text))
  }, [file])

  return(
  <section>
      <MarkDown content={mdContent}/>
    </section>
  )
}
