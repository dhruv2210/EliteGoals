import React, { useEffect , useState} from "react";
// import { Table } from "antd";
// import { BiEdit } from "react-icons/bi";
// import { AiFillDelete } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../features/product/productSlice";
// import { Link } from "react-router-dom";
import axios from "axios";

const Productlist = () => {
  const [product, setProduct] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/productsget");
      setProduct(data);
    };
    fetchdata();
  }, []);


// const columns = [
//   {
//     title: "SNo",
//     dataIndex: "key",
//   },
//   {
//     title: "Title",
//     dataIndex: "title",
//     sorter: (a, b) => a.title.length - b.title.length,
//   },
//   {
//     title: "Brand",
//     dataIndex: "brand",
//     sorter: (a, b) => a.brand.length - b.brand.length,
//   },
//   {
//     title: "Category",
//     dataIndex: "category",
//     sorter: (a, b) => a.category.length - b.category.length,
//   },
//   {
//     title: "Color",
//     dataIndex: "color",
//   },
//   {
//     title: "Price",
//     dataIndex: "price",
//     sorter: (a, b) => a.price - b.price,
//   },
//   {
//     title: "Action",
//     dataIndex: "action",
//   },
// ];

// const Productlist = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getProducts());
//   }, []);
//   const productState = useSelector((state) => state.product.products);
//   const data1 = [];
//   for (let i = 0; i < productState.length; i++) {
//     data1.push({
//       key: i + 1,
//       title: productState[i].title,
//       brand: productState[i].brand,
//       category: productState[i].category,
//       color: productState[i].color,
//       price: `${productState[i].price}`,
//       action: (
//         <>
//           <Link to="/" className=" fs-3 text-danger">
//             <BiEdit />
//           </Link>
//           <Link className="ms-3 fs-3 text-danger" to="/">
//             <AiFillDelete />
//           </Link>
//         </>
//       ),
//     });
//   }
//   console.log(data1);
  return (<>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Rating</th>
      {/* <th scope="col">Email</th> */}
    </tr>
  </thead>
  <tbody>
{
    product &&
    product?.data.map((user,i)=>(
        
  
            <tr key={i}>
              <td>{user.title}</td>
              <td>{user.price}</td>
              <td>{user.rating}</td>
              {/* <td>{user.email}</td> */}
            </tr>
         
        
    ))}
  </tbody>
</table>
</>
  );
};

export default Productlist;
