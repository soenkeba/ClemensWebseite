import { Link } from 'react-router-dom'
import { CardGrid } from '../components/CardGrid'
import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { content, sharedContent, stockImages } from '../content'
import { useLocale } from '../i18n'

export const Home = () => {
  const { locale } = useLocale()
  const t = content[locale]
  const professor = sharedContent.professor

  return (
    <div className="page">
      <PageHero
        eyebrow={t.home.hero.eyebrow}
        title={t.home.hero.title}
        subtitle={t.home.hero.subtitle}
        image={stockImages.homeHero}
        actions={
          <>
            <Link className="primary-button" to="/certification">
              {t.home.hero.primaryCta}
            </Link>
            <Link className="ghost-button" to="/consultation">
              {t.home.hero.secondaryCta}
            </Link>
          </>
        }
      />

      <Section title={t.home.highlights.title} subtitle={t.home.highlights.subtitle}>
        <CardGrid items={t.home.highlights.items} />
      </Section>

      <Section title={t.home.pathways.title} subtitle={t.home.pathways.subtitle}>
        <ol className="steps">
          {t.home.pathways.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Section>

      <Section title={t.home.quote.title}>
        <div className="quote-card">
          <p>“{locale === 'de' ? professor.quoteDe : professor.quoteEn}”</p>
          <div>
            <strong>{professor.name}</strong>
            <span>{professor.affiliation}</span>
          </div>
        </div>
      </Section>

      <Section title={t.home.news.title} subtitle={t.home.news.subtitle}>
        <div className="news-grid">
          {t.news.items.map((item) => (
            <article key={item.title} className="news-card">
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link to="/news">Lorem ipsum</Link>
            </article>
          ))}
        </div>
      </Section>
    </div>
  )
}
