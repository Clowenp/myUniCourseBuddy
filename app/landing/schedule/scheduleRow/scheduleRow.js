import { redirect } from 'next/dist/server/api-utils';
import './scheduleRow.css'
export default function ScheduleRow(props) {
    let time = "";
    let color = props.cellColor

    let cellClass = []

    for (let i = 1; i <= 5; i++) {
        let cellBackground = "split-background-"

        // if course one half and no course the second
        if (true) {
            // check for the class number
            //  each course will either be assigned 1,2,3,4 or 5
            if (true) {

                cellBackground += "1-"
            } else {

            }

            
            // check 
            if (true) {
                cellBackground += "1"
            } else {

            }
        } else if (true) { //all coloured

        } else {

        }
        cellClass[i] = color[i]
    }

    //hour
    time = Math.trunc(props.time)

    if (time > 12) {
        time = time - 12
    }
    time += ":"

    //minutes
    if (props.time % 1 !== 0) {
        time += "30"
    } else {
        time += "00"
    }

    if (props.time < 12) {
        time += `AM`;
    }
    else {
        time += "PM";
    }
    return(
        // <div className="schedule-row">
            <tr>
                <td className="half-background">{time}</td>
                <td className={cellClass[1]}>{props.courses[1]}</td>
                <td className={cellClass[2]}>{props.courses[2]}</td>
                <td className={cellClass[3]}>{props.courses[3]}</td>
                <td className={cellClass[4]}>{props.courses[4]}</td>
                <td className={cellClass[5]}>{props.courses[5]}</td>
            </tr>
        // </div>
    )
}