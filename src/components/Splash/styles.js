import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 85rem;
  margin: 0 auto;
`

export const LogoWrapper = styled.div`
  position: relative;
  margin: ${props => (props.top ? '1.5rem 0' : '-4rem 0')};
`
