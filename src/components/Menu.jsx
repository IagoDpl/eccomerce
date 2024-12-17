"use client"
import { useState } from "react"
import Image from "next/image"


const Menu = () => {

    const [open, setOpen] = useState(false)

    return (
        <><div className="">Menu</div><Image src="/menu.png" /></>
    )
}

export default Menu