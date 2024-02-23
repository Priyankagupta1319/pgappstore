// Write your code here
import './index.css'

const TabItem = props => {
  const {TabDetails} = props
  const {displayText} = TabDetails

  return (
    <li className="tabitem-container">
      <button type="button">{displayText}</button>
    </li>
  )
}
export default TabItem
