import { ExampleWorkForm,ExampleWorkHeader } from '../../components/';
import { WrapperHomePage } from './styles';

export const HomePage: React.FC = () => {
  return (
    <div>
        <ExampleWorkHeader />
      <div>
        <WrapperHomePage>
        <ExampleWorkForm/>
      </WrapperHomePage>
      </div>
    </div>
  );
};
