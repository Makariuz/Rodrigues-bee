import './Admin.scss';

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../../context';


export function Admin() {

    const { addProduct } = useContext(AuthContext);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

 
      

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(name, price, image);
     
    }

    const uploadImage = (file) => {
        return axios.post(`${process.env.REACT_APP_BACKEND_URL}/products/upload`, file)
          .then(res => res.data)
          .catch((err) => console.log(err))
      };
    
    const handleFileUpload = async (e) => {

        const uploadData = new FormData();
        uploadData.append("image", e.target.files[0]);
      
        
        uploadImage(uploadData)
          .then(response => {
            setImage(response.path);
      
          })
          .catch(err => console.log("Error while uploading the file: ", err));
      };

     
    return (
        <div className='admin__page__container'>

        <div className='logo__left'>
        <div className='logo__left__img'>
        <img src="/assets/logo8.png" alt="" />
        </div>
       
        </div>

        <div className='admin__products__container'>
        <div className='admin__products'>
            <div className='add__product'>

           
            <div className='form__div'>
                <form onSubmit={handleSubmit}>
                <h2>Add Product</h2>
                    <label htmlFor='name'>
                        Name
                        <br/>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder='Name' 
                            value={name}
                            onChange={(e) => setName(e.target.value)}      
                            />
                    
                    </label>
                    <label htmlFor='price'>
                        Price
                        <br/>
                        <input 
                            type="number" 
                            name='price' 
                            placeholder='Price' 
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}  

                            />
                    </label>
                    <label htmlFor='file'>
                        Image
                        <br/>
                        <input 
                            type="file" 
                            name="image"
                            onChange={handleFileUpload}
                         />
                    </label>
                    <button type="submit"> Add </button>
                </form>
            </div>
            </div>

           {/*  <div className='change__product'>

            <h2>Change Product</h2>
            <label htmlFor='product__change'>
            Select product to change
            <select name='product__change'>
                <option> <li> this product 1 </li></option>
                <option> <li> this product 2 </li></option>
                <option> <li> this product 3 </li></option>
            </select>
                </label>
            </div>

            <div className='delete__product'>

            <h2>Delete Product</h2>
            <label htmlFor='product__delete'>
            Select product to delete
            <select name='product__delete'>
                <option> <li> this product 1 </li></option>
                <option> <li> this product 2 </li></option>
                <option> <li> this product 3 </li></option>
            </select>
                </label>
            </div>
            <div className='change__price'>

            <h2>Change Price</h2>
            <label htmlFor='product__price__change'>
            Select product to change price
            <select name='product__price__change'>
                <option> <li> this product 1 </li></option>
                <option> <li> this product 2 </li></option>
                <option> <li> this product 3 </li></option>
            </select>
                </label>
            </div> */}
        </div>

       
    </div>


        </div>
    )
}