import { Avatar } from '../../components/Avatar/Avatar';
import { EducationCard } from '../../components/EducationCard/EducationCard';
import { ExperienceCard } from '../../components/ExperienceCard/ExperienceCard';
import { Greetings } from '../../components/Greetings/Greetings';
import { Interests } from '../../components/Interests/Interests';
import { ProgressBar } from '../../components/ProgressBar/ProgressBar';
import { Section } from '../../components/Section/Section';
import { Tools } from '../../components/Tools/Tools';

import styles from './Summary.module.css';

export class Summary {
  #element;

  constructor() {
    this.#element = document.createElement('div');
    this.#element.setAttribute('id', 'cv');
    this.#element.classList.add(styles.root);
  }

  get element() {
    return this.#element;
  }

  #createAvatar() {
    const avatar = new Avatar();
    avatar.url = '/static/img/27f8803676f1e5a26c4e31dbaf5cba56.png';
    avatar.render();
    return avatar.element;
  }

  #createGreetings() {
    const greetings = new Greetings();
    greetings.greetings = 'Hello 👋🏻 I’m';
    greetings.name = 'Karthik SR';
    greetings.position = 'UX/UI Designer';
    greetings.render();

    const greetingsSection = new Section();
    greetingsSection.content = greetings.element;
    greetingsSection.render();

    return greetingsSection.element;
  }

  #createLanguages() {
    const languagesSection = new Section();
    languagesSection.title = 'Languages';

    const languages = [
      { name: 'English', grade: 100 },
      { name: 'Malayalam', grade: 100 },
      { name: 'Hindi', grade: 70 },
    ];

    const languageContainer = document.createElement('div');
    languageContainer.classList.add(styles.languages);

    languages.forEach(language => {
      const progressBar = new ProgressBar();
      progressBar.title = language.name;
      progressBar.progress = language.grade;
      progressBar.render();
      languageContainer.appendChild(progressBar.element);
    });

    languagesSection.content = languageContainer;
    languagesSection.render();
    return languagesSection.element;
  }

  #createExperience() {
    const experiencesSection = new Section();
    experiencesSection.title = 'Experience';

    const experiences = [
      {
        startDate: new Date(),
        endDate: 'Present',
        role: 'Marketing Manager',
        description: 'Pankayam | Full-time',
        responsibilities: [
          'Strategy development and planning of campaigns that promote the business and generate genuine traffic',
          'SEO Content Creation for Blogs, Website, Social media',
        ],
      },
      {
        startDate: new Date(),
        endDate: 'Present',
        role: 'Graphic / Web designer',
        description: 'Freelance',
        responsibilities: [
          'Development of internal projects from scratch, product design of brands',
          'Landing page, webapps and hybrid apps',
          'Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.',
        ],
      },
      {
        startDate: new Date(),
        endDate: 'Present',
        role: 'Legal Assistant',
        description: 'Law Firm | Intern',
        responsibilities: [
          'Provide administrative support to lawyer and enhance office effectiveness',
          'Handle communication with clients, witnesses etc.',
          'repare case briefs and summarize depositions, interrogatories and testimony',
        ],
      },
    ];

    const experiencesContainer = document.createElement('div');
    experiencesContainer.classList.add(styles.experiences);

    experiences.forEach((experience, index) => {
      const experienceCard = new ExperienceCard(index === 0);
      experienceCard.startOfPeriod = experience.startDate;
      experienceCard.endOfPeriod = experience.endDate;
      experienceCard.position = experience.role;
      experienceCard.description = experience.description;
      experienceCard.responsibilities = experience.responsibilities;
      experienceCard.render();

      experiencesContainer.appendChild(experienceCard.element);
    });

    experiencesSection.content = experiencesContainer;
    experiencesSection.render();
    return experiencesSection.element;
  }

  #createTools() {
    const toolsSection = new Section();
    toolsSection.title = 'Tools';

    const toolsGroups = [
      {
        name: 'design',
        tools: [
          '../../static/img/logoAdobeIllustrator.svg',
          '../../static/img/logoAdobePhotoshop.svg',
          '../../static/img/logoAdobePremiere.svg',
          '../../static/img/logoFigma.svg',
          '../../static/img/logoMeet.svg',
          '../../static/img/logoNotion.svg',
        ],
      },
      {
        name: 'design',
        tools: [
          '../../static/img/logoAdobeIllustrator.svg',
          '../../static/img/logoAdobePhotoshop.svg',
          '../../static/img/logoAdobePremiere.svg',
          '../../static/img/logoFigma.svg',
        ],
      },
      {
        name: 'design',
        tools: [
          '../../static/img/logoAdobeIllustrator.svg',
          '../../static/img/logoAdobePhotoshop.svg',
          '../../static/img/logoAdobePremiere.svg',
        ],
      },
    ];

    const toolsContainer = document.createElement('div');
    toolsContainer.classList.add(styles.tools);

    toolsGroups.forEach(toolsGroup => {
      const tools = new Tools();
      tools.title = toolsGroup.name;
      tools.tools = toolsGroup.tools;
      tools.render();

      toolsContainer.appendChild(tools.element);
    });

    toolsSection.content = toolsContainer;
    toolsSection.render();
    return toolsSection.element;
  }

  #createEducationCard() {
    const section = new Section();
    section.title = 'Education';

    const educations = [
      {
        periodStart: new Date(),
        periodEnd: new Date(),
        title: ' UI/UX',
        institution: 'Coursera',
        tags: ['#UX', '#UI', '#research', '#DesignSystem', '#Ui', '#wireframing', '#figma', '#Ux'],
      },
      {
        periodStart: new Date(),
        periodEnd: new Date(),
        title: ' UI/UX',
        institution: 'Coursera',
        tags: ['#UX', '#UI', '#research', '#DesignSystem', '#Ui', '#wireframing', '#figma', '#Ux'],
      },
      {
        periodStart: new Date(),
        periodEnd: new Date(),
        title: ' UI/UX',
        institution: 'Coursera',
        tags: ['#UX', '#UI', '#research', '#DesignSystem', '#Ui', '#wireframing', '#figma', '#Ux'],
      },
    ];

    const container = document.createElement('div');
    container.classList.add(styles.education);

    educations.forEach((education, index) => {
      const educationCard = new EducationCard();
      educationCard.title = education.title;
      educationCard.isFavorite = index === 0;
      educationCard.periodStart = education.periodStart;
      educationCard.periodEnd = education.periodEnd;
      educationCard.institution = education.institution;
      educationCard.tags = education.tags;
      educationCard.render();

      container.appendChild(educationCard.element);
    });

    section.content = container;
    section.render();
    return section.element;
  }

  #createInterests() {
    const section = new Section();
    section.title = 'Interests';

    const chipLabels = ['branding', 'design', 'photography', 'artificial intelligence',
      'illustration', 'typography', 'social networks', 'research', 'dron pilot', 'games',
    ];

    const interests = new Interests();
    interests.interests = chipLabels;
    interests.render();

    section.content = interests.element;
    section.render();
    return section.element;
  }

  render() {
    this.#element.innerHTML = `
      <div class='firstRow ${styles.firstRow}'></div>
      <div class='secondRow ${styles.secondRow}'></div>
      <div class='thirdRow ${styles.thirdRow}'></div>
    `;

    this.#element.querySelector('.firstRow').appendChild(this.#createAvatar());
    this.#element.querySelector('.firstRow').appendChild(this.#createGreetings());
    this.#element.querySelector('.firstRow').appendChild(this.#createLanguages());

    this.#element.querySelector('.secondRow').appendChild(this.#createExperience());
    this.#element.querySelector('.secondRow').appendChild(this.#createTools());

    this.#element.querySelector('.thirdRow').appendChild(this.#createEducationCard());
    this.#element.querySelector('.thirdRow').appendChild(this.#createInterests());
  }
}
