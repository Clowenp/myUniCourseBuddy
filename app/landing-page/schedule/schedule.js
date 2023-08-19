// import './globals.css'
import './schedule.css'
import { Inter } from 'next/font/google'
import ScheduleRow from './scheduleRow/scheduleRow';
export default function Schedule(){
    let rowInfo = [];
    for(let i = 8; i <= 22; i++){
        rowInfo.push(i)
    }
    let rows = rowInfo.map((rowTime) => {
        return <ScheduleRow key={rowTime} time={rowTime}/>
    })
    return (
        <div className="schedule">
            <table className="schedule-table">
                <tr id="headings">
                    <th id="time-slots"></th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                </tr>
                {rows}  
            </table>
        </div>
    )
}