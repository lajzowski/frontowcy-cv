import { CvData } from './types/cvData.interface.ts';
import { PersonalPhoto } from './components/PersonalPhoto.tsx';
import { Experience } from './components/Experience.tsx';
import './Global.scss'
import { Education } from './components/Education.tsx';
import { Footer } from './components/Footer.tsx';


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
        <PersonalPhoto alt={'Example photo of a woman'} src={cvData.photo}/>
        <p className={'name'}>{cvData.name} {cvData.lastName}</p>
        <small>{cvData.position}</small>
      </aside>
      <section className={'details'}>
        <h2>Experience</h2>
        <Experience experience={cvData.experience}/>
        <h2>Education</h2>
        <Education education={cvData.education} />
      </section>
      <Footer/>
    </main>
  );


}

