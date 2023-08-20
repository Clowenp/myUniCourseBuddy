import './groups.css'
import GroupCard from './group-card/group-card.js'
export default function Groups(props){
    let groupsInfo = [{
        name: "Group 1",
        members: ["Person 1", "Person 2", "Person 3"]
    },
    {
        name: "Group 2",
        members: ["Owen", "Mateo", "David", "Kevin"]
    },
    {
        name: "Group 3",
        members: ["Ofan", "Mehmet", "Daud", "Kaibin"]
    }
];
    let styles = {
        // overflowX: "scroll",
        overflowX: groupsInfo.length > 3 ? "scroll" : "hidden",
    }
    let groups = groupsInfo.map((group) => {
        return <GroupCard key={group.name} name={group.name} members={group.members}/>
    });
    let getCreate = () => {
        props.setCreate(true);
    }
    let getJoin = () => {
        props.setJoin(true);
        console.log(props.getJoin)
    }
    return(
        <div className="groups">
            <div className="button-group">
                <button className="buttons" id="create-group-button" onClick={getCreate}>Create Group</button>
                <button className="buttons" id="join-group-button" onClick={getJoin}>Join Group</button>
            </div>
            <div className="group-cards" style={styles}>
                {groups}
            </div>

        </div>
    )
}