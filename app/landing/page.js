// import '../globals.css'
'use client'
import React from 'react';
import './page.css'
import GroupCreate from './modals/groupcreate/groupcreate';
import Schedule from './schedule/schedule.js';
import Groups from './groups/groups.js';
import GroupInvite from './modals/groupinvite/groupinvite';
import GroupJoin from './modals/groupjoin/groupjoin';
import Header from '../components/header'
export default function Landing() {
  let [createState, setCreateState] = React.useState(false);
  let [inviteState, setInviteState] = React.useState(false);
  let [joinState, setJoinState] = React.useState(false);
  let [modalState, setModalState] = React.useState("none");
  return (
    <div>
      <Header />
      <body>
        {modalState==="create" && <GroupCreate setModal={setModalState}/>}
        {/* <GroupInvite
          showInvite={inviteState}
          setInvite={setInviteState}
        /> */}
        {modalState==="invite" && <GroupInvite setModal={setModalState} />}
        {modalState==="join" && <GroupJoin setModal={setModalState}/>}
        <Groups setModal={setModalState} setCreate={setCreateState} setJoin={setJoinState} getJoin={joinState} />
        
        <Schedule/>
      </body>
      </div>
  )
}
