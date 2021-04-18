import React, { useState } from 'react';
import CartHeader from './CartHeader';
import CartItemList from './CartItemList';
import CartFooter from './CartFooter';

function Cart(){
const [data, setItem]= useState({
    items:[{
        image: 'https://www.biochefkitchen.com/pub/media/catalog/product/cache/3d86b86a707bb5af751a083b9a1566a8/b/i/biochef-living-food-blender-red-fruit-1600x1600.jpg',
        price:1399,
        quantity:"1",
        name:'Blander',
        color:'Jet Black / red'
    },
    {
        image: 'https://www.derekis.lt/images/uploader/ra/rankinis-smulkintuvas-artisan-5ksb5553ebu-cobalt-blue.jpg',
        price:2499,
        quantity:"2",
        name:'Blander',
        color:'Jet Black / red'
    }],
    subtotal:0
});
let sum=0;
for (let i = 0; i <data.items.length; i++) {
     sum+=data.items[i].price;
}
    data.subtotal=sum;

    return(
        <div className="Products">
            <CartHeader/>
            <CartItemList data={data.items}/>
            <CartFooter data={data.subtotal}/>
        </div>
    )
}

export default Cart;