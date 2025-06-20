import React, { useState, useRef, useEffect } from 'react';

const Members = () => {
    const [members, setMembers] = useState([
        {
            username: '@johndoe',
            role: 'Admin',
            joinDate: 'Jan 2024'
        },
        {
            username: '@sophiedee',
            role: 'Member',
            joinDate: 'May 2024'
        }
    ]);

    const [dropdownOpen, setDropdownOpen] = useState(null);
    const dropdownRefs = useRef([]);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({ username: '', role: '' });

    // New states for modals
    const [showKickModal, setShowKickModal] = useState(false);
    const [showRoleModal, setShowRoleModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [newRole, setNewRole] = useState('');

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownOpen !== null &&
                dropdownRefs.current[dropdownOpen] &&
                !dropdownRefs.current[dropdownOpen].contains(event.target)
            ) {
                setDropdownOpen(null);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [dropdownOpen]);

    // Dropdown actions
    const handleChangeRole = (member) => {
        setDropdownOpen(null);
        setSelectedMember(member);
        setNewRole(member.role);
        setShowRoleModal(true);
    };

    const handleKick = (member) => {
        setDropdownOpen(null);
        setSelectedMember(member);
        setShowKickModal(true);
    };

    // Confirm kick
    const confirmKick = () => {
        setMembers(members.filter(m => m.username !== selectedMember.username));
        setShowKickModal(false);
        setSelectedMember(null);
    };

    // Confirm role change
    const confirmRoleChange = () => {
        if (!newRole.trim()) return;
        setMembers(members.map(m =>
            m.username === selectedMember.username
                ? { ...m, role: newRole.trim() }
                : m
        ));
        setShowRoleModal(false);
        setSelectedMember(null);
        setNewRole('');
    };

    // Add member form handlers
    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAddMember = (e) => {
        e.preventDefault();
        if (!form.username.trim() || !form.role.trim()) return;
        const now = new Date();
        const month = now.toLocaleString('default', { month: 'short' });
        const year = now.getFullYear();
        setMembers([
            ...members,
            {
                username: form.username.startsWith('@') ? form.username : '@' + form.username,
                role: form.role,
                joinDate: `${month} ${year}`
            }
        ]);
        setForm({ username: '', role: '' });
        setShowForm(false);
    };

    return (
        <div className="members-content">
            <h3 className="members-title">Members</h3>
            <div className="members-table">
                <div className="table-header">
                    <div className="header-cell">Username</div>
                    <div className="header-cell">Role(s)</div>
                    <div className="header-cell">Join Date</div>
                    <div className="header-cell">Actions</div>
                </div>
                {members.map((member, index) => (
                    <div key={index} className="table-row">
                        <div className="table-cell">{member.username}</div>
                        <div className="table-cell">{member.role}</div>
                        <div className="table-cell">{member.joinDate}</div>
                        <div className="table-cell" style={{ position: 'relative' }}>
                            <button
                                className="action-btn"
                                onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
                                ref={el => dropdownRefs.current[index] = el}
                            >
                                Change Role/Kick
                            </button>
                            {dropdownOpen === index && (
                                <div className={`dropdown-menu ${index === members.length - 1 ? 'upwards' : ''}`}>
                                    <button onClick={() => handleChangeRole(member)}>Change Role</button>
                                    <button onClick={() => handleKick(member)}>Kick</button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                {showForm ? (
                    <form className="add-member-form" onSubmit={handleAddMember}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username (e.g. @newuser)"
                            value={form.username}
                            onChange={handleInputChange}
                            className="add-member-input"
                            autoFocus
                            required
                        />
                        <input
                            type="text"
                            name="role"
                            placeholder="Role(s)"
                            value={form.role}
                            onChange={handleInputChange}
                            className="add-member-input"
                            required
                        />
                        <button type="submit" className="add-member-submit">Add</button>
                        <button type="button" className="add-member-cancel" onClick={() => setShowForm(false)}>Cancel</button>
                    </form>
                ) : (
                    <button className="add-member-btn" onClick={() => setShowForm(true)}>
                        Add Members+
                    </button>
                )}
            </div>

            {/* Modals are now OUTSIDE the table for visibility */}
            {showKickModal && (
                <div className="modal-overlay">
                    <div className="confirmation-modal">
                        <h3>Confirm Kick</h3>
                        <p>Are you sure you want to kick <strong>{selectedMember?.username}</strong>?</p>
                        <div className="modal-buttons">
                            <button className="confirm-btn" onClick={confirmKick}>Yes</button>
                            <button className="cancel-btn" onClick={() => setShowKickModal(false)}>No</button>
                        </div>
                    </div>
                </div>
            )}

            {showRoleModal && (
                <div className="modal-overlay">
                    <div className="role-modal">
                        <h3>Change Role</h3>
                        <p>Change role for <strong>{selectedMember?.username}</strong></p>
                        <input
                            type="text"
                            value={newRole}
                            onChange={(e) => setNewRole(e.target.value)}
                            placeholder="Enter new role"
                            className="role-input"
                            autoFocus
                        />
                        <div className="modal-buttons">
                            <button className="confirm-btn" onClick={confirmRoleChange}>Change</button>
                            <button className="cancel-btn" onClick={() => setShowRoleModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Members;
