import React from 'react';
import {
    Card, CardBody,Form,Button
  } from "reactstrap"; 
  

function Login(props) {


    return (
        <body style={{
height:'100vh',width:"100%", 
backgroundColor:'bisque'
          
        }}>
            <Form style={{
             display:'flex',
           alignItems:'center',
           justifyContent:'center',
           fontFamily: 'sans-serif' ,
           padding: '8%',
           opacity:'0.9'
         }}>
         
                     <Card style={{ width: "24rem", borderRadius: "5%", boxShadow: "4px 4px 4px 4px grey"}}>
                         
                         <CardBody>  
                    <div className="text-center">        
                    <img width="35%" src="https://cdn0.iconfinder.com/data/icons/education-volume-3-3/48/126-512.png    " alt=""/> 
                    </div> <br></br>
    
                 
                             <div className="input-group mb-3">
                           <div className="input-group-prepend">
                 <span className="input-group-text" id="basic-addon1" >Username</span> </div>
                 <input type="username" name="username" className="form-control" placeholder="Enter username"/>
               </div>
         
               <div className="input-group mb-3">
                           <div className="input-group-prepend">
                 <span className="input-group-text" id="basic-addon1">Password</span> </div>
                 <input type="username" name="username" className="form-control" placeholder="Password"/>
               </div>
               <div className="text-center">  
                    <Button  href="/home" className="btn-dark">Login</Button>
                   <hr  style={{
    color: 'yellow',
    backgroundColor: 'black',
    height: 0.5,
    borderColor : 'yellow'
}}/>
                <span style={{ fontStyle:"Italic"}}>Not on E-Library..? </span><a  href="/signup" className="btn-grey text-decoration-none"> Register</a>
                     </div>
                         </CardBody>
                     </Card>
                    
            
            </Form>
            </body>
           );
}

export default Login;