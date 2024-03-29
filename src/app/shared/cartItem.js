import React from "react"
import { useSelector } from "react-redux";
import cartReducer from "../redux/reducers/cartReducer/cartReducer";




const CartItem = ({ product, productId }) => {

    const cartStore = useSelector(state => state.cartReducer)

  
    console.log("cart Test", cartStore)

    return (
        cartStore.menuItems.map(product =>  
            {
                return (
                    <div className="media new">
                        <div className="az-img-user az-img-user-menu ">
                            <img
                            src={product.image}
                            alt={product.title}
                            ></img>
                        </div>
                        <div className="media-body">
                            <p>
                            {product.title}
                            </p>
                            <p>
                            Qty: {
                                product.duplication
                            }
                            </p>
                            <span>EGP {product.price}</span>
                           
                        </div>
                        
                        </div>

                        
                )
                
            }
        
        )

    )
}

export default CartItem;