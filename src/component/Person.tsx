//same thing we do with type key word so its make no error


interface Personprops {
    name:{
        first:string
        second:string
    }
}
function Person(props:Personprops) {
  return (
    <div>
        <h1>{props.name.first} {props.name.second} </h1>
    </div>
  )
}

export default Person