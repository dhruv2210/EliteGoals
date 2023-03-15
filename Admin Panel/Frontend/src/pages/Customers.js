import React, { useEffect , useState} from "react";
// import { Table } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { getUsers } from "../features/cutomers/customerSlice";
import axios from "axios";

const Customers = () => {
  const [register, setRegister] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/registerget");
      setRegister(data);
    };
    fetchdata();
  }, []);

  return (
    // <div>
    //   {/* <h3 className="mb-4 title">Customers</h3>
    //   <div>
    //     <Table columns={columns} dataSource={data1} />
    //   </div> */}

    // </div>
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col">DOB</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}

{
    register &&
    register?.data.map((user,i)=>(
        
  
            <tr key={i}>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.dob}</td>
              <td>{user.email}</td>
            </tr>
         
        
    ))}
  </tbody>
</table>

  );
};

export default Customers;
