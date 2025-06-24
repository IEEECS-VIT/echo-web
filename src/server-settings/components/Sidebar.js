import styles from '../styles/Sidebar.module.css';

const menuItems = [
    'Overview',
    'Role',
    'Members',
    'Invite people',
    'Leave'
];

export default function Sidebar({ selected, onSelect }) {
    return (
        <nav className={styles.sidebar}>
            <h2>Server Settings</h2>
            <ul>
                {menuItems.map(item => (
                    <li
                        key={item}
                        className={selected === item ? styles.active : ''}
                        onClick={() => onSelect(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
