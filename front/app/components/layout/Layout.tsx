import { FC } from 'react'

import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <div className={styles.center}>{children}</div>
      <div>right</div>
    </div>
  )
}

export default Layout
