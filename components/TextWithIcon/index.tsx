type TextWithIconProps = {
  icon: string;
  text: string;
  textColor?: string;
}

const TextWithIcon: React.FC<TextWithIconProps> = ({icon, text, textColor}) => {
  return (
    <div className={`${textColor ? textColor : 'text-primary-content'} flex items-center`}>
      <p className="text-2xl">{icon}</p>
      <p className="ml-6 text-xl">{text}</p>
    </div>
  );
}

export default TextWithIcon;