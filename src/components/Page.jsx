import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { sample, reject } from 'lodash'
import Footer from './Footer/Footer'
import { colors } from '../util'

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

class Page extends React.Component {
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
    this.setState({ theme: s })
  }

  render() {
    const { children, ...props } = this.props
    const { theme } = this.state
    return (
      <ThemeProvider theme={theme}>
        <page {...props} onClick={this.changeTheme}>
          {children}
          <Footer />
        </page>
      </ThemeProvider>
    )
  }
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
}
Page.defaultProps = {
  id: 'page',
}
export default Page
