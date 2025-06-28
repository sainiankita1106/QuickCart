import { Header } from "../components/Navbar";
import { useEffect,useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faShoppingCart} from "@fortawesome/free-solid-svg-icons";

export const Cart=()=>{
    const cartItems=useSelector(state=>state.cart.cartItems);
    const dispatch = useDispatch();
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const fetchAll = async()=>{
            const data = await Promise.all(cartItems.map(id=>fetch(`https://dummyjson.com/products/${id}`)
            .then(res=>res.json()
        )
        ));
        setProducts(data);
        };
        if(cartItems.length > 0)
            fetchAll();
        else
        setProducts([]);
    },[cartItems]);

    const subtotal = products.reduce((acc,item)=>acc+item.price,0).toFixed(2);

    return(
       <>
       <Header/>
       <div className="d-flex p-4 gap-4">
      <div style={{ maxHeight: '85vh', overflowY: products.length > 0 ? 'auto' : 'visible', flex: 3 }}>
        <h2>Shopping Cart</h2>
         {products.length === 0?(
            <div className="" style={{height:"85vh"}}>
                <h3>Your cart is empty<FontAwesomeIcon icon={faShoppingCart}/></h3>
                <p className="text-muted">Looks like you haven't added anything yet</p>
                <Button variant="warning" href="/">Go to Home</Button>
            </div>
        ):(

        products.map(item => (
          <div key={item.id} className="bg-white d-flex justify-content-between p-3 mb-3 rounded shadow-lg">
            <div className="d-flex gap-3">
              <img src={item.thumbnail} alt={item.title} style={{ width: 100, height: 100, objectFit: 'contain' }} />
              <div>
                <h5>{item.title}</h5>
                <p className="mb-1">{item.brand}</p>
                <p className="fw-bold">${item.price} <span className="badge bg-warning text-dark">{item.discountPercentage}% OFF</span></p>
                <p>In Stock</p>
              </div>
            </div>
            
            <Button variant="light" onClick={() => dispatch(removeFromCart(item.id))}>
              <FontAwesomeIcon icon = {faTrash} style={{color:'red'}}/>
            </Button>
          </div>
        ))
    )}
      </div>
      <div className="bg-white p-4 rounded shadow" style={{ flex: 1, height: 'fit-content' }}>
        <h4>Subtotal ({cartItems.length} items): <span className="text-success">${subtotal}</span></h4>
        <Button variant="warning" className="mt-3 w-100">Proceed to Checkout</Button>
      </div>
    </div>
    </>
  );
};