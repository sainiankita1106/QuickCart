import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { Header } from "../components/Navbar";
export const ProductDetail=()=>{
    const {id}=useParams()
    const [productdetail,setProductdetail] = useState(null);

    const fetchdetail = async(id)=>{
        try{
            const res = await fetch(`http://dummyjson.com/products/${id}`);
            const data = await res.json()
            setProductdetail(data)
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchdetail(id)
    },[id])
    return(
        <>
        {console.log(productdetail)}
        <Header/>
        {productdetail && <ProductCard data ={productdetail}/>}
        </>
    )
}