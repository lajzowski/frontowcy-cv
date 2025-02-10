import { CvData } from '../types/cvData.interface.ts';

interface Props {
  experience: CvData['experience'];
}


export const Experience = ({experience} :Props) => (
<ul>
  {
    experience
      .sort((a, b) => b.year - a.year)
      .map((experience, _x) => <li key={_x}>
        <strong>{experience.year}</strong> - {experience.description}
      </li>)
  }
</ul>
)
