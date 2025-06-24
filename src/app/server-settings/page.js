"use client";
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Overview from './components/ServerSettings/Overview';
import Role from './components/ServerSettings/Role';
import Members from './components/ServerSettings/Members';
import InvitePeople from './components/ServerSettings/InvitePeople';
import Leave from './components/ServerSettings/Leave';
import styles from './styles/ServerSettings.module.css';

const TAB_COMPONENTS = {
  Overview: <Overview />,
  Role: <Role />,
  Members: <Members />,
  'Invite people': <InvitePeople />,
  Leave: <Leave />,
};

export default function ServerSettingsPage() {
  const [selected, setSelected] = useState('Overview');
  const Content = TAB_COMPONENTS[selected] || <Overview />;

  return (
    <div className={styles.container}>
      <Sidebar selected={selected} onSelect={setSelected} />
      <main className={styles.mainContent}>
        {Content}
      </main>
    </div>
  );
}
