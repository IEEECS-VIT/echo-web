import { useState } from 'react';
import styles from '../../styles/InvitePeople.module.css';

export default function InvitePeople() {
  const [inviteLink, setInviteLink] = useState('https://echo.gg/ABC123');
  const [expiresAfter, setExpiresAfter] = useState('7 days');
  const [maxUses, setMaxUses] = useState('No limit');

  const handleGenerateLink = () => {
    const randomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    setInviteLink(`https://echo.gg/${randomCode}`);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink);
    // You can add a toast or notification here if you want
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Invite People</h1>
      <div className={styles.inviteSection}>
        <label className={styles.label}>Invite Link</label>
        <div className={styles.linkRow}>
          <input 
            type="text" 
            value={inviteLink} 
            readOnly 
            className={styles.input}
          />
          <button 
            className={styles.copyButton}
            onClick={handleCopyLink}
          >
            Copy
          </button>
        </div>
      </div>
      <div className={styles.settingsGrid}>
        <div className={styles.field}>
          <label className={styles.label}>Expires after</label>
          <select 
            className={styles.select}
            value={expiresAfter}
            onChange={(e) => setExpiresAfter(e.target.value)}
          >
            <option value="30 minutes">30 minutes</option>
            <option value="1 hour">1 hour</option>
            <option value="6 hours">6 hours</option>
            <option value="12 hours">12 hours</option>
            <option value="1 day">1 day</option>
            <option value="7 days">7 days</option>
            <option value="30 days">30 days</option>
            <option value="Never">Never</option>
          </select>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Max number of uses</label>
          <select 
            className={styles.select}
            value={maxUses}
            onChange={(e) => setMaxUses(e.target.value)}
          >
            <option value="No limit">No limit</option>
            <option value="1 use">1 use</option>
            <option value="5 uses">5 uses</option>
            <option value="10 uses">10 uses</option>
            <option value="25 uses">25 uses</option>
            <option value="50 uses">50 uses</option>
            <option value="100 uses">100 uses</option>
          </select>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button 
          className={styles.generateButton}
          onClick={handleGenerateLink}
        >
          Generate New Link
        </button>
      </div>
    </div>
  );
}
