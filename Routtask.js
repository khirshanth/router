import React,{useEffect, useState} from "react"

import  {BrowserRouter as Router,Switch,Link, Route} from "react-router-dom"
import Home from "./Home"
// import About from "./About"
// import Others from "./Others"
import {Datas} from "./courses"
function Routtask(){
       const[title,setTitle]=useState("")
       const[title1,setTitle1]=useState("")
       const[title2,setTitle2]=useState("")
    //   console.log(Data)
      // console.log(title)
      // console.log(title1)
      // console.log(title2)
   
      const item = Datas.find(item => item.num === 1);
      // console.log(item)
      const item1 = Datas.find(item => item.num === 2);
      const item2 = Datas.find(item => item.num === 3);
      useEffect(()=>{
        setTitle(item)
        setTitle1(item1)
        setTitle2(item2)
        
      })
      console.log(Datas)
      
    return(
        <div>
            {/* {Data.map((data,index)=>{
                 return(
                     setTitle(data.title)
                 )
            })} */}

            {/* <h1>{Data[0].title}</h1> */}
            {/* {Data.filter(x => x.id == "1").map((x,index)=>{
              return(
                setTitle(x)
              )
            })} */}
            
            <Router>
            <ul>
            <li>
              <Link  to="/"
                >Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/others">Users</Link>
            </li>
          </ul>
                <Switch>
                    <Route path="/" exact>
                         <Home state={title} />
                    </Route>
                    <Route path="/about">
                          <Home state={title1}/>
                    </Route>
                    <Route path="/others">
                          <Home  state={title2}/>
                    </Route>
                </Switch>
            </Router>
            
     </div>
    )
}


export default Routtask