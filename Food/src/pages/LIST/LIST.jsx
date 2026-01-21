import './LIST.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import axios from "axios"
// import {toast} from "react-toastify"
const LIST = () => {

  const[List,setList]=useState([]);
   
  //const id=useParams().id;
  //useEffect(()=>{
  // fetch(`http://localhost:5014/getfood${id}`).then((res)=>res.json()).then((data)=>{
  //   setList(data);})
  //})  
  // const productData={
  //   name:"",
  //   image:"",
  //   price:"",
  //   Category:""
  // }
  





  // const fetchList=async()=>{
  // const response =await axios.get(`${url}/api/food/list`)
  //   // console.log(response.data)
  // if(response.data.success)
  // {
  //   setList(response.data.data)
  // }
  // else{
  //   toast.error("Error")
  // }
  // }
  //  const removeFood=async(foodId)=>{
  //   // console.log(foodId);
  //   const respone =await axios.post(`${url}/api/food/remove`,{id:foodId});
  //   await fetchList();
  //    if(respone.data.success)
  //    {
  //     toast.success(respone.data.message)
  //    }
  //    else{
  //     toast.error("Error");
  //    }
  //  }
  // useEffect(()=>{
  //   fetchList();
  // },[])

  useEffect(()=>{
    fetch("http://localhost:5014/getfood").then((res)=>res.json()).then((data)=>{
      setList(data);})
  })

  const deleteFood = (id)=>{
    fetch(`http://localhost:5014/getfood/${id}`,{
      method:"DELETE"
    }).then((res)=>res.json()).then((data)=>{
      toast.success("Food Item Deleted Successfully")
      setList((prevlist) => prevlist.filter((food)=>food._id!==id))
    })
  }
  return (
    <div className='list add flex-col'>
     <p>The food list are:</p>
     <div className="list-table">
      <div className="list-table-format title">
        <b>Image</b>
        <b>Name</b>
        <b>Description</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div> 
      {
        List.map((food)=>(
          <div className="list-table-format data" key={food._id}>
            <img src={food.image} alt={food.name} />
            <p>{food.name}</p>
            <p>{food.description}</p>
            <p>{food.Category}</p>
            <p>{food.price}</p>
            <Link to={`/ADMIN/UPDATE/${food._id}`}><button className='remove-btn' >Edit</button></Link> 
            <button className='remove-btn' onClick={()=>deleteFood(food._id)}>Remove</button>
          </div>
        ))
      }
     </div>
    </div>
  )
}

export default LIST