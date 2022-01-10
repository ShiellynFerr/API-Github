import { useHistory } from "react-router-dom";
import { Container, NumberContainer } from "./styles";

const UserNumbers = (props) => {
  const history = useHistory()
  const handleOnClick = route => history.push(route)
  return (
    <Container>
        <NumberContainer onClick ={() => handleOnClick('/repos')}> 
          <h1>21</h1>
          <h2>Repositorio</h2>
        </NumberContainer>

        <NumberContainer>
          <h1>13</h1>
          <h2>Seguidores</h2>
        </NumberContainer>

        <NumberContainer>
           <h1>50</h1>
          <h2>Seguindo</h2>
        </NumberContainer>
    </Container>
);
  };

export default UserNumbers;
