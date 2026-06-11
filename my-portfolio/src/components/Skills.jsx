import { useState } from 'react';
import SkillCard from './SkillCard';

const skillsData = [
    { id: 1, title: 'Аналіз графіків', category: 'trading', description: 'Технічний та фундаментальний аналіз криптовалютного ринку для пошуку оптимальних точок входу.' },
    { id: 2, title: 'Збірка криптопортфеля', category: 'investing', description: 'Диверсифікація активів, управління ризиками та довгострокове інвестування.' },
    { id: 3, title: 'P2P Арбітраж', category: 'trading', description: 'Пошук зв\'язок та заробіток на різниці курсів на різних криптовалютних біржах.' }
];

export default function Skills() {
    // ХУК СТРОГО ВСЕРЕДИНІ КОМПОНЕНТА:
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredSkills = skillsData.filter(skill => {
        if (activeFilter === 'all') return true;
        return skill.category === activeFilter;
    });

    return (
        <section className="about">
            <div className="container">
                <h2 className="section-title">Мої навички</h2>
                <div className="filters">
                    <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>Всі навички</button>
                    <button className={`filter-btn ${activeFilter === 'trading' ? 'active' : ''}`} onClick={() => setActiveFilter('trading')}>Трейдинг</button>
                    <button className={`filter-btn ${activeFilter === 'investing' ? 'active' : ''}`} onClick={() => setActiveFilter('investing')}>Інвестиції</button>
                </div>
                <div className="skills-grid">
                    {filteredSkills.map(skill => (
                        <SkillCard key={skill.id} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
}