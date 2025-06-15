import React,{useEffect,useState} from 'react'
import axios from 'axios';

const Productlist = ({refresh}) => {
  const [products,setProducts] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:5800/api/products')
    .then((res)=>setProducts(res.data));
  },[refresh]);
  
  const updateStatus = async(id,status) => {
    await axios.put(`http://localhost:5800/api/products/${id}`,{status});
    refresh();
  }
  const deleteProduct = async(id) => {
    await axios.delete(`http://localhost:5800/api/products/${id}`);
    refresh();
  }

  return <>
    <div>
      {products.map(x=>(
        <div>
        <b>{x.name}</b> - {x.status}
        <select onChange={(e)=>updateStatus(x._id,e.target.value)} defaultValue={x.status}>
        <option>Pending</option>
        <option>Shipped</option>
        <option>Delivered</option>

        </select>
        <button onClick={()=>deleteProduct(x._id)}>Delete</button>
        </div>
        
      ))}
    </div>
  </>
}

export default Productlist