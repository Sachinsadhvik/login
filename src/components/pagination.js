import React from 'react';
import {Pagination,PaginationItem,PaginationLink,} from 'reactstrap';
function Paginate({totalitems, postperPage, pageFun,current}) {
 const pageNumbers=[];                       
for(let i=1;i<Math.ceil(totalitems/postperPage);i++){
    pageNumbers.push(i)
}



    return (
             <div style={{
            display: 'block', width: 700, padding: 30
        }}>
            <Pagination>
            <PaginationLink >start</PaginationLink>
                { pageNumbers.map((numbers)=> (<PaginationItem>
                    <PaginationLink onClick={()=>pageFun(numbers)}  >{numbers}</PaginationLink>
                </PaginationItem>)
                )}
 <PaginationLink  >end</PaginationLink>
            </Pagination>
        </div >
    );
}

export default Paginate;