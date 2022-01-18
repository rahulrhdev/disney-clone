import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
           <h4>Recommended for you</h4>
           <Content>
                <Wrap>
                    <img src="https://www.epressi.com/media/userfiles/132849/1598856605/cache/simpsonsbg_2013_r1d-550x500,q=75,e=jpeg.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://www.epressi.com/media/userfiles/132849/1598856605/cache/simpsonsbg_2013_r1d-550x500,q=75,e=jpeg.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://www.epressi.com/media/userfiles/132849/1598856605/cache/simpsonsbg_2013_r1d-550x500,q=75,e=jpeg.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://www.epressi.com/media/userfiles/132849/1598856605/cache/simpsonsbg_2013_r1d-550x500,q=75,e=jpeg.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://www.epressi.com/media/userfiles/132849/1598856605/cache/simpsonsbg_2013_r1d-550x500,q=75,e=jpeg.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://www.epressi.com/media/userfiles/132849/1598856605/cache/simpsonsbg_2013_r1d-550x500,q=75,e=jpeg.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://www.epressi.com/media/userfiles/132849/1598856605/cache/simpsonsbg_2013_r1d-550x500,q=75,e=jpeg.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://www.epressi.com/media/userfiles/132849/1598856605/cache/simpsonsbg_2013_r1d-550x500,q=75,e=jpeg.jpg" />
                </Wrap>
           </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div `
    padding: 
`

const Content = styled.div `
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr))

`

const Wrap = styled.div `
    cursor: pointer;
    border-radius:10px;
    overflow:hidden;
    margin-bottom: 20px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: 3px solid rgba(249, 249, 249, 0.8);
    }
`
