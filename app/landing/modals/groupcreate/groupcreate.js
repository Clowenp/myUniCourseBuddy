'use client'
import React, {useState} from 'react';
import './groupcreate.css'
export default function GroupCreate(props){
    // let styles = {
    //     display: props.showCreate ? "flex": "none",
    //   }
    let handleSubmit = (event) => {
        event.preventDefault();
        props.setModal('invite');
        //backend stuff
    }
    let handleChange = (event) => {
        setFormData(prev => {
            return prev+event.target.value;
        })
    }
    const [formData, setFormData] = useState("");
    return(
        <div className="group-create">
            <h3 className="group-create-title">Create a Group</h3>
            <form onSubmit={handleSubmit} className='creategroup'>
                <input type="text"
                    name="groupname"
                    placeholder="Group Name"
                    className="group-name-textbox" />
                <button type="submit" className='group-create-submit' >Create Group!</button>
            </form>
        </div>
    )
}