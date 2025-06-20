import React, { useState } from 'react';
import './ServerSettings.css';
import Overview from './Overview';
import Members from './Members';

const ServerSettings = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return <Overview />;
            case 'members':
                return <Members />;
            case 'role':
                return <div className="coming-soon">Role management coming soon...</div>;
            case 'invite':
                return <div className="coming-soon">Invite people coming soon...</div>;
            case 'leave':
                return <div className="coming-soon">Leave server coming soon...</div>;
            default:
                return <Overview />;
        }
    };

    return (
        <div className="server-settings-layout">
            <aside className="server-settings-sidebar">
                <div className="sidebar-header">
                    <span className="sidebar-title">Server Settings</span>
                </div>
                <nav className="server-settings-nav">
                    <button
                        className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        Overview
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'role' ? 'active' : ''}`}
                        onClick={() => setActiveTab('role')}
                    >
                        Role
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'members' ? 'active' : ''}`}
                        onClick={() => setActiveTab('members')}
                    >
                        Members
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'invite' ? 'active' : ''}`}
                        onClick={() => setActiveTab('invite')}
                    >
                        Invite people
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'leave' ? 'active' : ''}`}
                        onClick={() => setActiveTab('leave')}
                    >
                        Leave
                    </button>
                </nav>
            </aside>
            <main className="server-settings-main">
                {renderContent()}
            </main>
        </div>
    );
};

export default ServerSettings;
