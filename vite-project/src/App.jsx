import { useState } from 'react'

import './App.css'

function App() {
  const content = [
[
  "salem alaykom",
  "hedhi first section",
  "beslema"
],
[ "salem alaykom",
"hedhi second section",
"beslema"],
[ "salem alaykom",
"hedhi third section",
"beslema"]
  ];

  const[currentIndex,setCurrentIndex]=useState(0)
  return(
<>
<h1>Choose your section</h1>
  <button className={currentIndex===0? "active":""} onClick={()=>setCurrentIndex(0)}>First Section?</button>
  <button className={currentIndex===1? "active":""} onClick={()=>setCurrentIndex(1)}>Second Section?</button>
  <button className={currentIndex===2? "active":""} onClick={()=>setCurrentIndex(2)}>Third Section?</button>
  {content[currentIndex].map(e=>
  <li>{e}</li>
 )}
 </>

 )
}

export default App
