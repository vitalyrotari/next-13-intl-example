'use client'
import {useCallback, useState} from 'react';

interface ClientOnlyProps {
    title: string
}

export const ClientOnly = ({title}: ClientOnlyProps) => {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        setCount((prevState) => prevState + 1)
    }, [])


    return (
        <div className="bg-white border shadow-md rounded-md p-8">
            <h2 className="text-5xl text-center mb-3">{title}</h2>
            <h4 className="text-2xl text-center mb-2">{count}</h4>
            <div className="flex items-center justify-center">
                <button className="border rounded-sm bg-amber-50 px-6 py-2" type="button" onClick={handleClick}>+1</button>
            </div>
        </div>
    )
}