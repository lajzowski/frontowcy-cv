import { CvData } from '../types/cvData.interface.ts';

interface Props {
  education: CvData['education'];
}

export const Education = ({education}: Props) => (
  <ul>
    {
      education.map((education, _x) => <li key={_x}>{education}</li>)
    }
  </ul>
)
