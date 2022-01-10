import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";

const Home = (props) => {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
        </Container>
    );
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px); //calculate the 100view height - header in pixels
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px); //calculate the 3.5view width + space in pixels

    &:after {
        background: url('/images/home-background.png') center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0;
        opacity: 1;
        z-index: -1;
    }
`

export default Home;