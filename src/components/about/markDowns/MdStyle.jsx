import { DarkModeContext } from "../../DarkModeProvider";
import { useContext } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function CustomH1({ children }) {
  const { isDarkMode } = useContext(DarkModeContext)
  const color = isDarkMode ? "text-white" : "text-[#000000]"
  return (
    <h1
      className={`${color} font-semibold text-[1.5em] md:text-[2.25em] my-4`}
    >
      {children}
    </h1>
  )
}

export function CustomP({ children }) {
  const { isDarkMode } = useContext(DarkModeContext)
  const color = isDarkMode ? "text-white" : "text-[#000000]"
  return (
    <p
      className={`${color}  md:text-[1.5em] mb-3 tracking-wide leading-[3rem]`}
    >
      {children}
    </p>
  )
}

export function CustomImg({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="rounded-lg my-4"
    />
  )
}

export function CustomCode({ language, children }) {
  const { isDarkMode } = useContext(DarkModeContext)
  const style = isDarkMode ? oneDark : oneLight
  return (
    <div className="my-4 rounded-md overflow-auto">
      <SyntaxHighlighter
        language={language}
        style={style}
        customStyle={{ padding: '20px', fontSize: '1rem', borderRadius: '8px' }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}
