import { useEffect, useState } from "react";
import MarkDown from "./MarkDown";
import { Navigate, useParams } from "react-router-dom";

export default function BlogPost({ data }) {
  const [mdContent, setMdContent] = useState("")
  const [error, setError] = useState(null)
  const { blogID } = useParams()
  const file = data.find(item => item.slug === blogID)?.file

  useEffect(() => {
    if (file) {
      const fetchData = async () => {
        try {
          const response = await fetch(file);
          if (!response.ok) {
            throw new Error('Blog does not exist');
          }
          const text = await response.text()
          setMdContent(text)
          setError(null)
        } catch (err) {
          setError(err.message);
        }
      };

      fetchData();
    } else {
      setError('Blog does not exist')
    }
  }, [file]);

  return (
    <>
      {error ? (
        <Navigate to={`/`} />
      ) : (
        <MarkDown content={mdContent} />
      )}
    </>
  )
}
