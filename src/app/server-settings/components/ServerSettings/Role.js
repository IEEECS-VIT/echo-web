import { useState } from 'react';
import styles from '../../styles/Role.module.css';

const initialRoles = [
    { id: 1, name: 'Admin', color: '#ed4245', permissions: ['Manage Server', 'Ban Members'] },
    { id: 2, name: 'Moderator', color: '#5865f2', permissions: ['Kick Members', 'Manage Messages'] },
    { id: 3, name: 'Member', color: '#43b581', permissions: ['Send Messages'] },
];

export default function Role() {
    const [roles, setRoles] = useState(initialRoles);
    const [selectedRole, setSelectedRole] = useState(null);
    const [newRoleName, setNewRoleName] = useState('');
    const [newRoleColor, setNewRoleColor] = useState('#99aab5');

    // Add a new role
    const handleAddRole = () => {
        if (!newRoleName.trim()) return;
        setRoles([
            ...roles,
            {
                id: Date.now(),
                name: newRoleName,
                color: newRoleColor,
                permissions: [],
            },
        ]);
        setNewRoleName('');
        setNewRoleColor('#99aab5');
    };

    // Select a role to edit
    const handleSelectRole = (role) => {
        setSelectedRole(role);
    };

    // Edit selected role
    const handleEditRole = (field, value) => {
        setSelectedRole({ ...selectedRole, [field]: value });
    };

    // Save role changes
    const handleSaveRole = () => {
        setRoles(roles.map(r => (r.id === selectedRole.id ? selectedRole : r)));
        setSelectedRole(null);
    };

    // Delete role
    const handleDeleteRole = (id) => {
        setRoles(roles.filter(r => r.id !== id));
        setSelectedRole(null);
    };

    return (
        <div className={styles.roleContainer}>
            <h1 className={styles.title}>Roles</h1>
            <div className={styles.rolesList}>
                {roles.map(role => (
                    <div
                        key={role.id}
                        className={styles.roleItem}
                        onClick={() => handleSelectRole(role)}
                        style={{ borderColor: selectedRole?.id === role.id ? '#7289da' : 'transparent' }}
                    >
                        <span className={styles.roleColorBadge} style={{ background: role.color }} />
                        <span className={styles.roleName}>{role.name}</span>
                    </div>
                ))}
            </div>
            <div className={styles.addRoleSection}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="New role name"
                    value={newRoleName}
                    onChange={e => setNewRoleName(e.target.value)}
                />
                <input
                    className={styles.colorInput}
                    type="color"
                    value={newRoleColor}
                    onChange={e => setNewRoleColor(e.target.value)}
                />
                <button className={styles.addButton} onClick={handleAddRole}>Create Role</button>
            </div>
            {selectedRole && (
                <div className={styles.editRoleSection}>
                    <h2>Edit Role</h2>
                    <label className={styles.label}>Role Name</label>
                    <input
                        className={styles.input}
                        value={selectedRole.name}
                        onChange={e => handleEditRole('name', e.target.value)}
                    />
                    <label className={styles.label}>Role Color</label>
                    <input
                        className={styles.colorInput}
                        type="color"
                        value={selectedRole.color}
                        onChange={e => handleEditRole('color', e.target.value)}
                    />
                    <div className={styles.permissionSection}>
                        <label className={styles.label}>Permissions (demo)</label>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Comma separated (e.g. Manage Server, Ban Members)"
                            value={selectedRole.permissions.join(', ')}
                            onChange={e => handleEditRole('permissions', e.target.value.split(',').map(s => s.trim()))}
                        />
                    </div>
                    <div className={styles.editActions}>
                        <button className={styles.saveButton} onClick={handleSaveRole}>Save</button>
                        <button className={styles.deleteButton} onClick={() => handleDeleteRole(selectedRole.id)}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
}
