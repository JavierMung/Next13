import Link from "next/link"
import styles from '../../styles/NavBar.module.css'
import { HiAcademicCap, HiHome, HiUser, HiEnvelope } from "react-icons/hi2";

export function Navigation() {

    const links = [
        {
            label: "Home",
            route: "/",
            icon: <HiHome size={"1.5em"} />
        },
        {
            label: "About Me",
            route: "/about",
            icon: <HiUser size={"1.5em"} />
        },
        {
            label: "Skills and experience",
            route: "/skillsandexperience",
            icon: <HiAcademicCap size={"1.5em"} />
        },
        {
            label: "Contact",
            route: "/contact",
            icon: <HiEnvelope size={"1.5em"} />
        }
    ]
    return (
        <>
            <header>
                <nav className={styles.header}>
                    <ul className={styles.navbar}>
                        {links.map(({ label, route, icon }) => {
                            return (
                                <>
                                    <li key={label} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100px", height: "50px" }} >
                                        <Link className={styles.menu} href={route} >
                                            {icon}
                                            {/*
                                               <span style={{ fontSize: "14px", margin: "10px" }}>{label}</span>                                              */
                                            }
                                        </Link>
                                    </li>


                                </>
                            )
                        })}
                    </ul>
                </nav>
            </header>
        </>
    )
}