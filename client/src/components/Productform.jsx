import React,{useState} from 'react'
import axios from 'axios'

const Productform = ({onAdd}) => {
    const [name,setName] = useState('');


    const hs = async(e) =>{
        e.preventDefault();
        const res = await axios.post('http://localhost:5800/api/products',{name});
        onAdd(res.data);
        setName('');
        
    }
  return <>
    <form onSubmit={hs}>
    <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='name' required/>
    <br></br>
    <button type='submit'>Add Product</button>

    </form>
  </>
}

export default Productform