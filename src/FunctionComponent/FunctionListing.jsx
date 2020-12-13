import React from 'react'

function FunctionListing() {
    const userDate =[
        {name: 'fawad' , age: 20 , attendace:'true'},
        {name: 'kashif' , age: 30 , attendace:'false'},
        {name: 'humza' , age: 50 , attendace:'true'},
        {name: 'imran' , age: 40 , attendace:'true'},

    ]
    return (
        <div>
            <h1>This is Listing Component</h1>
            <table border='1px solid' margin='15px'>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Attendance</td>
                    </tr>
            </thead>
            <tbody>
            {
                userDate.map((item , i) => 
                  <tr key={i}>
                   <td>
                   {item.name}
                   </td>
                   <td>
                   {item.age}
                   </td>
                   <td>
                   {item.attendace}
                   </td>
                  </tr>
                )
            }
            </tbody>
            </table>
        </div>
    )
}

export default FunctionListing
