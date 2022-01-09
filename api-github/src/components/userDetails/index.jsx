import{
Container,
Name,
UserName,
Descripcion
} from './styles';

const UserDetails = props => (
<Container>
  <Name>{props.name}</Name>
  <UserName>{props.login}</UserName>
  <Descripcion>{props?.bio}</Descripcion>

</Container>
);

export default UserDetails;