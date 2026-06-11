import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    // Стан для відстеження, чи відкрите мобільне меню
    const [isOpen, setIsOpen] = useState(false);

    // Функція для закриття меню при переході на іншу сторінку
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="nav">
            <Link to="/" onClick={closeMenu}>
                <img src="img/logo.png" alt="logo" className="logo" />
            </Link>

            {/* Кнопка-бургер, яка з'явиться тільки на телефонах */}
            <button
                className="burger-btn"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? '✕' : '☰'}
            </button>

            {/* Додаємо клас 'open', якщо стан isOpen === true */}
            <ul className={`menu ${isOpen ? 'open' : ''}`}>
                <li><Link to="/" onClick={closeMenu}>Головна</Link></li>
                <li><Link to="/contacts" onClick={closeMenu}>Контакти</Link></li>
            </ul>
        </nav>
    );
}