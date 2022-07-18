import React from "react";

import Filho from "./Filho"; // Comunicação direta

export default function (props) {
    var x = 13;
    var y = 100;
    
    return (
        <>
            <Filho a={x} b={y}/>
            <Filho a={x + 100} b={y + 200}/>
        </>
    )
}