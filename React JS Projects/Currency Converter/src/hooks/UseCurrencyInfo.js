import { useEffect } from "react";
import { useState } from "react";


function UseCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    },  [currency])
    return data
}
export default UseCurrencyInfo




/*

how to design custom hooks?
hooks are nothing but a function. you write a function and export it. 

*/