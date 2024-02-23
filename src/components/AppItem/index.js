// Write your code here
import './index.css'

const AppItem = props => {
  const {AppDetails} = props
  const {appName, imageUrl} = AppDetails

  return (
    <li className="app-item">
      <img src={imageUrl} alt="img" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
