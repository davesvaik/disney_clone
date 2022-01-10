import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" />
                    <SignUp>GET ALL THESE</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon 
                        for an additional fee with a Disney+ subscription. 
                        As of 03/26/21, the price of Disney+ and The Disney Bundle 
                        will increase by 1$.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`

const Content = styled.div`
    margin-bottom: 10vw;
    display: flex;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    flex-direction: column:
    padding: 80px 40px;
    height: 120%;
`
const BgImage = styled.div`
    background-image: url("/images/login-background.jpg");
    z-index: -1;
    background-size: cover;
    background-position: top;
    height: 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
`
const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap:wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
`
const CTALogoOne = styled.img`
    margin-bottom: 12px;
    min-heigth: 1px;
    display: block;
    width: 100%;
`
const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    &:hover {
        background-color: #0483ee;
        cursor: pointer;
    }
`
const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 12px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`
const CTALogoTwo = styled.img`
    margin-bottom: 20px;
    min-heigth: 1px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`

export default Login;