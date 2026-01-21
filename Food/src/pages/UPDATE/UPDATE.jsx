import React, { useEffect, useState } from 'react'
import './UPDATE.css'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
const UPDATE = () => {
  const id = useParams().id

  const[editData, setEditData]=useState({
    name:"",
    image:"",
    Category:"",
    price:""
  })

  useEffect(()=>{
    fetch(`http://localhost:5014/getfood/${id}`).then((res)=>res.json()).then((data)=>{
      setEditData(data)
    })
  })

  const handleSubmit = (e)=>{
    e.preventDefault()

    const form = e.target
    const name = form.name.value
    const image = form.image.value
    const price = form.price.value
    const Category = form.Category.value
    const description = form.description.value

    if(name==="" || image==="" || price==="" || Category==="" || description===""){
      toast.error("Please fill all the fields")
      return
    }

    const productData = {
      name,
      image,
      price,
      Category,
      description
  }

  fetch(`http://localhost:5014/Updatefood/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
      
    },
    body:JSON.stringify(productData)
  }).then((res)=>res.json()).then((data)=>{
    toast.success("Product updated successfully")
    window.location.href="/ADMIN/LIST"
  })

}
  return (
    <div className='update'>
      <form className='flex-col' onSubmit={handleSubmit}>
        <div className="img-update flex-col">
          <label value="image">Image</label>
          <input type='text' name='image' id='image' defaultValue={editData.image}/>
        </div>

        <div className="add-porduct-description flex-col">
          <label value="description">Product description</label>
          <textarea name='description' id='description' defaultValue={editData.description}></textarea>
        </div> 

        <div className="update-product-name flex-col">
          <label value="name">Product Name</label>
          <input type='text' name='name' id='name' defaultValue={editData.name}/>
        </div>
        <div className="update-category-price">
          <div className="update-category flex-col">
            <label value="Category">Product Category</label>
            <select name="Category" id="Category" defaultValue={editData.Category}>
              <option value="Salad">Salad</option>
              <option value="Roll">Roll</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="pure Veg">pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
        </div>
        <div className="update-price flex-col">
          <label value="price">Update Product price</label>
          <input type='text' name='price' id='price' defaultValue={editData.price}/>
        </div>
        <button type='submit' className="update-btn">Update</button>
      </form>
    </div>
  )
}

export default UPDATE
