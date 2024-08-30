import { useContext } from "react";
import { DarkModeContext } from "./DarkModeProvider";

export default function Footer() {
  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <footer>
      <h2>
        Let&apos;s work together! <span>Contact Me</span>
      </h2>
      <ul>
        <li>
          <span>EMAIL</span> <a href="mailto:qayyax@gmail.com">qayyax@gmail.com</a>
        </li>
        <li>
          <span>LINKEDIN</span>
          <a href="https://www.linkedin.com/in/tife-olatunji-b12729296"
            target="_blank"
          >
            Tife Olatunji
          </a>
        </li>
        <li>
          <span>GITHUB</span>
          <a
            href="https://www.github.com/qayyax"
            target="_blank"
          >
            @Qayyax</a>
        </li>
      </ul>

      <div>
        <p><span>&copy;</span> Tife Olatunji. All rights reserved</p>
        <p>Designed by Marienoel Emechebe</p>
      </div>
    </footer>
  )
}
