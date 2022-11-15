import { Navigation } from "./components/Navigation";
import styles from './MainContent.module.css'
import { AiOutlineMenuFold } from "react-icons/ai";
import BotonCerrar from "./components/BotonCerrar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Probando Next13</title>
      </head>

      <body style={{ margin: "0px" }}>
        <BotonCerrar/>
        <div className={styles.centerContent}>
          <Navigation />
        </div>
        <div className={styles.centerContent2}>
          {children}
        </div>
      </body>
    </html >
  )
}
