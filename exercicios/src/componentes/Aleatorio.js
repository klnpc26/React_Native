import React from "react";
import { Text } from 'react-native'

export default function ({min, max})
{  
    var arrayNumber = []
    var i = 0;

    for(min + 1; min < max; min++)
    {
        arrayNumber[i] = min;
        i++;
    }

    var aleatorio = Math.floor(Math.random() * arrayNumber.length);


    return <Text>O número aleatório é: {arrayNumber[aleatorio]}</Text>
}
