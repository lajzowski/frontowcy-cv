import { CvData } from './types/cvData.interface.ts';
import './App.scss'


export const App = () => {

  const cvData: CvData = {
    photo: 'https://images.pexels.com/photos/28771409/pexels-photo-28771409/free-photo-of-moody-black-and-white-portrait-of-a-woman.jpeg?auto=compress&cs=tinysrgb&w=315&h=188&dpr=2',
    name: 'Jane',
    lastName: 'Smith',
    position: 'Fullstack Developer',
    experience: [
      {
        year: 2020,
        description: 'Worked on developing scalable web applications.',
      },
      {
        year: 2022,
        description: 'Led a team of developers to build a client-facing platform.',
      },
    ],
    education: ['Bachelor’s Degree in Computer Science', 'Advanced JavaScript Certification'],
  };


  return (
    <main className="container">
      <header>
        <h1>CV {cvData.name} {cvData.lastName}</h1>
      </header>
      <aside className={'personal'}>
        <h2>Personal data</h2>
        <img className={'cv-photo'} src={cvData.photo} alt={'Example photo of a woman'}/>
        <p className={'name'}>{cvData.name} {cvData.lastName}</p>
        <small>{cvData.position}</small>
      </aside>
      <section className={'details'}>
        <h2>Experience</h2>
        <ul>
          {
            cvData.experience
              .sort((a,b) => b.year - a.year)
              .map((experience,_x) => <li key={_x}>
              <strong>{experience.year}</strong> - {experience.description}
             </li>)
          }
        </ul>
        <h2>Education</h2>
        <ul>
          {
            cvData.education.map((education,_x) => <li key={_x}>{education}</li>)
          }
        </ul>
      </section>
    </main>
  );



}

