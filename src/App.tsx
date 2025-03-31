import './App.css'
import Greet from './component/Greet'
import Heading from './component/Heading'
import Oscar from './component/Oscar'
import Person from './component/Person'
import PersonList from './component/PersonList'
import Status from './component/Status'

function App() {
  const personName ={
    first:"Karan",
    second:'kumar'
  }

  const personList =[
    {
      first:"Karan",
      second:'Singh'
    },
    {
      first:"Amar",
      second:'Singh'
    },
    {
      first:"Rohit",
      second:'kumar'
    }
  ]
  
  const persondata =[ "fist" , "second" , "third"  ]



  return (
    <>
      <Greet name = "vishwas" />
      <Person name ={personName} />
      <PersonList  name ={personList} data ={persondata}  />
      <Status status="loading"/>
      <Heading>Placeholder text </Heading>
      <Oscar>
        <Heading>Oscar goes to decaprio</Heading>
      </Oscar>
    </>
  )
}

export default App
