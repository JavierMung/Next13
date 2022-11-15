"use client"
import styles from '../MainContent.module.css'
import Link from "next/link"
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from 'react';
import { HiAcademicCap, HiHome, HiUser, HiEnvelope } from "react-icons/hi2";

function BotonCerrar() {
    const links = [
        {
            label: "Home",
            route: "/",
            icon: <HiHome size={"4.5em"} />
        },
        {
            label: "About Me",
            route: "/about",
            icon: <HiUser size={"4.5em"} />
        },
        {
            label: "Skills and experience",
            route: "/skillsandexperience",
            icon: <HiAcademicCap size={"4.5em"} />
        },
        {
            label: "Contact",
            route: "/contact",
            icon: <HiEnvelope size={"4.5em"} />
        }
    ]
    const [cerrado, setCerrado] = useState(true)
    const cerrarMenu = () => {
        setCerrado(!cerrado)
    }
    return (
        <>
            <div className={cerrado ? styles.barraLateralMenuHide : styles.barraLateralMenuVisible}>
                <div style={{ border: "1px solid green" }} className={styles.botonCerrar}>
                    <div style={{ marginRight: "25px", cursor: "pointer" }}>
                        <button type={"submit"} className={styles.boton} onClick={cerrarMenu}>
                            <AiOutlineMenuFold size={"4em"} />
                        </button>
                    </div>
                </div>

                <div style={{ border: "1px solid black" }}>

                    <nav style={{ display: "flex", alignItems: "center", border: "1px solid red", height: "10%" }} >
                        <ul style={{ marginBottom: "100px", border: "1px solid black", width: "100%", padding:"0px", marginTop:"100px" }}>
                            {links.map(({ label, route, icon }) => {
                                return (
                                    <>
                                        <li style={{ marginBottom: "100px", border: "1px solid red", display: "flex", alignItems:"center" }} key={label}  >
                                            <div>

                                                <Link href={route} >
                                                    {icon}
                                                </Link>
                                            </div>
                                            <div style={{marginLeft:"20px", fontSize:"22px"}}>
                                            <p>{label}</p>
                                            </div>
                                        </li>


                                    </>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>


            <div className={cerrado ? styles.botonMenuEscondibleActive : styles.botonMenuEscondibleDesactive}>
                <div >
                    <button type={"submit"} className={styles.boton} onClick={cerrarMenu}>
                        <AiOutlineMenuUnfold size={"4em"} />
                    </button>
                </div>
            </div>
        </>);
}

export default BotonCerrar;