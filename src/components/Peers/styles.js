import styled from 'styled-components'

export const NameLink = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  a {
    color: ${props => props.theme.color};
    text-decoration: underline;
    &:hover {
      opacity: 0.5;
    }
  }
`
