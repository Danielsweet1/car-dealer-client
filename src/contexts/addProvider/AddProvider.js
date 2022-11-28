import React, { createContext, useState, } from 'react';
import axios from 'axios';



export const AddContext = createContext()
const AddProvider = ({children}) => {

   const [product, setProduct] = useState({})

  

    const handleAdd = id =>{
        axios.get(`https://car-dealer-server.vercel.app/myproducts/${id}`)
        .then(res=>{
            console.log(res.data)
            setProduct(res.data)
        })
        

    }

  

    const addInfo = {
        handleAdd,
        product
    }
    return (
        <AddContext.Provider value={addInfo}>
            {children}
        </AddContext.Provider>
    );
};

export default AddProvider;