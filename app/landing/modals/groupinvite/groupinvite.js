import './groupinvite.css'
export default function GroupInvite(props) {
    let getLink = () => {
        return "CmuasI21E9";
    }
    let copyLink = () => {
        navigator.clipboard.writeText(getLink());
    }
    let exitModal = () => {
        props.setModal("none");
    }
    return (
        <div className="group-invite">
            <div className="exit-modal" onClick={exitModal}>X</div>
            <h1>Group Created!</h1>
            <p>Invite your friends to join your group!</p>
            <div className="groups-join" >
                <div className="copy-text" onClick={copyLink}>Copy</div>
                {/* <h3>{props.groupName}</h3> */}
                <div className="join-link">
                    <p>{getLink()}</p>
                </div>
            </div>
        </div>
    )
}