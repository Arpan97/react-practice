interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="min-h-screen">{children}</div>;
};

export default Container;
