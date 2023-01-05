import Link from 'next/link'

export default function Preview({ title, sidePix, article, link }) {
  return (
    <section>
      <header>
        <div>{title}</div>
      </header>
      <div>
        <div>
          <div>
            <article>
              {article}
            </article>
            <Link href={link}>View Live Site</Link>
          </div>
          <img src={sidePix} alt='site-preview' />
        </div>
      </div>

      <footer>
        <div>
          Footer
        </div>
      </footer>
    </section>
  )
}
