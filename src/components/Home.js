import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommend from "./Recommend";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/user/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommend = [];
    let newDisney = [];
    let original = [];
    let trending = [];
  
    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
          snapshot.docs.map((doc) => {
            switch (doc.data().type) {
              case "recommend":
                recommend = [...recommend, { id: doc.id, ...doc.data() }];
                break;
    
              case "new":
                newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
                break;
    
              case "original":
                original = [...original, { id: doc.id, ...doc.data() }];
                break;
    
              case "trending":
                trending = [...trending, { id: doc.id, ...doc.data() }];
                break;
            }
          });
    
          dispatch(
            setMovies({
              recommend: recommend,
              newDisney: newDisney,
              original: original,
              trending: trending,
            })
          );
        });
      }, [userName]);

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommend />
            <NewDisney />
            <Originals />
            <Trending />
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