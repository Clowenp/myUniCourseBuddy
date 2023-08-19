import './scheduleRow.css'
export default function ScheduleRow(props) {
    let time = "";
    if(props.time < 12){
      time = `${props.time}:00 AM`;
    }
    else if (props.time == 12){
        time = "12:00 PM";
    }
    else{
        time = `${props.time-12}:00 PM`;
    }
    return(
        // <div className="schedule-row">
            <tr>
                <td>{time}</td>
                <td> </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        // </div>
    )
}