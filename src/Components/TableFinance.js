import React from "react";
export default function Table({users}){
    return (
        <div className="mt-5">
        <h3 className="text-center header">Prior Pay Periods</h3>
        <table className="table table-bordered-success">
            
        <thead>
        
            <tr>
                <th>Paycheck</th>
                <th>Tax</th>
                <th>Total Tax</th>
                <th>Total Saving</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>    
        </thead>
         <tbody>
            {users.map((user,index) =>( //I could not get the users defined so I had to put it in({users})
            //up in the function Table, it was not the empty array I entered on App.js on line 27
             <tr key={index}>
             <td>{user.payCheck}</td>
             <td>{user.tax}</td>
             <td>{user.totalTax}</td>
             <td>{user.totalSaving}</td>
             
             <td><button onClick={() => handleDelete()}>Delete</button></td>

            <td>
            <button onClick={() => handleUpdate()}>Update</button></td>

             </tr>   
            ))}
            </tbody>
        </table>
        </div>
    )
}