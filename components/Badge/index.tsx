type BadgeProps = {
  children: React.ReactNode;
};

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <div className="px-1 flex flex-col justify-center rounded w-fit-content bg-primary text-primary-content text-sm">
      {children}
    </div>
  );
};

export default Badge;
