import { connect } from 'react-redux'
import Menu from 'cape-mixer/lib/Menu'
import { menuActions, menuSelector } from '../../select/tempmenu'

export default connect(menuSelector, menuActions)(Menu)
