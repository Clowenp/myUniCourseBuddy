import './groupjoin.css'
export default function GroupJoin(props){
    return(
        <div className="group-join">
            <h3>Enter your invite link!</h3>
            <form>
                <input type="text" placeholder="Invite Code"></input>
                <button type="submit" className="submit-button" name="submit-button">Join</button>
            </form>
        </div>
    )
}