import { Section } from '../components/Section'
import { content, sharedContent } from '../content'
import { useLocale } from '../i18n'

export const About = () => {
  const { locale } = useLocale()
  const t = content[locale]
  const professor = sharedContent.professor

  return (
    <div className="page">
      <Section title={t.about.profile.title}>
        <div className="about-grid">
          <div className="profile-card">
            <img
              className="profile-image"
              src={professor.imageUrl}
              alt={`Portrait of ${professor.name}`}
            />
            <h3>{professor.name}</h3>
            <p className="profile-role">
              {locale === 'de' ? professor.titleDe : professor.titleEn}
            </p>
            <p>{professor.credentials}</p>
            <p>{professor.affiliation}</p>
            <div className="profile-meta">
              <span>
                <strong>{t.about.profile.phoneLabel}:</strong> {professor.phone}
              </span>
              <span>
                <strong>{t.about.profile.emailLabel}:</strong>{' '}
                <a href={`mailto:${professor.email}`}>{professor.email}</a>
              </span>
              <span>
                <strong>{t.about.profile.linkedinLabel}:</strong>{' '}
                <a href={professor.linkedinUrl} target="_blank" rel="noreferrer">
                  {professor.linkedinUrl}
                </a>
              </span>
            </div>
          </div>
          <div>
            <div className="quote-card compact">
              <p>“{locale === 'de' ? professor.quoteDe : professor.quoteEn}”</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title={t.about.sectionsTitle}>
        <div className="about-sections">
          {t.about.sections.map((section) => (
            <div
              key={section.title}
              className={`about-section${
                section.variant === 'long' ? ' long-list' : ''
              }`}
            >
              <h3>{section.title}</h3>
              <ul>
                {section.entries.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
