import styled from 'styled-components'
import colors from '../../util'

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin: -4rem auto 4rem;
`
export const Tagline = styled.h1`
	margin: 0;
	font-size: 4.25rem;
	color: ${colors.alt.green};
	max-width: 43rem;
`
export const Description = styled.p`
	font-size: 1.25rem;
	max-width: 31rem;
`
export const EventDate = styled.h2`
	font-size: 1.75rem;
	font-weight: 400;
`
