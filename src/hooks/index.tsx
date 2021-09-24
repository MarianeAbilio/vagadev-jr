import UseCartProvider from './useCart/provider';

const AppProvider: React.FC = ({ children }) => {
  return <UseCartProvider>{children}</UseCartProvider>;
};

export default AppProvider;
