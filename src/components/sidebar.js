import React from 'react';
import {Button} from 'reactstrap'
function Sidebar(props) {
    return (
        <div style={{ display:'flex',flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
            <Button href="/red">Red </Button>
            <Button href="/blue">Blue</Button>
            <Button href="/green ">Green</Button>
        </div>
    );
}

export default Sidebar;