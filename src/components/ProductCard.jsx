import { Carousel } from "react-bootstrap"
import { Card } from "react-bootstrap"
import { Badge } from "react-bootstrap"
import { Stack } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
export const ProductCard = (props) => {
    return (
        <>
            {console.log(props.data)}

            <div className="bg-light p-4 w-100 h-100 d-flex flex-row gap-3">
                <Card className="shadow w-50">
                    {props.data.images.length > 1 ? <Carousel variant="dark">
                        {props.data.images.map((item) => (
                            <Carousel.Item>
                                <img src={item} className="d-block mx-auto" style={{ height: "500px"}} />
                            </Carousel.Item>
                        ))}
                    </Carousel> : <div>
                        <img src={props.data.images} className="d-block mx-auto" style={{ height: "500px", objectFit :"contain" , maxWidth :"90%"}} />
                    </div>}
                </Card>
                <div>
                    <h1>{props.data.title}</h1>
                    <p className="mb-2">{props.data.brand}</p>
                    <Stack direction="horizontal" gap="2" className="mb-3">
                        <Badge bg="success" text="white">{props.data.availabilityStatus}</Badge>
                        <Badge bg="primary" text="white">{props.data.category}</Badge>
                    </Stack>
                    <p>{props.data.description}</p>
                    <span className="fw-bold fs-5">${props.data.price} </span>
                    <span className="text-decoration-line-through fw-bold text-muted me-1">${(props.data.price / (1 - (props.data.discountPercentage) / 100)).toFixed(2)}</span>
                    <Badge bg="danger" text="white" className="fs-6">{props.data.discountPercentage}% oFF</Badge>
                    <div className="mb-1 mt-4">
                    <div className="bg-white p-2 border-bottom"><span className="fw-bold">Rating: </span><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }}/>{props.data.rating}</div>
                    <div className="bg-white p-2 border-bottom"><span className="fw-bold">Stock: </span>{props.data.stock} items</div>
                    <div className="bg-white p-2 border-bottom"><span className="fw-bold">Dimensions: </span>{props.data.dimensions.width}W x {props.data.dimensions.height}H x {props.data.dimensions.depth}D</div>
                    <div className="bg-white p-2 border-bottom"><span className="fw-bold">Weight: </span>{props.data.weight} Kg</div>
                    <div className="bg-white p-2 border-bottom"><span className="fw-bold">Shipping: </span>{props.data.shippingInformation}</div>
                    <div className="bg-white p-2 border-bottom"><span className="fw-bold">Warranty: </span>{props.data.warrantyInformation}</div>
                    <div className="bg-white p-2 border-bottom"><span className="fw-bold">Return Policy: </span>{props.data.returnPolicy}</div>
                    <div className="bg-white p-2 border-bottom"><span className="fw-bold">SKU: </span>{props.data.sku}</div>
                    <div className="bg-white p-2 border-bottom"><span className="fw-bold">Tags: </span><Stack direction="horizontal" className="d-inline">
                        {props.data.tags.map((item,index)=>(
                        <Badge bg="secondary" text="white" key={index} className="mx-1">{item}</Badge>
                    ))}</Stack></div>
                    </div>
            </div>
        </div>
        <div className="bg-light">
            <h2 className="ms-4">🗣️Customer Reviews</h2>
          {
            props.data.reviews.map((item)=>(
                <div className="bg-white p-4 m-4">
                    <div className="d-flex flex-row justify-content-between text-light-emphasis"><span className="fw-bold fs-5"><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }}/>{item.rating} - {item.reviewerName}</span><span>{item.date} | {item.reviewerEmail}</span></div>
                    <div>{item.comment}</div>
                </div>
                
            ))
          }
        </div>
        </>
    )
}