import React, { useEffect, useState } from 'react';
import {Table} from 'reactstrap';
import Paginate from './pagination';
function Api(props) {
const[data,setData]= useState([]);
const[page,setPage]=useState(1);
const[postperPage]=useState(8);
useEffect(
()=>{
    fetch("https://jsonplaceholder.typicode.com/comments").then((response)=> response.json())
    .then(json=>setData(json)
   )  
    },[])
   
const lastItemIndex = page * postperPage
const firstItemIndex= lastItemIndex-postperPage;
const currentPage =data.slice(firstItemIndex,lastItemIndex);

const pageFun=(pageno)=>setPage(pageno)

    return (
        <div  style={{
            display: 'block', width: "75%", padding: 30
        }}>
            
                        { <Table bordered={true}> 
                <thead>
                    <tr>
                    <th>email</th>
                        <th>Name</th>
                        <th>Body</th>
                        
                    </tr>
                </thead>
                {
                    currentPage.map((post)=> (

    <tbody>
    <tr>
        <td>{post.email}</td>
        <td>{post.name}</td>
        <td>{post.body}</td>
    </tr>
    </tbody>
    ))} 
            </Table> }
            <Paginate totalitems={data.length} postperPage={postperPage} pageFun={pageFun} current={page}/>
        </div>
        
    );
}

export default Api;