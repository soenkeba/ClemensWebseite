export type Locale = 'de' | 'en'

export const logoUrl =
  'https://www.mamma-mrt-screening.de/ma-wGlobal/wGlobal/layout/images/logo-mmz.svg'

export const stockImages = {
  homeHero:
    'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1800&q=80',
  certificationHero:
    'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1800&q=80',
  educationHero:
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1800&q=80',
  consultationHero:
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80',
  newsHero:
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1800&q=80',
  aboutHero:
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=80',
  contactHero:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80',
  impressumHero:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80',
}

const shared = {
  company: {
    name: 'Kaiser MRT-Zertifizierung GmbH',
    addressLines: ['Musterstraße 12', '68161 Mannheim', 'Deutschland'],
    phone: '+49 621 123 45 67',
    email: 'kontakt@kaiser-mrt-zertifizierung.de',
  },
  professor: {
    name: 'Prof. Dr. med. Clemens Kaiser',
    affiliation: 'Universitätsmedizin Mannheim',
    titleDe: 'Sektionsleiter Mammadiagnostik UMM',
    titleEn: 'Head of Breast Imaging, UMM',
    credentials: 'Dipl. Kfm. (EMA), B.A.',
    phone: '0621-383-8694',
    email: 'mmz@umm.de',
    imageUrl:
      'https://www.mamma-mrt-screening.de/ma-wAssets/img/persons/weblication/wThumbnails/Portrait_Prof_Kaiser_Clemens-622ac716-a9528119@ll.jpg',
    linkedinUrl:
      'https://linkedin.com/in/prof-dr-med-clemens-kaiser-1b765212a?trk=people-guest_people_search-card',
    quoteDe:
      'Brustkrebs rechtzeitig zu detektieren bedeutet Leben retten.',
    quoteEn:
      'Detecting breast cancer early means saving lives.',
  },
}

export const content = {
  de: {
    meta: {
      siteTitle: 'Kaiser MRT-Zertifizierung GmbH',
      siteTagline: 'Zertifizierung, Weiterbildung, Beratung',
    },
    footer: {
      navigation: 'Navigation',
      newsletterTitle: 'Newsletter',
      newsletterText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel semper lorem.',
      newsletterCta: 'Lorem ipsum',
      impressumLabel: 'Impressum',
      taxNumberLabel: 'Steuernummer',
    },
    nav: {
      home: 'MR-Max (Mr Ausbildungssoftware)',
      certification: 'Zertifizierung',
      education: 'Kurse',
      consultation: 'Zweitmeinungsportal',
      news: 'News',
      about: 'Wir über uns',
      contact: 'Kontakt',
      impressum: 'Impressum',
    },
    home: {
      hero: {
        eyebrow: 'Mamma-MRT Zertifizierung',
        title: 'Qualität, die sichtbar wird.',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non lacus eget nulla tincidunt placerat.',
        primaryCta: 'Zertifizierung starten',
        secondaryCta: 'Beratung anfragen',
      },
      highlights: {
        title: 'Unser Ansatz',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sapien id augue tempor tristique.',
        items: [
          {
            title: 'Prüfbare Standards',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at felis nec sapien.',
          },
          {
            title: 'Praxisnahe Weiterbildung',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sem sed.',
          },
          {
            title: 'Individuelle Beratung',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.',
          },
        ],
      },
      pathways: {
        title: 'Zertifizierungspfad',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a est a ante efficitur.',
        steps: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Pellentesque habitant morbi tristique senectus et netus.',
          'Integer tincidunt nisi quis justo efficitur, vitae bibendum.',
          'Sed posuere metus in aliquet laoreet.',
        ],
      },
      quote: {
        title: 'Stimmen aus der Praxis',
      },
      news: {
        title: 'Aktuelles',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at augue eget.',
      },
    },
    certification: {
      hero: {
        eyebrow: 'Zertifizierung',
        title: 'Mamma-MRT Zertifizierung mit System.',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet ligula et.',
      },
      sections: [
        {
          title: 'Programmübersicht',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet turpis eu velit tempus sagittis.',
        },
        {
          title: 'Kriterien & Dokumentation',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sapien sed lorem cursus vestibulum.',
        },
        {
          title: 'Audit & Begleitung',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra, massa sed faucibus.',
        },
      ],
    },
    education: {
      hero: {
        eyebrow: 'Weiterbildung',
        title: 'Fortbildung für eine neue Qualitätsstufe.',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at justo sed.',
      },
      tracks: [
        {
          title: 'Grundlagenmodul',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dignissim augue.',
        },
        {
          title: 'Praxisworkshops',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt.',
        },
        {
          title: 'Peer-Review Sessions',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet, elit at.',
        },
      ],
    },
    consultation: {
      hero: {
        eyebrow: 'Beratung',
        title: 'Strategische Beratung rund um Mamma-MRT.',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim.',
      },
      offerings: [
        {
          title: 'Standortanalyse',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed lorem.',
        },
        {
          title: 'Prozessdesign',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non eros.',
        },
        {
          title: 'Qualitätsmonitoring',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant.',
        },
      ],
    },
    news: {
      hero: {
        eyebrow: 'News',
        title: 'Neuigkeiten & Veröffentlichungen',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in mi at.',
      },
      items: [
        {
          title: 'Lorem ipsum dolor sit amet',
          date: '04.02.2026',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium.',
        },
        {
          title: 'Integer vitae justo nec',
          date: '22.01.2026',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum.',
        },
        {
          title: 'Suspendisse potenti gravida',
          date: '08.01.2026',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate.',
        },
      ],
    },
    about: {
      hero: {
        eyebrow: 'Prof. Kaiser',
        title: 'Erfahrung, Forschung, Verantwortung.',
        subtitle:
          'Sektionsleiter Mammadiagnostik UMM und Oberarzt in der Klinik für Radiologie und Nuklearmedizin, Universitätsmedizin Mannheim.',
      },
      profile: {
        title: 'Profil',
        roleLabel: 'Position',
        credentialsLabel: 'Qualifikation',
        phoneLabel: 'Telefon',
        emailLabel: 'E-Mail',
        linkedinLabel: 'LinkedIn',
      },
      sectionsTitle: 'Curriculum Vitae & Publikationen',
      sections: [
        {
          title: 'Curriculum Vitae',
          entries: [
            'Prof. Dr. med. Clemens Kaiser',
            'Dipl. Kfm. (EMA), B.A.',
            'Sektionsleiter Mammadiagnostik',
            'Oberarzt in der Klinik für Radiologie und Nuklearmedizin, Universitätsmedizin Mannheim',
          ],
        },
        {
          title: 'Klinische Schwerpunkte',
          entries: ['Multimodale Mammadiagnostik', 'MR-Mammographie'],
        },
        {
          title: 'Wissenschaftliche Tätigkeit',
          entries: [
            'Juni 2019: Habilitation im Fach Radiologie zum Thema „Optimierung der MR-Mammographie auf ihrem Weg zur Screening-Methode“ (Venia legendi)',
            'Januar 2017 – Mai 2017: Research rotation an der Abteilung für Radiologie, Deutsches Krebsforschungszentrum (DKFZ), Heidelberg',
            'Juli 2013 – Oktober 2013: Research rotation in der radiologischen Abteilung, Universitätsklinikum Jena',
            'November 2010: Dissertation an der Friedrich-Schiller-Universität Jena (09.11.2010). Thema „Duct-Obstruction-Sign – Gangektasie zur Abklärung der Differentialdiagnose DCIS versus Papillom in der MR-Mammographie“. Doktorvater: Prof. Dr. med. Pascal Baltzer (Gesamtprädikat: Magna cum laude).',
          ],
        },
        {
          title: 'Weitere Tätigkeiten und Qualifikationen',
          entries: [
            'Dezember 2016: Baden-Württemberg Zertifikat für Hochschuldidaktik in der Medizin (MQ 1 & 2)',
          ],
        },
        {
          title: 'Tätigkeit als Gutachter von wissenschaftlichen Fachzeitschriften',
          entries: [
            'European Radiology',
            'Investigative Radiology',
            'Academic Radiology',
            'European Journal of Radiology',
          ],
        },
        {
          title: 'Mitgliedschaften in Fachgesellschaften',
          entries: [
            'Seit 2016: Deutsche Gesellschaft für Ultraschall in der Medizin (Degum)',
            'Seit 2011: Deutsche Röntgengesellschaft (DRG)',
            'Seit 2011: Radiological Society of North America (RSNA)',
            'Seit 2011: European Society of Radiology (ESR)',
          ],
        },
        {
          title: 'Erfahrungen in klinischen Studien',
          entries: ['Principal investigator: USCT', 'Principal investigator: MA-DETECT'],
        },
        {
          title: 'Publikationen',
          variant: 'long',
          entries: [
            '1. Kaiser CG, Peschke P, Baltzer PAT. Axillary lymph node characterization in breast cancer patients using magnetic resonance imaging and diffusion weighted imaging (DWI). Eur J Radiol. 2013;82:2194-2198. Impact factor: 2,518',
            '2. Kaiser CG, Dietzel M, Fantini L, Baltzer PAT. Evaluation of presurgical breast MRI: are the standards being met? Springerplus. 2014;3:401. Impact factor 0.7',
            '3. Meyer B, Meyer H, Nordsiek C, et al. A superior vena cava filter device for neurosurgical patients with contraindication to heparin. Surg Neurol Int. 2014;5:113. Impact factor 0.74',
            '4. Kaiser CG, Borstelmann F, Länger F, et al. Cost effectiveness of MR-mammography as a solitary imaging technique in women with dense breasts: an economic evaluation of the TK-Foundation\'s mammography-screening-cohort. Springerplus. 2015;4:299. Impact factor 0.7',
            '5. Müller H, Steinbach JP, Malzkorn B, et al. Bevacizumab in combination with radiosurgery in recurrent malignant glioma: analysis of a matched cohort. J Neurooncol. 2015;122:373-379. Impact factor 2.9',
            '6. Kaiser CG, Borstelmann F, Länger F, et al. Cost-effectiveness of MR-mammography as a solitary imaging technique in women with dense breasts: an economic evaluation. PLoS One. 2015;10:e0141315. Impact factor 3.057',
            '7. Kaiser CG, Heinrich D, Bahrs A, et al. Evaluation of the BI-RADS categorization of breast ultrasound. SpringerPlus. 2016;5:188. Impact factor 1.63',
            '8. Kaiser CG, Baltzer PAT, Dietzel M, et al. Diffusion-weighted imaging of the breast: results of a multicenter study. Eur J Radiol. 2016;85(6):974-981. Impact factor 2.524',
            '9. Kaiser CG, Baltzer PAT, Dietzel M, et al. Dynamic contrast-enhanced MR imaging of the breast: is there any additional value of the first post-contrast series? Eur J Radiol. 2016;85(5):976-983. Impact factor 2.524',
            '10. Kaiser CG, Renz DM, Baltzer PAT, et al. Implementing a MR-mammography screening program for women with a familial history of breast cancer: breast cancer detection and tumor stage at diagnosis. SpringerPlus. 2016;5:189. Impact factor 1.63',
            '11. Kaiser CG, Dietzel M, Baltzer PAT. Breast cancer detection and tumor stage at diagnosis in women at familial risk for breast cancer after implementing an MR-mammography screening program: a systematic review and meta-analysis. PLoS One. 2016;11:e0148256. Impact factor 3.057',
            '12. Kaiser CG, Fuchsjäger MH, Baltzer PAT. Duct-Obstruction-Sign: new MR-mammography sign for the differential diagnosis of duct ectasia and DCIS. Breast J. 2017;23(6):703-709. Impact factor 2.652',
            '13. Strobel K, Kaiser CG, Paulsen F, et al. MRI results of an intensified surveillance program for women with a familial history of breast cancer. Clin Radiol. 2017;72(7):620.e1-620.e7. Impact factor 2.311',
            '14. Kaiser CG, Dietzel M, Baltzer PAT. Evaluation of non mass enhancement descriptors in the differential diagnosis of breast lesions: a pilot study. Eur J Radiol. 2017;96:82-91. Impact factor 2.524',
            '15. Kaiser CG, Kähne T, Häberle L, et al. MR-mammography in the diagnostic assessment of BI-RADS 4 lesions. SpringerPlus. 2017;6:85. Impact factor 1.63',
            '16. Baltzer PAT, Kaiser CG, Dietzel M, et al. Potential of mammography for the discrimination of breast cancer molecular subtypes. Breast Cancer Res Treat. 2017;166(3):735-745. Impact factor 4.123',
            '17. Grimm LJ, Anderson AL, Baker JA, Johnson KS, Walsh R, Sykora J, Gutierrez RL, Camp M, Brem RF, Rapelyea J, Weinstein SP, Conant EF, Herschorn SD, Pritchard JW, Synnestvedt MB, Moy L. Breast imaging reporting and data system (BI-RADS) assessment categories and breast cancer diagnosis: a meta-analysis. Eur Radiol. 2017;27(9):3537-3544. Impact factor 4.027',
            '18. Renz DM, Baltzer PAT, Kaiser CG. Clinical management of radial scars without atypia diagnosed at percutaneous breast biopsy: an online survey and literature review. SpringerPlus. 2018;7:167. Impact factor 1.63',
            '19. Bayerl C, Kaiser CG, Hummel M, et al. Sensitivity of MRI versus mammography for detecting foci of multifocal, multicentric breast cancer in routine clinical practice. Eur J Radiol. 2018;99:118-124. Impact factor 2.624',
            '20. Kaiser CG, Baltzer PAT, Bick U, et al. Comparison of different MR imaging protocol paradigms for the detection of suspicious findings in breast MRI: a prospective randomized clinical trial. The Breast. 2019;43:102-109. Impact factor 2.987',
          ],
        },
      ],
    },
    contact: {
      hero: {
        eyebrow: 'Kontakt',
        title: 'Wir freuen uns auf Ihre Anfrage.',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta.',
      },
      form: {
        name: 'Name',
        email: 'E-Mail',
        organization: 'Organisation',
        message: 'Nachricht',
        submit: 'Nachricht senden',
        hint: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis.',
      },
      badges: ['Zertifizierung', 'Weiterbildung', 'Beratung'],
    },
    impressum: {
      hero: {
        eyebrow: 'Impressum',
        title: 'Rechtliche Angaben',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus.',
      },
      legal: {
        sections: [
          {
            title: 'Angaben gemäß § 5 TMG',
            text: 'Kaiser MRT-Zertifizierung GmbH\nMusterstraße 12\n68161 Mannheim\nDeutschland',
          },
          {
            title: 'Vertreten durch',
            text: 'Prof. Dr. med. Clemens Kaiser',
          },
          {
            title: 'Kontakt',
            text: 'Telefon: +49 621 123 45 67\nE-Mail: kontakt@kaiser-mrt-zertifizierung.de',
          },
          {
            title: 'Registereintrag',
            text: 'Registergericht: Amtsgericht Mannheim\nRegisternummer: HRB 000000',
          },
          {
            title: 'Umsatzsteuer-ID',
            text: 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE000000000',
          },
          {
            title: 'Steuernummer',
            text: 'Steuernummer: 000/000/00000',
          },
          {
            title: 'Verantwortlich für den Inhalt',
            text: 'Prof. Dr. med. Clemens Kaiser\nMusterstraße 12\n68161 Mannheim',
          },
        ],
      },
    },
  },
  en: {
    meta: {
      siteTitle: 'Kaiser MRI Certification GmbH',
      siteTagline: 'Certification, Education, Consulting',
    },
    footer: {
      navigation: 'Navigation',
      newsletterTitle: 'Newsletter',
      newsletterText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel semper lorem.',
      newsletterCta: 'Lorem ipsum',
      impressumLabel: 'Imprint',
      taxNumberLabel: 'Tax number',
    },
    nav: {
      home: 'MR-Max (Mr Ausbildungssoftware)',
      certification: 'Certification',
      education: 'Courses',
      consultation: 'Second opinion portal',
      news: 'News',
      about: 'About us',
      contact: 'Contact',
      impressum: 'Imprint',
    },
    home: {
      hero: {
        eyebrow: 'Breast MRI Certification',
        title: 'Quality that becomes visible.',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non lacus eget nulla tincidunt placerat.',
        primaryCta: 'Start certification',
        secondaryCta: 'Request consulting',
      },
      highlights: {
        title: 'Our approach',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sapien id augue tempor tristique.',
        items: [
          {
            title: 'Auditable standards',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at felis nec sapien.',
          },
          {
            title: 'Practice-led education',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim sem sed.',
          },
          {
            title: 'Tailored consulting',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.',
          },
        ],
      },
      pathways: {
        title: 'Certification pathway',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a est a ante efficitur.',
        steps: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          'Pellentesque habitant morbi tristique senectus et netus.',
          'Integer tincidunt nisi quis justo efficitur, vitae bibendum.',
          'Sed posuere metus in aliquet laoreet.',
        ],
      },
      quote: {
        title: 'From the field',
      },
      news: {
        title: 'Latest',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at augue eget.',
      },
    },
    certification: {
      hero: {
        eyebrow: 'Certification',
        title: 'Breast MRI certification with clarity.',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet ligula et.',
      },
      sections: [
        {
          title: 'Program overview',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet turpis eu velit tempus sagittis.',
        },
        {
          title: 'Criteria & documentation',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae sapien sed lorem cursus vestibulum.',
        },
        {
          title: 'Audit & guidance',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra, massa sed faucibus.',
        },
      ],
    },
    education: {
      hero: {
        eyebrow: 'Education',
        title: 'Training for a new level of quality.',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at justo sed.',
      },
      tracks: [
        {
          title: 'Foundations module',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget dignissim augue.',
        },
        {
          title: 'Hands-on workshops',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt.',
        },
        {
          title: 'Peer review sessions',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet, elit at.',
        },
      ],
    },
    consultation: {
      hero: {
        eyebrow: 'Consulting',
        title: 'Strategic guidance for breast MRI.',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim.',
      },
      offerings: [
        {
          title: 'Site analysis',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed lorem.',
        },
        {
          title: 'Process design',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non eros.',
        },
        {
          title: 'Quality monitoring',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant.',
        },
      ],
    },
    news: {
      hero: {
        eyebrow: 'News',
        title: 'Updates & publications',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in mi at.',
      },
      items: [
        {
          title: 'Lorem ipsum dolor sit amet',
          date: '04 Feb 2026',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium.',
        },
        {
          title: 'Integer vitae justo nec',
          date: '22 Jan 2026',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum.',
        },
        {
          title: 'Suspendisse potenti gravida',
          date: '08 Jan 2026',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate.',
        },
      ],
    },
    about: {
      hero: {
        eyebrow: 'Prof. Kaiser',
        title: 'Experience, research, responsibility.',
        subtitle:
          'Head of Breast Imaging and senior physician in the Department of Radiology and Nuclear Medicine at Mannheim University Medical Center.',
      },
      profile: {
        title: 'Profile',
        roleLabel: 'Position',
        credentialsLabel: 'Qualification',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        linkedinLabel: 'LinkedIn',
      },
      sectionsTitle: 'Curriculum Vitae & Publications',
      sections: [
        {
          title: 'Curriculum Vitae',
          entries: [
            'Prof. Dr. med. Clemens Kaiser',
            'Dipl. Kfm. (EMA), B.A.',
            'Head of Breast Imaging',
            'Senior Physician, Department of Radiology and Nuclear Medicine, Mannheim University Medical Center',
          ],
        },
        {
          title: 'Clinical focus',
          entries: ['Multimodal breast imaging', 'Breast MRI'],
        },
        {
          title: 'Scientific activity',
          entries: [
            'June 2019: Habilitation in Radiology on the topic “Optimizing breast MRI on its way to a screening method” (Venia legendi)',
            'January 2017 – May 2017: Research rotation at the Department of Radiology, German Cancer Research Center (DKFZ), Heidelberg',
            'July 2013 – October 2013: Research rotation in the radiology department, University Hospital Jena',
            'November 2010: Dissertation at Friedrich Schiller University Jena (09.11.2010). Topic “Duct-Obstruction-Sign – duct ectasia for differential diagnosis of DCIS versus papilloma in breast MRI”. Supervisor: Prof. Dr. med. Pascal Baltzer (overall grade: magna cum laude).',
          ],
        },
        {
          title: 'Additional activities and qualifications',
          entries: [
            'December 2016: Baden-Württemberg certificate for higher education didactics in medicine (MQ 1 & 2)',
          ],
        },
        {
          title: 'Reviewer for scientific journals',
          entries: [
            'European Radiology',
            'Investigative Radiology',
            'Academic Radiology',
            'European Journal of Radiology',
          ],
        },
        {
          title: 'Memberships in professional societies',
          entries: [
            'Since 2016: Deutsche Gesellschaft für Ultraschall in der Medizin (Degum)',
            'Since 2011: Deutsche Röntgengesellschaft (DRG)',
            'Since 2011: Radiological Society of North America (RSNA)',
            'Since 2011: European Society of Radiology (ESR)',
          ],
        },
        {
          title: 'Clinical studies experience',
          entries: ['Principal investigator: USCT', 'Principal investigator: MA-DETECT'],
        },
        {
          title: 'Publications',
          variant: 'long',
          entries: [
            '1. Kaiser CG, Peschke P, Baltzer PAT. Axillary lymph node characterization in breast cancer patients using magnetic resonance imaging and diffusion weighted imaging (DWI). Eur J Radiol. 2013;82:2194-2198. Impact factor: 2,518',
            '2. Kaiser CG, Dietzel M, Fantini L, Baltzer PAT. Evaluation of presurgical breast MRI: are the standards being met? Springerplus. 2014;3:401. Impact factor 0.7',
            '3. Meyer B, Meyer H, Nordsiek C, et al. A superior vena cava filter device for neurosurgical patients with contraindication to heparin. Surg Neurol Int. 2014;5:113. Impact factor 0.74',
            '4. Kaiser CG, Borstelmann F, Länger F, et al. Cost effectiveness of MR-mammography as a solitary imaging technique in women with dense breasts: an economic evaluation of the TK-Foundation\'s mammography-screening-cohort. Springerplus. 2015;4:299. Impact factor 0.7',
            '5. Müller H, Steinbach JP, Malzkorn B, et al. Bevacizumab in combination with radiosurgery in recurrent malignant glioma: analysis of a matched cohort. J Neurooncol. 2015;122:373-379. Impact factor 2.9',
            '6. Kaiser CG, Borstelmann F, Länger F, et al. Cost-effectiveness of MR-mammography as a solitary imaging technique in women with dense breasts: an economic evaluation. PLoS One. 2015;10:e0141315. Impact factor 3.057',
            '7. Kaiser CG, Heinrich D, Bahrs A, et al. Evaluation of the BI-RADS categorization of breast ultrasound. SpringerPlus. 2016;5:188. Impact factor 1.63',
            '8. Kaiser CG, Baltzer PAT, Dietzel M, et al. Diffusion-weighted imaging of the breast: results of a multicenter study. Eur J Radiol. 2016;85(6):974-981. Impact factor 2.524',
            '9. Kaiser CG, Baltzer PAT, Dietzel M, et al. Dynamic contrast-enhanced MR imaging of the breast: is there any additional value of the first post-contrast series? Eur J Radiol. 2016;85(5):976-983. Impact factor 2.524',
            '10. Kaiser CG, Renz DM, Baltzer PAT, et al. Implementing a MR-mammography screening program for women with a familial history of breast cancer: breast cancer detection and tumor stage at diagnosis. SpringerPlus. 2016;5:189. Impact factor 1.63',
            '11. Kaiser CG, Dietzel M, Baltzer PAT. Breast cancer detection and tumor stage at diagnosis in women at familial risk for breast cancer after implementing an MR-mammography screening program: a systematic review and meta-analysis. PLoS One. 2016;11:e0148256. Impact factor 3.057',
            '12. Kaiser CG, Fuchsjäger MH, Baltzer PAT. Duct-Obstruction-Sign: new MR-mammography sign for the differential diagnosis of duct ectasia and DCIS. Breast J. 2017;23(6):703-709. Impact factor 2.652',
            '13. Strobel K, Kaiser CG, Paulsen F, et al. MRI results of an intensified surveillance program for women with a familial history of breast cancer. Clin Radiol. 2017;72(7):620.e1-620.e7. Impact factor 2.311',
            '14. Kaiser CG, Dietzel M, Baltzer PAT. Evaluation of non mass enhancement descriptors in the differential diagnosis of breast lesions: a pilot study. Eur J Radiol. 2017;96:82-91. Impact factor 2.524',
            '15. Kaiser CG, Kähne T, Häberle L, et al. MR-mammography in the diagnostic assessment of BI-RADS 4 lesions. SpringerPlus. 2017;6:85. Impact factor 1.63',
            '16. Baltzer PAT, Kaiser CG, Dietzel M, et al. Potential of mammography for the discrimination of breast cancer molecular subtypes. Breast Cancer Res Treat. 2017;166(3):735-745. Impact factor 4.123',
            '17. Grimm LJ, Anderson AL, Baker JA, Johnson KS, Walsh R, Sykora J, Gutierrez RL, Camp M, Brem RF, Rapelyea J, Weinstein SP, Conant EF, Herschorn SD, Pritchard JW, Synnestvedt MB, Moy L. Breast imaging reporting and data system (BI-RADS) assessment categories and breast cancer diagnosis: a meta-analysis. Eur Radiol. 2017;27(9):3537-3544. Impact factor 4.027',
            '18. Renz DM, Baltzer PAT, Kaiser CG. Clinical management of radial scars without atypia diagnosed at percutaneous breast biopsy: an online survey and literature review. SpringerPlus. 2018;7:167. Impact factor 1.63',
            '19. Bayerl C, Kaiser CG, Hummel M, et al. Sensitivity of MRI versus mammography for detecting foci of multifocal, multicentric breast cancer in routine clinical practice. Eur J Radiol. 2018;99:118-124. Impact factor 2.624',
            '20. Kaiser CG, Baltzer PAT, Bick U, et al. Comparison of different MR imaging protocol paradigms for the detection of suspicious findings in breast MRI: a prospective randomized clinical trial. The Breast. 2019;43:102-109. Impact factor 2.987',
          ],
        },
      ],
    },
    contact: {
      hero: {
        eyebrow: 'Contact',
        title: 'We look forward to your request.',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta.',
      },
      form: {
        name: 'Name',
        email: 'Email',
        organization: 'Organization',
        message: 'Message',
        submit: 'Send message',
        hint: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis.',
      },
      badges: ['Certification', 'Education', 'Consulting'],
    },
    impressum: {
      hero: {
        eyebrow: 'Imprint',
        title: 'Legal information',
        subtitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus.',
      },
      legal: {
        sections: [
          {
            title: 'Information according to § 5 TMG',
            text: 'Kaiser MRI Certification GmbH\nMusterstraße 12\n68161 Mannheim\nGermany',
          },
          {
            title: 'Represented by',
            text: 'Prof. Dr. med. Clemens Kaiser',
          },
          {
            title: 'Contact',
            text: 'Phone: +49 621 123 45 67\nEmail: kontakt@kaiser-mrt-zertifizierung.de',
          },
          {
            title: 'Register entry',
            text: 'Register court: Amtsgericht Mannheim\nRegister number: HRB 000000',
          },
          {
            title: 'VAT ID',
            text: 'VAT identification number according to § 27 a Umsatzsteuergesetz: DE000000000',
          },
          {
            title: 'Tax number',
            text: 'Tax number: 000/000/00000',
          },
          {
            title: 'Responsible for content',
            text: 'Prof. Dr. med. Clemens Kaiser\nMusterstraße 12\n68161 Mannheim',
          },
        ],
      },
    },
  },
} as const

export const sharedContent = shared
