// import '../globals.css'
'use client'
import React from 'react';
import './page.css'
import GroupCreate from './modals/groupcreate/groupcreate';
import Schedule from './schedule/schedule.js';
import Groups from './groups/groups.js';
import { Inter } from 'next/font/google'
import GroupInvite from './modals/groupinvite/groupinvite';
import GroupJoin from './modals/groupjoin/groupjoin';
export default function Landing() {
  let [createState, setCreateState] = React.useState(false);
  let [inviteState, setInviteState] = React.useState(false);
  let [joinState, setJoinState] = React.useState(false);
  return (
    <html lang="en">
      <body>
      <GroupCreate 
      setCreate={setCreateState} 
      showCreate={createState} 
      showInvite={inviteState} 
      setInvite={setInviteState}/>
      <GroupInvite
        showInvite={inviteState}
        setInvite={setInviteState}
      />
      <GroupJoin
        showJoin={joinState}
        setJoin={setJoinState}
      />
        <Groups setCreate={setCreateState} setJoin={setJoinState} getJoin={joinState} />
        
        <Schedule/>
      </body>
    </html>
  )
}
