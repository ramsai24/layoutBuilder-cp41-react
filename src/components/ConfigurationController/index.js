// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      return (
        <div className="layout-controller-container">
          <h1>Layout</h1>
          <div className="input-label-El-containers">
            <div className="input-label">
              {showContent ? (
                <input
                  type="checkbox"
                  id="contentCheckbox"
                  onClick={onToggleShowContent}
                  defaultChecked
                />
              ) : (
                <input
                  type="checkbox"
                  id="contentCheckbox"
                  onClick={onToggleShowContent}
                />
              )}
              <label htmlFor="contentCheckbox">Content</label>
            </div>
            <div className="input-label">
              {showLeftNavbar ? (
                <input
                  type="checkbox"
                  id="leftNavbarCheckbox"
                  onClick={onToggleShowLeftNavbar}
                  defaultChecked
                />
              ) : (
                <input
                  type="checkbox"
                  id="leftNavbarCheckbox"
                  onClick={onToggleShowLeftNavbar}
                />
              )}
              <label htmlFor="leftNavbarCheckbox">Left Navbar</label>
            </div>
            <div className="input-label">
              {showRightNavbar ? (
                <input
                  type="checkbox"
                  id="rightNavbarCheckbox"
                  onClick={onToggleShowRightNavbar}
                  defaultChecked
                />
              ) : (
                <input
                  type="checkbox"
                  id="rightNavbarCheckbox"
                  onClick={onToggleShowRightNavbar}
                />
              )}
              <label htmlFor="rightNavbarCheckbox">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
