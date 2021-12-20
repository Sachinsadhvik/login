import React from 'react';
import {
    Card, CardBody,
    CardTitle,Form,Button
  } from "reactstrap";
function Signup(props) {
    return (
        <Form  style={{
            display:'flex',
          alignItems:'center',
          justifyContent:'center',
          marginTop:'7%', 
          fontFamily: 'sans-serif'
        }}>
        <div>
         <Card style={{ width: "24rem", borderRadius: "5%", boxShadow: "3px 3px grey"}}>
                        <CardBody>
                            <CardTitle tag="h3" className="text-center" style={{fontFamily:"monospace",}}>Register</CardTitle>
                            <div className="input-group mb-3">
                          <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1" >Username</span> </div>
                <input type="username" name="username" className="form-control" placeholder="Enter username"/>
              </div>
        
              <div className="input-group mb-3">
                          <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Create</span> </div>
                <input type="username" name="username" className="form-control" placeholder="Password"/>
              </div>
              <div className="input-group mb-3">
                          <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Confirm</span> </div>
                <input type="username" name="username" className="form-control" placeholder=" Confirm Password"/>
              </div>
              
              <div className="text-center">  
                   <Button  href="/home" className="btn-dark">Register</Button>
                    </div>
                        </CardBody>
                    </Card>
                   
                </div>
           </Form>
    );
}

export default Signup;