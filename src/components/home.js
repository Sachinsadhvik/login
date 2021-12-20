import React from 'react';
import { useState } from 'react';
import {Table, Button, Modal,
    ModalHeader, ModalBody,Form} from 'reactstrap';
    import { RiDeleteBin6Line } from 'react-icons/ri';
    import {FiEdit} from 'react-icons/fi';
    import {AiOutlineUserAdd} from 'react-icons/ai'
    import NavMain from './navbar'
var obj= [  ]
function Home(props) {
         
    const [modal, setModal] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    const [data ,setData]= useState(obj);
    const [formState, setFormState] = useState({
        name: '',
        age: ''
      });
      const createUser=()=>{
          obj.push({name:formState.name, age:formState.age})
      }
      const deleteName=(index)=>{
    setData(obj.splice(index,1))
    }

    const editUser=(index)=>{
obj.splice(index-1,1)
console.log(index)
setData(obj.push({name:formState.name, age:formState.age}))
        }

    // Toggle for Modal
    const toggle = () => setModal(!modal);
    const edited = () => setEdit(!edit);
    return (<>
    <NavMain/>
        <div >
             <div >
            <h3>User List <span style={{ marginLeft:"70%"}}> 
            <AiOutlineUserAdd size="50px" onClick={toggle}/></span>
            </h3>
        
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader
                    toggle={toggle}>Add User</ModalHeader>
                <ModalBody>
                <Form 
      onSubmit={(e) => {
        e.preventDefault();
        createUser();
        toggle()
      }}
    >
        <div>
         <input className="form-control"
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="text"
            placeholder="Name"
          /> <br></br>
         <input className="form-control"
            value={formState.age}
            onChange={(e) =>
              setFormState({
                ...formState,
                age: e.target.value
              })
            }
            type="text"
            placeholder="age"
          />
        </div> <br></br>
        <Button type="submit" className="btn btn-success ">Submit</Button>
      </Form>
                </ModalBody>
              
            </Modal>
        </div >
            <Table bordered={true} > 
                <thead>
                    <tr>
                    <th>S.No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                {obj.map(({age,name},index)=> (

<tbody>
    <tr>
        <td>{index +1}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td> <RiDeleteBin6Line onClick={()=>deleteName(index)}/></td>
        {/* <td><Button className="btn-danger" >Delete</Button></td> */}
        <td><FiEdit onClick={edited}/>
        <Modal isOpen={edit} toggle={edited}>
                <ModalHeader
                    toggle={edited}>Edit item</ModalHeader>
                <ModalBody>
                <Form 
      onSubmit={(e) => {
        e.preventDefault();
        editUser(index);
        edited();
      }}
    >
        <div >
         <input className="form-control"
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="text"
            placeholder="Name"
          /> <br></br>
         <input className="form-control"
            value={formState.age}
            onChange={(e) =>
              setFormState({
                ...formState,
                age: e.target.value
              })
            }
            type="text"
            placeholder="age"
          />
        </div> <br></br>
        <Button type="submit" className="btn btn-success ">Submit</Button>
      </Form>
                </ModalBody>
    
            </Modal>
        </td>
    </tr>
    </tbody>
    ))}
            </Table>
            <div style={{ display: 'block', padding: 30 }}>
    </div>
        </div>
        </>
    );
}

export default Home;