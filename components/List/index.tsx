type ListProps = {
  children: React.ReactNode;
  className?: string;
};

type ListItemProps = {
  children: React.ReactNode;
  className?: string;
};

export const List: React.FC<ListProps> = ({children, className}) => {
  return <ul className={`${className ? className : ''}`}>{children}</ul>;
};

export const ListItem: React.FC<ListItemProps> = ({children, className}) => {
  return <li className={`my-2 ${className ? className : ''}`}>{children}</li>;
};
