import Navbar from '../components/Navbar';

export default function Contacts() {
    return (
        <>
            <header className="header gradient-bg">
                <div className="container">
                    <Navbar />
                </div>
            </header>
            <section className="contact-section">
                <div className="container">
                    <h2 className="title">Контакти</h2>
                    <div className="contact-list">
                        <div className="contact-item">
                            <h3>Телефон</h3>
                            <p><a href="tel:+380994809856">+380 (99) 480-98-56</a></p>
                        </div>
                        <div className="contact-item">
                            <h3>Email</h3>
                            <p><a href="mailto:m.zavada.zk41.fbmi28@lll.kpi.ua">m.zavada.zk41.fbmi28@lll.kpi.ua</a></p>
                        </div>
                        <div className="contact-item">
                            <h3>Telegram</h3>
                            <p><a href="https://t.me/fyfa1ka" target="_blank" rel="noreferrer">@fyfa1ka</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}