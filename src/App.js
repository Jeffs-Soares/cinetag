import Cabecalho from "components/Cabecalho/Cabecalho";
import Container from "components/Container/Container";
import Rodape from "components/Rodape/Rodape";
import Favoritosprovider from "context/Favoritos";

import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Cabecalho />
        <Container>
          <Favoritosprovider>
            <Outlet /> 
          </Favoritosprovider>
        </Container>
      <Rodape />
    </>
  );
};

export default App;
