import React, { useState } from "react"
import { IProduct } from "../models"

interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps) {
    const [details, setDetails] = useState(false);

    const btnClassN = details ? 'bg-yellow-400' : 'bg-blue-400';
    const btnClasses = ['py-2 px-4 border', btnClassN];
    
    return (
        <div className="border py-3 px-4 rounded flex flex-col items-center mb-2"> 
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p>{ product.title }</p> 
            <span className="font-bold">{product.price}</span>
            
            <button 
                onClick={() => setDetails(prev => !prev)}
                className={btnClasses.join(' ')}>
                
                { details ? "Hide Details" : "Show Details"}
            </button>
            
            {details && <div>
                <p>{ product.description }</p>
            </div>}
            
        </div>
    )
}