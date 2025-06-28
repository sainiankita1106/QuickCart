import { Link } from "react-router-dom";
import { Navbar} from 'react-bootstrap';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
export const Header = ()=>{
    const cartCount = useSelector(state=>state.cart.cartItems.length);
    return(
        <>
        <header expand ="lg"className="d-flex gap-4 text-white bg-dark px-2 py-3 sticky-top">
        <Navbar.Brand href="#" className="text-white ms-2">QuickCart</Navbar.Brand>
        <Link to='/'className="link1">Home</Link>
        <Link to='/cart'className="link1">Cart</Link>
        <Link to='/cart' className="link1 ms-auto me-2">
        <FontAwesomeIcon icon={faCartShopping}/>Cart
        {cartCount>0 && (<sup className="ms-1 bg-primary rounded-circle px-2">{cartCount}</sup>)}</Link>
        </header>
        </>
    )
};