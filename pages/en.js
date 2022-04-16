import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Adam Majcher | Web Developer</title>
        <meta
          name="description"
          content="Hi I'm Adam 👋👦 The IT industry is my passion. I'm interested in creating websites and their design. My goal is to popularize web solutions for all users so that information, education and entertainment are available directly and for everyone. 🙂"
        />
        <meta HTTP-EQUIV="Content-Language" CONTENT="en-US" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="main">
        <h1 className="title">
          👋👦
          <br /> Hi I'm <a href="https://github.com/majcheradam">Adam</a>
        </h1>
        <p className="description">
          The IT industry is my passion. I'm interested in creating websites and
          their design. My goal is to popularize web solutions for all users so
          that information, education and entertainment are available directly
          and for everyone. 🙂
        </p>
        <div className="cards">
          <a href="https://www.zs2lancut.pl/">
            <div className="card">
              <p>🌐 ZS2 Łańcut - School Website</p>
              <Image src="/1.png" alt="" width="370" height="210" />
            </div>
          </a>
          <a href="https://adam-31.gitbook.io/egzaminy-zawodowe/">
            <div className="card">
              <p>📖 Gitbook - Vocational exams</p>
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
