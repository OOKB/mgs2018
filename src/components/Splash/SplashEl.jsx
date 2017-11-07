import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { sample, reject } from 'lodash'

// import LinkEl from 'cape-mixer/lib/Link/Link'
import mgsLogo from '../../mgs2018logo.svg'
import yearLogo from '../../mgs2018year.svg'
import micaLogo from '../../micalogo-small.svg'
import Blurb from '../Blurb/Blurb'
import Logo from '../Logo/Logo'
import Footer from '../Footer/Footer'
import Collage from '../Collage/Collage'
import { Wrapper, LogoWrapper } from './styles'
import { colors } from '../../util'

const themes = {
  orange: {
    color: colors.alt.orange,
  },
  blue: {
    color: colors.alt.blue,
  },
  green: {
    color: colors.alt.green,
  },
  deepBlue: {
    color: colors.alt.deepBlue,
  },
  pink: {
    color: colors.alt.pink,
  },
}


class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.orange,
    }
    this.changeTheme = this.changeTheme.bind(this)
  }

  componentWillMount() {
    this.changeTheme()
  }

  changeTheme() {
    const t = reject(themes, this.state.theme)
    const s = sample(t)
    console.log(s)
    this.setState({ theme: s })
  }

  render() {
    const { art, siteName } = this.props
    const { theme } = this.state
    return (
      <ThemeProvider theme={theme}>
        <Wrapper onClick={this.changeTheme}>
          <LogoWrapper top>
            {siteName && <Logo primary left logoSrc={mgsLogo} siteName={siteName} />}
            <Logo right logoSrc={micaLogo} siteName={siteName} />
          </LogoWrapper>
          {art && art.length > 0 && <Collage collection={art} />}
          <LogoWrapper>
            <Logo right primary logoSrc={yearLogo} siteName={siteName} />
          </LogoWrapper>
          {siteName && <Blurb mgsBlock={mgsLogo} siteName={siteName} />}
          {/* <LinkEl action={loginAction} {...login} /> */}
          <Footer />
        </Wrapper>
      </ThemeProvider>
    )
  }
}

const artPropType = PropTypes.shape({
  id: PropTypes.string,
  image: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
  }),
  title: PropTypes.string,
})
Splash.propTypes = {
  art: PropTypes.arrayOf(artPropType),
  artAll: PropTypes.objectOf(artPropType),
  siteName: PropTypes.string.isRequired,
}
Splash.defaultProps = {
  art: null,
  artAll: null,
}
Splash.defaultProps = {
  art: null,
  siteName: 'MICA Grad Show 2018',
}

export default Splash
