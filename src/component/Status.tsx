interface StausProps{
    /////this way of writing is called union of string littreal as status type
    status : 'loading' | 'sucess' | "error"
}
function Status(props:StausProps) {
    let message 
    
    if(props.status === "loading"){
        message = "Loading"
    }else if(props.status === "sucess"){
        message = "Data Fetching succesful"
    }else if( props.status === "error"){
        message = " Error Fetching data"
    }


  return (
    <div>
       <h2>  Status - {message}   </h2>
     

    </div>
  )
}

export default Status