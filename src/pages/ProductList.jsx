import { useState,useEffect } from "react";
import { Header } from "../components/Navbar";
import {Api} from '../Networking/api'
import { Carditem } from "../components/CartItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "react-bootstrap";
import '../App.css'
export const ProductList =()=>{
    const [product,setProduct]=useState([]);
    const [ skip, setSkip]= useState(0);
    const [hasMore, setHasMore] = useState(true);

    const fetch = async()=>{
        await new Promise(resolve => setTimeout(resolve, 500));
        const res = await Api(skip);
        if(res.products.length === 0){
            setHasMore(false);
            return;
        }
        setProduct(prev => [...prev, ...res.products]);
        setSkip(prev => prev+10);
    };

    useEffect(()=>{
        fetch();
    },[]);

    // useEffect(()=>{
    //     Api()
    //     .then(res=>{
    //         setProduct(res.products)
    //     })
    //     .catch(error=>console.log(error));
    // },[])

    return(
        <>
        <Header/>
        {console.log (product)}
        <InfiniteScroll dataLength={product.length} next={fetch} hasMore={hasMore}
        loader={<div className="loading">
        <Spinner animation="border" variant="warning" style={{ width: '4rem', height: '4rem' }}/>
        </div>}
        >
        <Carditem data={product}/>
        </InfiniteScroll>
        
        </>
    );
};