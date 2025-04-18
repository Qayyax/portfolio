import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  CustomCode,
  CustomH1,
  CustomImg,
  CustomLink,
  CustomP,
} from "./MdStyle";

export default function MarkDown({ content }) {
  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: CustomH1,
          p: CustomP,
          img: CustomImg,
          code: CustomCode,
          a: CustomLink,
        }}
      >
        {content}
      </ReactMarkdown>
    </>
  );
}
