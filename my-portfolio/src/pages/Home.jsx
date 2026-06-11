import Navbar from '../components/Navbar';
import Skills from '../components/Skills';

export default function Home() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <Navbar />
                    <div className="content">
                        <div className="information">
                            <p className="title">Перейдіть на <span style={{color: '#FF00F5'}}>наступну</span><br/> сходинку вашої кар’єри</p>
                            <p className="text">
                                На вебінарі з Матвієм Кріптоінверстором ви дізнаєтеся всі <br/> тонкощі створення бізнесу, та зрозумієте як <br/> заробити свої перші <u>5000</u>$
                            </p>
                            <label htmlFor="model" className="btn">Записатися на вебінар</label>
                        </div>
                        <div className="image">
                            <img src="img/negr2.png" className="negr" alt="mentor" />
                        </div>
                    </div>
                </div>
            </header>
            <Skills />
            <footer className="footer"><div className="container"></div></footer>
        </>
    );
}