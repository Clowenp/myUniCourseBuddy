import './groupinvite.css'
export default function GroupInvite(props) {
    let getLink = () => {
        return "CmuasI21E9";
    }
    return (
        <div className="group-invite">
            <h1>Group Created!</h1>
            <p>Invite your friends to join your group!</p>
            <div className="group-join" >
                <h3>{props.groupName}</h3>
                <div className="join-link">
                    {getLink()}
                </div>
            </div>
        </div>
    )
}