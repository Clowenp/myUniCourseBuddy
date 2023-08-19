import './group-card.css'
export default function GroupCard(props){
    return(
        <div className="group-card">
            <h3 className='group-name'>{props.name}</h3>
            <div className='group-members'> 
                {props.members}
            </div>
        </div>
    )
}