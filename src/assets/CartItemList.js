import cartItemListCss from './CartItemListCss.css';
import CartItem from './CartItem';


function CartItemList(props){
    return(
        <> 
           {props.data.map((elem,index)=> <CartItem key={index} dataProduct={elem}/>)}
      
        </>
    )
}
export default CartItemList;