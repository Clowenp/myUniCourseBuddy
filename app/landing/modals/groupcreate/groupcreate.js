import './groupcreate.css'
export default function GroupCreate(props){
    let styles = {
        display: props.showCreate ? "flex": "none",
      }
    let createGroup = () => {
        props.setCreate(false);
        props.setInvite(true);
    }
    return(
        <div className="group-create" style={styles}>
            <h3 className="group-create-title">Create a Group</h3>
            <form className='creategroup'>
                <input type="text"
                    name="groupname"
                    placeholder="Group Name"
                    className="group-name-textbox" />
                <button type="submit" className='group-create-submit' onClick={createGroup}>Create Group!</button>
            </form>
        </div>
    )
}