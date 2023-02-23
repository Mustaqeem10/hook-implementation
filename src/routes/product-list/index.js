import { useState, useEffect } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './style.css'

function ProductList() {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products/')
                const data = await response.json()
                setProductList(data.products)
                console.log("Fetched Product: ", productList)
            }
            catch (error) {
                console.error(error)
            }
        }
        fetchProducts()
    }, [])

    return (
        <>
        <section className="cards-container">
        {
            productList.length > 0 ? productList.map((product) => {
            return  (
                <div className="card" key={product.id}>
                    <LazyLoadImage src={product.images[0]} alt="Denim Jeans" style={{ width: "200px"}} />
                    <h1>{product.title}</h1>
                    <p className="price">${product.price}</p>
                    <p>{product.description}</p>
                    <p><button>Add to Cart</button></p>
                </div>
            )
        })
        :
        <h2 style={{textAlign: "center"}}>Loading....</h2>
        }
        </section>
        </>
    )
}

export default ProductList