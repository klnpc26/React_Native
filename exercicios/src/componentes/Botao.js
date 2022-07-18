import React from "react";
import { Button } from "react-native";

export default function(props)
{
    function Executar()
    {
        console.warn("Exec 1!!!")
    }
    return (
        <>
            <Button title="Executar 1" onPress={Executar}/>
            <Button title="Executar 2" onPress={function(){
                console.warn("Exec 2!!!")
            }}/>
            <Button title="Executar 2" onPress={() =>console.warn("Exec 2!!!")}/>    
        </>
    )
}