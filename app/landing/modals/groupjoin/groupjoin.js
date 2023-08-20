import './groupjoin.css'
export default function GroupJoin(props){
    let exitModal = () => {
        props.setModal("none");
    }
    return(
        <div className="group-join">
            <div className="exit-modal" onClick={exitModal}>X</div>
            <h3>Enter your invite link!</h3>
            <form>
                <input type="text" placeholder="Invite Code"></input>
                <button type="submit" className="submit-button" name="submit-button">Join</button>
            </form>
        </div>
    )
}