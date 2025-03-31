interface OscarProp{
    children : React.ReactNode
}



function Oscar(props:OscarProp) {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Oscar