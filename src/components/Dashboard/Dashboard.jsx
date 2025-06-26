import './Dashboard.css'
import Arrow_icon from '../../assets/Arrow icon.png'
const Dashboard = () => {
  return (
    <div className='maincontent'>
      <div className="content-section">
        <div className="above-part">
          <p>Project Overview</p>
        </div>
        <div className="bottom-part">
          <div className="box">
          <h1>Total Project</h1>
          <img src={Arrow_icon} alt="" height="5px" />
        </div>
        <div className="box">
          <h1>Ongoing</h1>
          <img src={Arrow_icon} alt="" height="5px"/>
        </div>
        <div className="box">
          <h1>completed task</h1>
          <img src={Arrow_icon} alt="" height="5px"/>
        </div>
        <div className="box">
          <h1>Due Task</h1>
          <img src={Arrow_icon} alt="" height="5px"/>
        </div>
        <div className="add-icon">
          <p>Add</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
