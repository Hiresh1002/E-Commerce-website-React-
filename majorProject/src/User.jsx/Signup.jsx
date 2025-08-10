import React from 'react'

function Signup() {
  return (
<>
<h1>signup here</h1>
<form action="" className="space-y-5">
    <input type="text"  placeholder='Enter FirstName'  /> <br />
    <input type="text" placeholder='Enter LastName' /> <br />
    <input type="text" placeholder='Enter Email ID' /> <br />
    <input type="text"  placeholder='Enter Password'/> <br />
    <input type="text" placeholder='Enter Confirm Password' /> <br />
    <button>Signup</button>
</form>

</>  )
}

export default Signup