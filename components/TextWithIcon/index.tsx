type TextWithEmojiProps = {
  icon: string;
  text: string;
  textColor?: string;
};

const TextWithEmoji: React.FC<TextWithEmojiProps> = ({
  icon,
  text,
  textColor,
}) => {
  return (
    <div
      className={`${
        textColor ? textColor : 'text-primary-content'
      } flex items-center`}
    >
      <p className="text-2xl">{icon}</p>
      <p className="ml-6 text-xl">{text}</p>
    </div>
  );
};

export default TextWithEmoji;
