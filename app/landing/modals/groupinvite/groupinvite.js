import './groupinvite.css'
export default function GroupInvite(props) {
    let getLink = () => {
        return "CmuasI21E9";
    }
    let styles = {
        display: props.showInvite ? "flex" : "none",
    }
    return (
        <div className="group-invite" style={styles}>
            <h1>Group Created!</h1>
            <p>Invite your friends to join your group!</p>
            <div className="group-join" style={styles}>
                <h3>{props.groupName}</h3>
                <div className="join-link">
                    {getLink()}
                </div>
            </div>
        </div>
    )
}