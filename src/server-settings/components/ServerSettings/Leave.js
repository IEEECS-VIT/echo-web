import { useState } from 'react';
import styles from '../../styles/Leave.module.css';

export default function Leave() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [serverName] = useState('Hack Battle');
  const [input, setInput] = useState('');

  const handleLeaveServer = () => {
    if (input === serverName) {
      alert(`You have left the server: ${serverName}`);
      // Here you could redirect or update state
    } else {
      alert('Please type the server name exactly to confirm.');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Leave Server</h1>
      <div className={styles.warningSection}>
        <div className={styles.warningIcon}>⚠️</div>
        <div>
          <h2 className={styles.warningTitle}>
            Are you sure you want to leave <span className={styles.serverName}>{serverName}</span>?
          </h2>
          <p className={styles.warningText}>
            You won't be able to rejoin this server unless you are re-invited.
          </p>
        </div>
      </div>
      {!showConfirm ? (
        <button className={styles.leaveButton} onClick={() => setShowConfirm(true)}>
          Leave Server
        </button>
      ) : (
        <div className={styles.confirmSection}>
          <label className={styles.confirmLabel}>
            Type <span className={styles.serverName}>{serverName}</span> to confirm:
          </label>
          <input
            className={styles.confirmInput}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={serverName}
          />
          <div className={styles.confirmActions}>
            <button className={styles.confirmLeaveButton} onClick={handleLeaveServer}>
              Confirm Leave
            </button>
            <button className={styles.cancelButton} onClick={() => setShowConfirm(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
