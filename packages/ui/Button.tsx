type Props = {
  title?: string;
  onClick: React.EventHandler<React.MouseEvent>;
};

export const Button = ({ title = "Hello React", onClick }: Props) => {
  return (
    <button onClick={onClick} type="button">
      {title}
    </button>
  );
};
