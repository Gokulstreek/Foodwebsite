import {useContext} from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { addToCart,removeFromCart } from '../../Redux/cartSlice'
import {selectCartItems} from '../../Redux/Cart.js'
import { useDispatch, useSelector } from 'react-redux'

const Fooditem = ({_id,name,price,description,image}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddToCart = () => {
    dispatch(addToCart(_id));
  }
  
   const handleRemoveFromCart = () => {
    dispatch(removeFromCart(_id));
   }
   
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
        { 
         !cartItems[_id]
         ?<img className='add' onClick={handleAddToCart} src={assets.add_icon_white} alt=""/>
         :<div className="food-item-conuter">
            <img onClick={handleRemoveFromCart} src={assets.remove_icon_red}/>
          <p>{cartItems[_id]}</p>
          <img onClick={handleAddToCart} src={assets.add_icon_green} alt=""/>
          </div>
        }
      </div>  
      <div className="food-item-info">
           <div className="food-item-name-rating">
             <p>{name}</p>  
              <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">
              {description}
            </p>
            <p className="food-item-price">
             ${price}
            </p>
      </div>
    </div>
  )
}
export default Fooditem



{/* // import React,{useState, useContext, useEffect} from 'react'
// import './Fooditem.css'
// import { useParams } from 'react-router-dom'
// import { assets } from '../../assets/assets' */}
// import { StoreContext } from '../../context/StoreContext'
// const Fooditem = ({_id,name,price,description,image}) => {
// //  const{cartItems,addToCart,removeFromCart} =useContext(StoreContext);
//   const id=useParams().id
//   const[cartItems, setCartItems]=useState({
//     name:"",
//     image:"",
//     price:"",
//     Category:"",
//     description:""
//   })

//   useEffect(()=>{
//     fetch(`http://localhost:5014/getfood/${id}`).then((res)=>res.json()).then((data)=>{
//       setCartItems(data)
//     })
//   })

//   const addToCart=(itemId)=>{
//    if(!cartItems[itemId]){
//     setCartItems(prev=>({...prev,[itemId]:1}))
//   }
//   else{
//     setCartItems(prev=>({...prev,[itemId]:prev[itemId]+1}) )
//   }
// }
// const removeFromCart=(itemId)=>{
//  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
// }   


//   return (
//     <div className='food-item'>
//       <div className="food-item-img-container">
//         <img className='food-item-image' src={image} alt="" />
//         { 
//          cartItems[id]
//               ?<img className='add' onClick={()=>addToCart(_id)} src={assets.add_icon_white} alt=""/>
//               :<div className="food-item-conuter">
//                 <img onClick={()=>removeFromCart(_id)} src={assets.remove_icon_red}/>
//                 <p>{cartItems[_id]}</p>
//                 <img onClick={()=>addToCart(_id)} src={assets.add_icon_green} alt=""/>
//                </div> 
//         }
//       </div>
//       <div className="food-item-info">
//            <div className="food-item-name-rating">
//              <p>{name}</p>
//              <img src={assets.rating_starts} alt="" />
//            </div>
//            <p className="food-item-desc">
//             {description}
//            </p>
//            <p className="food-item-price">
//             ${price}
//            </p>
//       </div>
//     </div>
//   )
// }

// export default Fooditem
