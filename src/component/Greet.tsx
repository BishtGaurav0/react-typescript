interface GreetProps {
    name :string
    //this question mark show it is optional that this prop is used or not 
    age ?: number
}

// This format is also written
// type GreetProps =  {
//     name :string.
//      age : number
// }

function Greet(props :GreetProps) {
  return (
    <div>Hello welcome  {props.name} ! you have {props.age} unread messages</div>
  )
}

export default Greet