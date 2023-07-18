'use client'
import Input from "@/app/components/input/Input"
import { useState } from "react"

const PriceCalculator = () => {
    const [state , setState] = useState('')

    return(
        <Input value={state} onChange={(e)=>setState(e.target.value)}/>

    )
}
export default PriceCalculator;