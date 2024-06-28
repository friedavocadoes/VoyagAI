import React, { useState } from "react"

export default function Trial () {
    const [kek, setkek] = useState("TEST");

    function changer() {
        setkek("Working");
    }

    return (
        <>
            <button onClick={changer} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{kek}</button>
        </>
    )
}