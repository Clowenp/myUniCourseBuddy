// import './globals.css'
import './schedule.css'
import { Inter } from 'next/font/google'
import ScheduleRow from './scheduleRow/scheduleRow';
export default function Schedule(){

    //colours, each course should be assignment a colour
    let colors = ["red", "orange", "green", "blue", "pink"]

    let rowInfo = [];
    for(let i = 8; i <= 22; i+=0.5) {
        rowInfo.push(i)
    }

    // sample data, each row
    

    let rows = rowInfo.map((rowTime) => {
        let background = []
        let course = []

        for (let i = 0; i <= 5; i++) {
            if (i == 0) {
                background[0] = rowTime
            }
            if (rowTime == 8.5 || rowTime == 9) {
                if (i == 2 || i == 4) {
                    background[i] = "red"
                    if (rowTime == 8.5) {
                        course[i] = "Math 235"
                    }
                }
                
            } else if (rowTime == 13 || rowTime == 13.5 || rowTime == 14) {
                if (i == 2 || i == 4) {
                    background[i] = "orange"
                    if (rowTime == 13.5) {
                        course[i] = "Stat 231"
                    }
                }
            } else if (rowTime == 12.5 || rowTime == 12) {
                if (i == 1 || i == 3 || i == 5) {
                    background[i] = "green"
                    if (rowTime == 12) {
                        course[i] = "Math 237"
                    }
                }
            } else if (rowTime == 10 || rowTime == 10.5 || rowTime == 11) {
                if (i == 1 || i == 3 || i == 5) {
                    background[i] = "blue"
                    if (rowTime == 10.5) {
                        course[i] = "CS 245"
                    }
                }
            } else if (rowTime == 14.5 || rowTime == 15) {
                if (i == 1 || i == 3 || i == 5) {
                    background[i] = "pink"
                    if (rowTime == 14.5) {
                        course[i] = "CS 246"
                    }
                }
            } else {
                background[i] = ""
            }
        }

        return <ScheduleRow key={rowTime} time={rowTime} cellColor={background} courses={course}/>
    })
    return (
        <div className="schedule">
            <table className="schedule-table vertical-borders">
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