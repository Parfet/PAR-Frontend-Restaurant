import styled from 'styled-components'

interface TextDirection {
  isWhite?: boolean
  isBold?: boolean
}

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${ (props: TextDirection) => props.isWhite ? 'white' : 'black'};
`

export const SubTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${ (props: TextDirection) => props.isWhite ? 'white' : 'black'};
`

export const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${ (props: TextDirection) => props.isWhite ? 'white' : 'black'};
`

export const SubHeader = styled.span`
  font-size: 16px;
  font-weight: ${(props: TextDirection) => props.isBold ? 'bold' : 'normal'};
  color: ${ (props: TextDirection) => props.isWhite ? 'white' : 'black'};
`

export const RegularText = styled.span`
  font-size: 14px;
  font-weight: ${(props: TextDirection) => props.isBold ? 'bold' : 'normal'};
  color: ${ (props: TextDirection) => props.isWhite ? 'white' : 'black'};
  `

export const NormalText = styled.span`
  font-size: 12px;
  font-weight: ${(props: TextDirection) => props.isBold ? 'bold' : 'normal'};
  color: ${ (props: TextDirection) => props.isWhite ? 'white' : 'black'};
`

export const SmallText = styled.span`
  font-size: 10px;
  color: ${ (props: TextDirection) => props.isWhite ? 'white' : 'black'};
`

export const TinyText = styled.span`
  font-size: 9px;
  color: ${ (props: TextDirection) => props.isWhite ? 'white' : 'black'};
`

