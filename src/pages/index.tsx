import type { NextPage } from 'next'
import styles from '../styles/home.module.scss';
import { FiMapPin, FiMail, FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi';

const Home: NextPage = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.content}>
          <p>DoctorMaria</p> 

          <ul className={styles.listHeader}>
            <li><a href="">Inicio</a></li>
            <li><a href="">Sobre</a></li>
            <li><a href="">Serviços</a></li>
            <li><a href="">Depoimentos</a></li>
          </ul>

          <button className={styles.btn}>Agendar Consulta</button>
        </div>
      </header>

      <main>
        <section className={styles.welcome}>
          <div className={styles.contentWelcome}>
            <div className={styles.boxText}>
              <span className={styles.spanWelcome}>BOAS-VINDAS A DOCTORCARE 👋</span>
              <h1 className={styles.titleWelcome}>Assistência médica simplificada para todos</h1>

              <p className={styles.descriptionWelcome}>
                Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz de sua doença e proporcionar uma cura a longo prazo.
              </p>

              <button className={styles.buttonWelcome}>Agende sua consulta</button>
            </div>
          </div>
          
          <ul className={styles.contentAbsoluteWelcome}>
            <li>
              <h3>+3.500</h3>
              <span>Pacientes atendidos</span>
            </li>
            <li>
              <h3>+15</h3>
              <span>Especialistas disponíveis</span>
            </li>
            <li>
              <h3>+10</h3>
              <span>Anos no mercado</span>
            </li>
          </ul>
        </section>

        <section className={styles.services}>
          <div className={styles.contentServices}>
            <span className={styles.spanServices}>Serviços</span>
            <h2 className={styles.titleService}>Como podemos ajudá-lo a se sentir melhor?</h2>

            <ul className={styles.listServices}>
              <li>
                <h3>Problemas digestivos</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
                </p>
              </li>
              <li>
                <h3>Saúde Hormonal</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
                </p>
              </li>
              <li>
                <h3>Bem-estar mental</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
                </p>
              </li>
              <li>
                <h3>Cuidados Pediátricos</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
                </p>
              </li>
              <li>
                <h3>Autoimune e Inflamação</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
                </p>
              </li>
              <li>
                <h3>Saúde do Coração</h3>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.about}>
          <div className={styles.contentAbout}>
            <img src="/image/Pic01.png" alt="image Doctor" className={styles.imgAbout}/>

            <div className={styles.boxTextAbout}>
              <span>Sobre nós</span>

              <h2>Entenda quem somos e por que existimos</h2>

              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <div className={styles.contentContact}>
            <div className={styles.boxTextContact}>
              <h2>Entre em contato com a gente!</h2>

              <div className={styles.infoContact}>
                <div className={styles.infoItemContact}>
                  <FiMapPin size={24} color="#00856F"/> <span>R.Amauri Souza, 346</span>
                </div>
                <div className={styles.infoItemContact}>
                  <FiMail size={24} color="#00856F"/> <span>contato@beautysalon.com</span>
                </div>
              </div>

              <button className={styles.buttonContact}>Agende sua consulta</button>
            </div>

            <img src="/image/bannerContact.png" alt="" className={styles.imgContact}/>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.contentFooter}>
          <div className={styles.infoFooter}>
            <img src="" alt="" className={styles.logoFooter}/>
            <span>©2022 - DoctorCare.</span>
            <span>Todos os direitos reservados.</span>
          </div>

          <div className={styles.boxMidiaFooter}>
            <FiInstagram size={24} color="#ffffff"/>
            <FiFacebook size={24} color="#ffffff"/>
            <FiYoutube size={24} color="#ffffff"/>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
