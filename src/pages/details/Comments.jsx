import React from 'react';
import Exit from "../../images/mobile/exit.svg"
import Button from "../../components/Button"
const Comments = () => {
    return <div className='w-[60%]'>
        <div className="flex justify-between">
            <p className="text-bold text-3xl">Comments modal</p>
            <Button >
                <img src={Exit} alt="exit" className='w-[50%]'/>
            </Button>
        </div>  
    </div>;
}



export default Comments;