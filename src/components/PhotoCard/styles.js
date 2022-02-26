import styled from 'styled-components'

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%; 
`

export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  filter: saturate(180%) hue-rotate(340deg) blur(0px);
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  & svg {
    margin-right: 4px;
    color:red;
  }

  border-radius: 10px;
    margin-top: -41px;
    margin-left: 3px;
    position: absolute;
    padding: 3px;
    background: #fefefe;
`
export const Article = styled.article`
 margin-bottom: 30px;
`