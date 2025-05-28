'use client'

import { useState } from "react"

export default function ListarProdutos() {

    const [products, setProducts] = useState([
        {preco: 1, produto: "Pão"},
        {preco: 2, produto:"Batata"},
        {preco: 3, produto:"Amendoim"}
    ])

    return (
        <div>
            <h1>Lista de produtos</h1>
            <ul>

                {products.map(product => (
                    <li>Produto: {product.produto} Preço: {product.preco}</li>
                ))}
            </ul>
        </div>

    )

}