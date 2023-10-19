import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyCart = () => {
    const loaderData=useLoaderData()
    const [cartItem,setcartItem]=useState(loaderData)
    console.log(loaderData)

    const deleteItem=(id)=>{
        const remaining=cartItem.filter(item=>item._id!==id)

    Swal.fire({
        title: 'Are you sure,You Want To Delete?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:6868/mycart/${id}`,{
            method:"DELETE"
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.deletedCount>0){
              Swal.fire(
                'Deleted!',
                'Your Item has been deleted.',
                'success'
              )
              setcartItem(remaining)
            }
          })
          
        }
      })
    }
    return (
        <div className="overflow-x-auto my-10">
            <h1 className="text-center text-4xl font-bold text-green-500">Cart Items : {cartItem.length}</h1>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Photo</th>
        <th>Brand</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {
        cartItem.map(data=><tr key={data._id}>
            <td><img src={data.photo} alt="" /></td>
            <td>{data.brand}</td>
            <td>{data.name}</td>
            <td>{data.price}</td>
            <td><button onClick={()=>deleteItem(data._id)} className="btn btn-accent">X</button></td>
          </tr>)
      }
    </tbody>
  </table>
</div>
    );
};

export default MyCart;