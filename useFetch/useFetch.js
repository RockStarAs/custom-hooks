import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data : null,
        isLoading : true,
        hasError : null,
    });
    const getFetch = async(url)=>{
        setState({
            ...state,
            isLoading : true,
        });
        const resp = await fetch(url);
        const data = await resp.json();
        setState({
            ...state,
            data,
            isLoading : false
        });
    };

    useEffect(() => {
        //*El callback que recibe useEffect no puede ser asincrono, pero si puede ejecutar funciones asincronas
        getFetch(url);
    }, [url])
    


    return {
        data : state.data,
        isLoading : state.isLoading,
        hasError : state.hasError,
    };
}
