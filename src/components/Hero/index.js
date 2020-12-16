import React from 'react'
import Video from '../../videos/video.mp4'
import styled from 'styled-components'
import { Button } from '../Styles'

const Container = styled.div``

const Background = styled.div``

const VideoImport = styled.video``

const Content = styled.div``

const H1 = styled.h1``

const P = styled.p``

const Wrapper = styled.div``



const Hero = () => {


    return (
        <Container>
            <Background>
                <VideoImport autoPlay loop muted src={Video} type='video/mp4' />
            </Background>
            <Content>
                <H1>921steak</H1>
                <P>best steak in the game</P>
                <Wrapper>
                    <Button to='reserve' />
                </Wrapper>
            </Content>
            
        </Container>
    )
}

export default Hero
