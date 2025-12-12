import React from 'react'
const ChildComponent = (props) => {
  return (
    <div>
        <h3>Parent Data: {props.data.username}</h3>
        <h3>Email :{props.email}</h3>
      <h1>This is Child Component</h1>
    </div>
  )
}
export default ChildComponent;