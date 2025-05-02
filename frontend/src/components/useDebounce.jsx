import {useEffect, useState} from 'react'

export default function useDebounce(value,delay){
    const [debounceValue,setDebounceValue]=useState(value)


    useEffect(()=>{
        setTimeout(()=>setDebounceValue(value),delay)


    },[value,delay])
    return debounceValue
}