// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-right-navbar">
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )}

          <div className="content">
            {showContent && (
              <div>
                <h1>Content</h1>
                <p>
                  Lorem ipsum dollor sit amet, cosectetur adipisicing elit, sed
                  do eiusmod tempor inididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            )}
          </div>

          {showRightNavbar && (
            <div className="left-right-navbar">
              <h1>Right Navbar Menu</h1>
              <div className="add-containers">
                <p>Ad 1</p>
              </div>
              <div className="add-containers">
                <p>Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
