import { useState } from 'react';
import styles from '../../styles/Members.module.css';

// List of avatar images in your public folder
const avatarList = ['/avatar1.jpg', '/avatar2.jpg', '/avatar3.jpg'];

export default function Members() {
  const [members, setMembers] = useState([
    {
      id: 1,
      username: '@johndoe',
      roles: ['Admin'],
      joinDate: 'Jan 2024',
      avatar: '/avatar1.jpg'
    },
    {
      id: 2,
      username: '@sophiedee',
      roles: ['Member'],
      joinDate: 'May 2024',
      avatar: '/avatar2.jpg'
    },
    {
      id: 3,
      username: '@alexdev',
      roles: ['Moderator', 'Member'],
      joinDate: 'Mar 2024',
      avatar: '/avatar3.jpg'
    }
  ]);

  const [showAddMember, setShowAddMember] = useState(false);
  const [newUsername, setNewUsername] = useState('');

  const availableRoles = [
    { id: 1, name: 'Admin', color: '#ed4245' },
    { id: 2, name: 'Moderator', color: '#5865f2' },
    { id: 3, name: 'Member', color: '#43b581' }
  ];

  const handleKickMember = (memberId) => {
    setMembers(members.filter(m => m.id !== memberId));
  };

  const handleChangeRole = (memberId, newRole) => {
    setMembers(members.map(m => 
      m.id === memberId ? { ...m, roles: [newRole] } : m
    ));
  };

  const handleAddMember = () => {
    if (newUsername.trim()) {
      const newMember = {
        id: Date.now(),
        username: newUsername,
        roles: ['Member'],
        joinDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        avatar: avatarList[Math.floor(Math.random() * avatarList.length)] // Random avatar
      };
      setMembers([...members, newMember]);
      setNewUsername('');
      setShowAddMember(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Members</h1>
      
      <div className={styles.tableContainer}>
        <table className={styles.membersTable}>
          <thead>
            <tr>
              <th className={styles.usernameHeader}>USERNAME</th>
              <th className={styles.roleHeader}>ROLE(S)</th>
              <th className={styles.dateHeader}>JOIN DATE</th>
              <th className={styles.actionsHeader}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {members.map(member => (
              <tr key={member.id} className={styles.memberRow}>
                <td className={styles.usernameCell}>
                  <div className={styles.userInfo}>
                    <img 
                      src={member.avatar} 
                      alt="Avatar" 
                      className={styles.avatar}
                    />
                    <span className={styles.username}>{member.username}</span>
                  </div>
                </td>
                <td className={styles.rolesCell}>
                  <div className={styles.rolesList}>
                    {member.roles.map((roleName, index) => {
                      const role = availableRoles.find(r => r.name === roleName);
                      return (
                        <span 
                          key={index}
                          className={styles.roleBadge}
                          style={{ backgroundColor: role?.color || '#99aab5' }}
                        >
                          {roleName}
                        </span>
                      );
                    })}
                  </div>
                </td>
                <td className={styles.joinDateCell}>{member.joinDate}</td>
                <td className={styles.actionsCell}>
                  <div className={styles.actionButtons}>
                    <select 
                      className={styles.roleSelect}
                      onChange={(e) => handleChangeRole(member.id, e.target.value)}
                      defaultValue={member.roles[0]}
                    >
                      {availableRoles.map(role => (
                        <option key={role.id} value={role.name}>
                          {role.name}
                        </option>
                      ))}
                    </select>
                    <button 
                      className={styles.kickButton}
                      onClick={() => handleKickMember(member.id)}
                    >
                      Kick
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.addMemberSection}>
        {!showAddMember ? (
          <button 
            className={styles.addMemberButton}
            onClick={() => setShowAddMember(true)}
          >
            Add Members +
          </button>
        ) : (
          <div className={styles.addMemberForm}>
            <input
              type="text"
              placeholder="Enter username (e.g., @newuser)"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className={styles.addMemberInput}
            />
            <button 
              className={styles.confirmAddButton}
              onClick={handleAddMember}
            >
              Add Member
            </button>
            <button 
              className={styles.cancelButton}
              onClick={() => {
                setShowAddMember(false);
                setNewUsername('');
              }}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
