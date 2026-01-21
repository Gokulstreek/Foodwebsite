import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import './FoodDisplay.css'
import Fooditem from "../Fooditem/Fooditem";
import { fetchFoodItems } from "../../Redux/Food.js";

const FoodDisplay = ({category}) => {
  const dispatch = useDispatch();
  const{foodList,loading} =useSelector((state)=>state.food);
  useEffect(() => {
    dispatch(fetchFoodItems());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return(
    <div className="food-display" id="food-display">
      <h2> Top Food near You </h2>
      <div className="food-display-list">
        {foodList.map((item,index)=>{
          if(category==="All" || item.category===category){
            return <Fooditem key={index} _id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
          }
        }
  )
}
</div>
</div>
  )
}

export default FoodDisplay;
