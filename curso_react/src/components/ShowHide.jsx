import React, { useState } from 'react'

function ShowHide() {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

    return (
    <div>
        <button onClick={handleClick}>{show ? "Hide" : "Show"} </button>
        {show && <h2>👽</h2>}
        {show || <h2>🧔</h2>}
    </div>
    )
}

export default ShowHide