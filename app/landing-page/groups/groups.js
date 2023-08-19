'use client'
import './groups.css'
import GroupCard from './group-card/group-card.js'
import React from 'react'
import JoinTeam from './modals/join-team.js'
export default function Groups(){
    let groupsInfo = [{
        name: "Group 1",
        members: ["Person 1", "Person 2", "Person 3"]
    },
    {
        name: "Group 2",
        members: ["Owen", "Mateo", "David", "Kevin"]
    }];
    let groups = groupsInfo.map((group) => {
        return <GroupCard key={group.name} name={group.name} members={group.members}/>
    });

    return(
        <div className="groups">
            <div className="button-group">
                <button className="buttons" id="create-group-button">
                    Create Group
                </button>
                <button className="buttons" id="join-group-button">
                    Join Group
                </button>
            </div>
            <div className="group-cards">
                {groups}
            </div>

        </div>
    )
}