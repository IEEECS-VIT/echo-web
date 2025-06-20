import React, { useState, useRef } from 'react';
import editPencil from '../assets/edit-pencil.png'; // Pencil icon for server name input
import ServerPng from '../assets/Serverpng.png';    // Server icon image

const Overview = () => {
    const [serverName, setServerName] = useState('Hack Battle');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [serverIcon, setServerIcon] = useState(ServerPng);
    const fileInputRef = useRef(null);

    const handleIconChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setServerIcon(URL.createObjectURL(file));
        }
    };

    const handleEditClick = () => {
        fileInputRef.current.click();
    };

    const handleSaveChanges = () => {
        alert('Changes saved!');
    };

    return (
        <div className="overview-content">
            <h3 className="overview-title">Overview</h3>

            {/* Server Name */}
            <div className="form-group">
                <label htmlFor="server-name">Server Name</label>
                <div className="input-wrapper">
                    <input
                        type="text"
                        id="server-name"
                        value={serverName}
                        onChange={(e) => setServerName(e.target.value)}
                        className="server-input"
                    />
                    <img
                        src={editPencil}
                        alt="Edit"
                        className="input-edit-icon"
                        onClick={() => document.getElementById('server-name').focus()}
                        tabIndex={0}
                        style={{ pointerEvents: 'auto' }}
                    />
                </div>
            </div>

            {/* Server Icon */}
            <div className="form-group">
                <label>Server icon</label>
                <div className="server-icon-section">
                    <div className="server-icon-container" onClick={handleEditClick} style={{ cursor: 'pointer' }}>
                        <img src={serverIcon} alt="Server Icon" className="server-icon-image" />
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleIconChange}
                        />
                    </div>
                </div>
            </div>

            {/* Region */}
            <div className="form-group">
                <label htmlFor="region">Region</label>
                <select
                    id="region"
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="region-select"
                >
                    <option value="">Select Region</option>
                    <option value="us-east">US East</option>
                    <option value="us-west">US West</option>
                    <option value="europe">Europe</option>
                    <option value="asia">Asia</option>
                </select>
            </div>

            {/* Save Changes Button, right-aligned */}
            <div className="save-button-container">
                <button className="save-button" onClick={handleSaveChanges}>
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default Overview;
