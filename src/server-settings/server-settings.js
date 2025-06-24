import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Overview from '../components/ServerSettings/Overview';
import Role from '../components/ServerSettings/Role';
import Members from '../components/ServerSettings/Members';
import InvitePeople from '../components/ServerSettings/InvitePeople';
import Leave from '../components/ServerSettings/Leave';
import styles from '../styles/ServerSettings.module.css';

export default function ServerSettingsPage() {
    const [selected, setSelected] = useState('Overview');

    let Content;
    switch (selected) {
        case 'Overview':
            Content = <Overview />;
            break;
        case 'Role':
            Content = <Role />;
            break;
        case 'Members':
            Content = <Members />;
            break;
        case 'Invite people':
            Content = <InvitePeople />;
            break;
        case 'Leave':
            Content = <Leave />;
            break;
        default:
            Content = <Overview />;
    }

    return (
        <div className={styles.container}>
            <Sidebar selected={selected} onSelect={setSelected} />
            <main className={styles.mainContent}>
                {Content}
            </main>
        </div>
    );
}
