import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Adam Majcher | Web Developer</title>
        <meta
          name="description"
          content="Cześć jestem Adam 👋👦 Moją pasją jest branża IT. W głównej mierze interesują mnie strony
          internetowe, ich projektowanie, tworzenie. Moim celem jest
          popularyzacja rozwiązań webowych dla zwykłych użytkowników, aby
          informacje, nauka i rozrywka była dostępna wprost i dla każdego 🙂"
        />
        <meta HTTP-EQUIV="Content-Language" CONTENT="pl-PL" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="main">
        <h1 className="title">
          👋👦
          <br /> Cześć jestem <a href="https://github.com/majcheradam">Adam</a>
        </h1>
        <p className="description">
          Moją pasją jest branża IT. W głównej mierze interesują mnie strony
          internetowe, ich projektowanie, tworzenie. Moim celem jest
          popularyzacja rozwiązań webowych dla zwykłych użytkowników, aby
          informacje, nauka i rozrywka była dostępna wprost i dla każdego 🙂
        </p>
        <div className="cards">
          <a href="https://www.zs2lancut.pl/">
            <div className="card">
              <p>🌐 ZS2 Łańcut - Strona szkoły</p>
              <Image src="/1.png" alt="" width="370" height="210" />
            </div>
          </a>
          <a href="https://adam-31.gitbook.io/egzaminy-zawodowe/">
            <div className="card">
              <p>📖 Gitbook - Egzaminy zawodowe</p>
              <Image src="/2.png" alt="" width="370" height="210" />
            </div>
          </a>
        </div>
        <footer className="footer">
          <p className="links">
            <a href="https://www.facebook.com/profile.php?id=100019047545737">
              Facebook
            </a>
            |<a href="https://github.com/majcheradam">GitHub</a>|
            <a href="https://www.linkedin.com/in/adam-majcher-99a0b622b/">
              Linkedin
            </a>
          </p>
        </footer>
      </main>
    </div>
  )
}
