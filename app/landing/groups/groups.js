import './groups.css'
import GroupCard from './group-card/group-card.js'
export default function Groups(props){
    let groupsInfo = [{
        name: "Hackthe6ix Dream Team",
        members: ["Owen ", "Mateo ", "David ", "Kevin "]
    },
    {
        name: "Hackthe6ix Original Team",
        members: ["Ethan ", "Mateo ", "David ", "Kevin "]
    },
    {
        name: "CS Friends",
        members: ["Owen ", "David ", "Ryan ", "Kevin "]
    },
    {
        name: "Math Major Friends",
        members: ["Mateo ", "Bennie "]
    }
];
    let styles = {
        // overflowX: groupsInfo.length > 3 ? "scroll" : "hidden",
    }
    let groups = groupsInfo.map((group) => {
        return <GroupCard key={group.name} name={group.name} members={group.members}/>
    });
    let getCreate = () => {
        props.setModal("create");
    }
    let getJoin = () => {
        props.setModal("join");
        // console.log("jsdfd")
    }
    return(
        <div className="groups">
            <div className="button-group">
                <button className="buttons" id="create-group-button" onClick={getCreate}>Create Group</button>
                <button className="buttons" id="join-group-button" onClick={getJoin}>Join Group</button>
            </div>
            <div style={{overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className="group-cards" style={{...styles, ...{overflow:'auto'}}}>
                  {groups}
                </div>
            </div>
            

        </div>
    )
}