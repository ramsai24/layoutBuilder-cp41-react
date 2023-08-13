// Write your code here
// import ConfigurationContext from '../../context/ConfigurationContext'
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'
import './index.css'

const Layout = () => (
  //   <ConfigurationContext.Consumer>
  //     {vlaue => {
  //       const {showContent, showLeftNavbar, showRightNavbar} = value
  //       return (
  <div className="layout-container">
    <Header />
    <Body />
    <Footer />
  </div>
  //       )
  //     }}
  //   </ConfigurationContext.Consumer>
)

export default Layout
