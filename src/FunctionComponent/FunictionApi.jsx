import React, { useEffect, useState } from "react";

function FunictionApi() {

    const [data , setdata] = useState([])

  useEffect(() => {

    fetch("http://dummy.restapiexample.com/api/v1/employees").then((data) => {
      data
        .json()
        .then((res) => {
          console.log(res);
          setdata(res.data)
        })
        .catch((error) => {
          console.log(error);
        });
    });

  }, []);

  return (
    <div>
      <h1>This is a Api component</h1>
      <table border="1px solid" width="34rem">
        <thead>
          <tr>
            <td>id</td>
            <td>employee_name</td>
            <td>employee_salary</td>
            <td>employee_age</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => 
<tr key={i}>
<td>
{item.id}
</td>
<td>
{item.employee_name}
</td>
<td>
{item.employee_salary}
</td>
<td>
{item.employee_age}
</td>
</tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default FunictionApi;
