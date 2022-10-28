import { useState } from 'react';
import type { NextPage } from 'next'
import styles from '../styles/home.module.scss';
import { FiMapPin, FiMail, FiAlignJustify, FiX } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '../components/Button';

const Home: NextPage = () => {
  const [isActiveMenuMobile, setIsActiveMenuMobile] = useState(false);
  
  const handleMenuMobile = () => {
    setIsActiveMenuMobile(!isActiveMenuMobile);
  }
  return (
    <>
      <header className={styles.header}>
        <div className={styles.contentDesktop}>
          <img src="/image/maria.png" alt="" className={styles.logoHeader}/> 

          <ul className={styles.listHeader}>
            <li><a href="#welcome">Inicio</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>

          <Button variant='secondary'> 
            Agende sua consulta
          </Button>
        </div>
        <div className={styles.contentMobile}>
          <div className={styles.showMobileContent}>
            <FiAlignJustify 
              size={40}
              onClick={handleMenuMobile}
            />

            <Link href="/">
              <img src="/image/maria.png" alt="Ameta Serviços"/>
            </Link>
          </div>

          <div className={`
            ${styles.showMobileModal}
            ${isActiveMenuMobile && styles.showMobileModalActive}  
          `}>
            <FiX 
              size={40}
              onClick={handleMenuMobile}
            />

            <div className={styles.modalContent}>
              <img src="/image/maria.png" alt="Ameta Serviços"/>

              <nav className={styles.navMenuMobile}>
                <Link href="#welcome">
                  <a onClick={handleMenuMobile}>
                    Inicio
                  </a>
                </Link>
                <Link href="#services">
                  <a onClick={handleMenuMobile}>
                    Serviços
                  </a>
                </Link>
                <Link href="#about">
                  <a onClick={handleMenuMobile}>
                    Sobre
                  </a>
                </Link>
                <Link href="#contact">
                  <a onClick={handleMenuMobile}>
                    Contato
                  </a>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.welcome} id="welcome">
          <div className={styles.contentWelcome}>
            <div className={styles.boxText}>
              <span className={styles.spanWelcome}>BOAS-VINDAS A MAVIFLORES 👋</span>
              <h1 className={styles.titleWelcome}>Psicologia clinica</h1>

              <p className={styles.descriptionWelcome}>
                A terapia é um espaço seguro, pautado pelo sigilo, não julgamento e acolhimento, mediado por um profissional capacitado para fornecer ferramentas para que possa lidar com suas questões, dificuldades e desenvolvimento.
              </p>

              <Button variant='primary' icon> 
                Agende sua consulta
              </Button>
            </div>
          </div>
          
          <ul className={styles.contentAbsoluteWelcome}>
            <li>
              <span>Psicoterapia para:</span>
              <h3>Adulto e infantil-juvenil</h3>
            </li>
            <li>
              <span>Formas de atendimento:</span>
              <h3>Presencial e online</h3>
            </li>
          </ul>
        </section>

        <section className={styles.services} id="services">
          <div className={styles.contentServices}>
            <span className={styles.spanServices}>Terapia</span>
            <h2 className={styles.titleService}>Como a terapia pode ajudar?</h2>

            <ul className={styles.listServices}>
              <li>
                <h3>Hábitos saudaveis</h3>
                <p>
                  Grande parte dos nossos comportamentos diários baseia-se nos nossos hábitos. Hábitos saudáveis são cruciais para uma vida com bem estar e qualidade.
                </p>
              </li>
              <li>
                <h3>Autoestima</h3>
                <p>
                  Autoestima é a forma como você se enxerga, se valoriza e se vê diante de outras pessoas. A autoestima é um processo constante e influência em todos os aspectos de sua vida.
                </p>
              </li>
              <li>
                <h3>Autoconhecimento</h3>
                <p>
                  Ajudamos no Desenvolvimento pessoal descobrindo as coisas que elas gostam e desenvolvendo seu potencial máximo
                </p>
              </li>
              <li>
                <h3>Desenvolvimento pessoal</h3>
                <p>
                  Potencialize suas competências e trabalhe no desenvolvimento de suas habilidades pessoais visando a melhora da qualidade de vida e atingir objetivos.
                </p>
              </li>
              <li>
                <h3>Inteligência emocional</h3>
                <p>
                  Tenha capacidade de identificar, avaliar e lidar com seus sentimentos e emoções,assim como, dentro de suas relações.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.about} id="about">
          <div className={styles.contentAbout}>
            <img src="/image/maria-profile.jpeg" alt="image Doctor" className={styles.imgAbout}/>

            <div className={styles.boxTextAbout}>
              <span>Quem sou?</span>

              <h2>Entenda quem somos e por que existimos</h2>

              <p>
                <strong>Maria Victoria Flores</strong>, uma Pisicóloga, tem um grande afeto por crianças, vê-las feliz não tem preço, mais do que um trabalho, é poder mudar a vida delas através do meu propósito.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <div className={styles.contentContact}>
            <div className={styles.boxTextContact}>
              <h2>Entre em contato com a gente!</h2>

              <div className={styles.infoContact}>
                <div className={styles.infoItemContact}>
                  <FiMapPin size={24} color="#b15bb1"/> <span>Rua Cantagalo, 1615 - Tatuapé</span>
                </div>
                <div className={styles.infoItemContact}>
                  <FiMail size={24} color="#b15bb1"/> <span>smaviflores@gmail.com</span>
                </div>
              </div>

              <Button variant='primary' icon> 
                Agende sua consulta
              </Button>
            </div>

            <img src="/image/background01.jpeg" alt="" className={styles.imgContact}/>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.contentFooter}>
          <div className={styles.infoFooter}>
            <img src="/image/maria.png" alt="" className={styles.logoFooter}/>
            <span>©2022 - MaviFlores.</span>
            <span>Todos os direitos reservados.</span>
          </div>

          <div className={styles.boxMidiaFooter}>
            <FaInstagram size={24} color="#ffffff"/>
            <FaFacebook size={24} color="#ffffff"/>
            <FaYoutube size={24} color="#ffffff"/>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
