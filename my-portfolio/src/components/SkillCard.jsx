import { useState } from 'react';

export default function SkillCard({ skill }) {
    // Реактивний стан для показу/приховування тексту
    const [show, setShow] = useState(false);

    return (
        <div className="skill-card">
            <h3>{skill.title}</h3>
            <p className={`skill-desc ${!show ? 'hidden' : ''}`}>
                {skill.description}
            </p>
            <button
                className={`toggle-btn ${show ? 'active-btn' : ''}`}
                onClick={() => setShow(!show)}
            >
                {show ? 'Сховати' : 'Дізнатися більше'}
            </button>
        </div>
    );
}