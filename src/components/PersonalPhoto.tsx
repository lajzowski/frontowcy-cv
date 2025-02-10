interface Props {
  src: string;
  alt: string;
}

export const PersonalPhoto = ({src, alt}: Props) => (
  <img className={'cv-photo'} src={src} alt={alt}/>
)
