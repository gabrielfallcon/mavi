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
            <li><a href="">Inicio</a></li>
            <li><a href="">Sobre</a></li>
            <li><a href="">Terapia</a></li>
            <li><a href="">Depoimentos</a></li>
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
                <Link href="/">
                  <a onClick={handleMenuMobile}>
                    Inicio
                  </a>
                </Link>
                <Link href="/">
                  <a onClick={handleMenuMobile}>
                    Quem Somos
                  </a>
                </Link>
                <Link href="/">
                  <a onClick={handleMenuMobile}>
                    Serviços
                  </a>
                </Link>
                <Link href="/">
                  <a onClick={handleMenuMobile}>
                    Contato
                  </a>
                </Link>
                <Link href="/">
                  <a onClick={handleMenuMobile}>
                    Trabalhe Conosco
                  </a>
                </Link>
                <Link href="/">
                  <a onClick={handleMenuMobile}>
                    Vagas
                  </a>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.welcome}>
          <div className={styles.contentWelcome}>
            <div className={styles.boxText}>
              <span className={styles.spanWelcome}>BOAS-VINDAS A MAVIFLORES 👋</span>
              <h1 className={styles.titleWelcome}>Pisicologia Infantil</h1>

              <p className={styles.descriptionWelcome}>
                Tratamento infantil, vai além do cuidar da deficiência. O carinho, o amor, e fazer com que a criança se desenvolva é o que nós oferecemos!
              </p>

              <Button variant='primary' icon> 
                Agende sua consulta
              </Button>
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
            <span className={styles.spanServices}>Terapia</span>
            <h2 className={styles.titleService}>Como a terapia pode ajudar?</h2>

            <ul className={styles.listServices}>
              <li>
                <h3>Iteração Social</h3>
                <p>
                  Ajudamos no desenvolvimento da comunicacação com outras crianças!
                </p>
              </li>
              <li>
                <h3>Autoestima</h3>
                <p>
                  Trabalhamos no pensamento da criança, fazendo-a a pensar que ela é suficiente e capaz, pois ela realmente é!
                </p>
              </li>
              <li>
                <h3>Desenvolvimento</h3>
                <p>
                  Ajudamos no Desenvolvimento pessoal descobrindo as coisas que elas gostam e desenvolvendo seu potencial máximo
                </p>
              </li>
              <li>
                <h3>Inteligência Emocional</h3>
                <p>
                  Ajudamos todas as crianças a ter um controle emocional para mantê-las calmas
                </p>
              </li>
              <li>
                <h3>Rendimento Escolar</h3>
                <p>
                  Cuidamos do raciocínio lógico da criança para ela evoluir na escola
                </p>
              </li>
              <li>
                <h3>Criatividade</h3>
                <p>
                  Aqui a criança é livre para pensar e criar e tangibilizar seus sonhos, sua maneira de ver o mundo, o sonho que toda criança merece ter.
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
                <strong>Maria Victoria Flores</strong>, uma Pisicóloga, tem um grande afeto por crianças, vê-las feliz não tem preço, mais do que um trabalho, é poder mudar a vida delas através do meu propósito.
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

            <img src="/image/bannerContact.png" alt="" className={styles.imgContact}/>
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
