import { useState, useRef } from 'react';
import styles from '../../styles/Overview.module.css';

export default function Overview() {
    const [serverName, setServerName] = useState('Hack Battle');
    const [region, setRegion] = useState('');
    const [serverIcon, setServerIcon] = useState('/server-default.png');
    const fileInputRef = useRef(null);

    // Open file picker when icon is clicked
    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    // Update preview when a new image is selected
    const handleIconChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setServerIcon(url);
        }
    };

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Overview</h1>
        <div className={styles.field}>
          <label className={styles.label}>Server Name</label>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              value={serverName}
              onChange={e => setServerName(e.target.value)}
              placeholder="Server Name"
            />
            <div className={styles.editIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Server icon</label>
          <div className={styles.iconUploadWrapper}>
            <img
              className={styles.serverIcon}
              src={serverIcon}
              alt="Server Icon"
              onClick={handleIconClick}
              style={{ cursor: 'pointer' }}
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleIconChange}
            />
            <div className={styles.iconEditOverlay} onClick={handleIconClick}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#fff"/>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Region</label>
          <select
            className={styles.select}
            value={region}
            onChange={e => setRegion(e.target.value)}
          >
            <option value="">Select a region</option>
            <option value="us-east">US East</option>
            <option value="us-west">US West</option>
            <option value="us-central">US Central</option>
            <option value="eu-west">EU West</option>
            <option value="eu-central">EU Central</option>
            <option value="singapore">Singapore</option>
            <option value="sydney">Sydney</option>
            <option value="japan">Japan</option>
            <option value="russia">Russia</option>
            <option value="brazil">Brazil</option>
            <option value="hongkong">Hong Kong</option>
            <option value="southafrica">South Africa</option>
            <option value="india">India</option>
          </select>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.saveButton}>Save Changes</button>
        </div>
      </div>
    );
}
