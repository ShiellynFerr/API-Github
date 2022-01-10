import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPicture from '../components/userPicture';
import UserDetails from '../components/userDetails';
import UserNumbers from '../components/userNumbers';

export default function Home() {
    return (
        <Container>
            <Header />
            <UserContainer>
                <UserPicture url="https://avatars.githubusercontent.com/u/84290343?v=4" alternativeText= "img"/>
                <UserDetails name ="Shiellyn Ferreira" login = "@ShiellynFerr" bio = "Oi eu sou a Shiellyn"/>
                <UserNumbers/>
            </UserContainer>
        </Container>
    );
}