import React, {useState } from 'react'
import './ADD.css'
import { assets } from '../../assets/assets'
// import axios from "axios"
import { toast } from 'react-toastify'
const ADD = () => {
  // const url="";
//   const[image,setImage]=useState(false);
//   const[data,setData]=useState({
//     name:"",
//     description:"",
//     price:"",
//     category:"Salad"
//   })
// const OnChangeHandler =(event) =>{
//  const name=event.target.name;
//  const value=event.target.value;
//  setData(data=>({...data,[name]:value}))
// }
// const onSubmitHandler =async(event)=>{
//  event.preventDefault();
//  const formData =new FormData();
//  formData.append("name",data.name)
//  formData.append("description",data.description)
//  formData.append("category",data.category)
//  formData.append("Price",Number(data.price))
//  formData.append("image",image)
//  const response =await axios.post(`${url}/api/food/add`,formData)
//  if(response.data.success)
//  {
//      setData({
//     name:"",
//     description:"",
//     price:"",
//     category:"Salad"
//   })
//   setImage(false)
//   toast.success(response.data.message)
//  }
//  else{
//     toast.error(response.data.message)
//  }
// }
// useEffect(()=>{
// console.log(data);
// },[data])

const handleSubmit = (event)=>{
  event.preventDefault()

  const form = event.target
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

fetch('http://localhost:5014/uploadfood',{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(productData)
}).then((res)=>res.json()).then((data)=>{
  toast.success("Product added successfully")
  form.reset()
  window.location.href="/ADMIN/LIST"
})
}
const [image, setImage] = useState(false);
  return (
    <div className='add'>
      <form className='flex-col' onSubmit={handleSubmit}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
              <label>Upload image</label>
              <input type="text" name='image' id='image' />
              {/* <input  type="file" name='image' id='image' /> */}
              {/* <label htmlFor="image">
                <img src={image?URL.createObjectURL(image):assets.upload_area}/>
              </label>
              <input onChange={(e)=>setImage(e.target.files[0])} type="file" name='image' id='image'/> */}
        </div>
        <div className="add-product-name flex-col">
            <label>product name</label>
            <input type='text' name='name' id='name'/>
        </div>
        <div className="add-porduct-description flex-col">
          <label>Product description</label>
          <textarea name='description' id='description'></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
           <p>Product category</p>
           <select name="Category" id="category">
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
          <div className="add-price flex-col">
            <label>Product price</label>
            <input type='text' name='price' id='price'/>
          </div>
        </div>
        <button type='submit' className='add-btn'>Add</button>
      </form>
    </div>
  )
}

export default ADD
