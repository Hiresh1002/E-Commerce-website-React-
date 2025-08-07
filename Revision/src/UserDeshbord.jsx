import React from 'react'
import Product from './Product';

function UserDeshbord() {
  return (
    <div>

<form action="">
  Name:<input type="text" placeholder='Entre Your name'/><br />
  Email:<input type="text" placeholder='Enter Your Email'/><br />
  Password:<input type="text" placeholder=' Enter password'/><br />
  <button>Submit</button>
    <button>Update</button>
  <button>Delete</button>

</form>

<table >
  <tr><th>Name</th>
  <th>Email</th>
  <th>Password</th>
  <th>Action</th>
  
  
  </tr>
  
</table>


    </div>
  )
}

export default UserDeshbord;