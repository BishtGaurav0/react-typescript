interface PersonListprop{
    name :{
        first:string
        second:string
    }[]

    data:string[]
}

function PersonList(props : PersonListprop) {
  return (
    <div>
        {props.data.map((rank)=>{
            return (
                <h4 key={rank}  >{rank}  </h4>
            )
        })}         
      {props.name.map((names)=>{
        return(
            <h3 key={names.first}>{names.first}  {names.second}  </h3>

        )
      })}



    </div>
  )
}

export default PersonList