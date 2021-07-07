import React , {useState , useEffect , useCallback , useRef}from 'react'
import { Link } from 'react-router-dom'
import {ChildAMemo} from './Component/ChildA';
import {ChildA} from './Component/ChildA';
import { ChildB } from './Component/ChildB';

const AppFun = () => {
    console.log("this is from follow")
    const [count, setcount] = useState(0)
    const [city ,setCity]=useState("tehrean")
    useEffect(()=>{
        console.log('this is from useEffect')
        return ()=>{
            console.log('this from willUnmount function!')
        }
    },[count])

   
   const add=  useCallback(
    () => {
        setcount(pre=>pre+1)
    },
    [city],
)
   const   changeCity = () =>{
        this.setState({...this.state , city : "newCity"})
      }
      const callchild =useRef()
      const callchildB = useRef()
      const handleChild = ()=>{
          console.log(callchild)
          callchild.current.handleparent()
      }
      const handleChildB = ()=>{
        
     callchildB.current.callParentAlert()
    }
    return (
        <div>
            <h1>this is from function part</h1>
            <button onClick={()=>setcount(pre=>pre+1)}>add</button>
            <p>add this part {count}</p>

            <Link to="/about">About</Link>  
            <ChildAMemo city={city} add={add} ref={callchild} /> 
            <ChildB ref={callchildB}/>    
          
            <button onClick={handleChildB}>cccccc</button>      
            
            
        </div>
    )
}

export default AppFun
