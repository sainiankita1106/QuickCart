import { Row,Card, Col, Container, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import '../App.css';

export const Carditem=({data})=>{
    // const [toggle,setToggle] = useState({});
    // const handleToggle=(id)=>{
    //     setToggle((prev)=>({
    //         ...prev,
    //         [id]:!prev[id],
    //     }));
    // }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector(state=> state.cart.cartItems);

    const isInCart=(id)=>cartItems.includes(id);

    const handleToggle=(item)=>{
        if(isInCart(item.id)){
            dispatch(removeFromCart(item.id));
        }else{
            dispatch(addToCart(item.id));
        }
    };

    const handle =(id)=>{
        navigate(`/product-details/${id}`);
    }
    return(
        <>
        {/* {console.log(props.data)} */}
        <Container>
            <Row className="mt-3 justify-content-center">
                {data.map((item)=>(
                    <Col md={6} lg={4} className="mb-2" key={item.id}>

                    <Card className='h-100 py-0'>

                        <Card.Img variant='top'src={item.thumbnail} loading='lazy'className="card-img"onClick={()=>{handle(item.id)}} style={{cursor:"pointer"}}/>

                        <Card.Body>
                            <Card.Text className="fw-bold line-clamp mb-1">{item.title}||{item.description}</Card.Text>
                            <Card.Text className="mb-1" style={{color:'#FFD43B'}}><FontAwesomeIcon icon ={faStar}/>{item.rating}</Card.Text>
                            <Card.Text className="fw-bold mb-1">₹{item.price}
                                <span className="ms-2 text-muted">
                                     <s>₹{Math.round((item.price * 100) / (100 - item.discountPercentage))}</s>
                                </span>
                                <span className="text-success"> ({item.discountPercentage}% off)</span></Card.Text>
                            <Card.Text>FREE<span className="ms-1">{item.shippingInformation}</span></Card.Text>

                            {/* <Button variant={toggle[item.id]?"danger":"warning"} className="fw-bold" style={{width:"100%"}} onClick={()=>handleToggle(item.id)}>{toggle[item.id]?"Remove from Cart" : "Add to Cart"}</Button> */}
                            <Button variant={isInCart(item.id)?"danger":"warning"} className="fw-bold" style={{width:"100%"}}onClick={()=>handleToggle(item)}>{isInCart(item.id)?"Remove from cart":"Add to cart"}</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </Container>

        </>
    )
}