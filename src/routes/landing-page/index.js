import './style.css'
import { useState, useRef, useEffect } from 'react'

function LandingPage() {

    const [id, setId] = useState("")
    const [productData, setProductData] = useState({})

    const inputId = useRef("")

    useEffect(() => {
        const getProducts = async () => {
                try {
                    const url = `https://dummyjson.com/products/${id}`
                    console.log("URL: ", url)
                    const response = await fetch(url)
                    const data = await response.json()
                    setProductData(data)
                }
                catch(error){
                    console.error(error)
                } 
            }
            getProducts()
        }, [id])
    
    useEffect(() => {
        console.log("Product Data: ", productData)
    }, [productData])

    const updateId = async () => {
        setId(inputId.current.value)
    } 

    return (
        <section className='card-container'>
            <h1>Product ID</h1>
            <div className='input-container'>
            <label htmlFor='id'>ID: </label>
            <input type="number" placeholder='Enter ID' name='id' ref={inputId}/>
            </div>
            <button onClick={updateId}>Get ID</button>
            {
                productData.id === Number(id) && <>
                <p className='id-info'>Your entered ID is {inputId.current.value}</p>
                <div className="card">
                    <img src={productData.images[0]} alt="Denim Jeans" style={{width:"100%"}}/>
                    <h1>{productData.title}</h1>
                    <p className="price">${productData.price}</p>
                    <p>{productData.description}</p>
                    <p><button>Add to Cart</button></p>
                </div>
                </>
            }
        </section>
    )
}

export default LandingPage