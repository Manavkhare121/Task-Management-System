import search_icon from '../../assets/search icon.png'
import Gmail_icon from '../../assets/Gmail icon.png'
import Message_icon from '../../assets/Message icon.png'
import Whatsapp_icon from '../../assets/Whatsapp icon.png'
import Phone_icon from '../../assets/Phone icon.png'
import './Help.css'
const Help = () => {
  return (
    <>
      <div className="content">
        <div className="firstsection">
          <div className="partfirst">
            <h1>How Can I Help You ?</h1>
          <div className="Section-input">
            <img src={search_icon} alt="" height="20px" />
            <input type="text" placeholder="Search" />
          </div>
          </div>
        </div>
      </div>
      <div className="partl">
        <div className="section1-dibbe">
            <div className="Dibbe">
            <img src={Gmail_icon} alt="" height='80px'/>
            <p>Email</p>
            <p>UpTrack121@gmail.com</p>
        </div>
        <div className="Dibbe">
             <img src={Message_icon} alt="" height="60px"/>
            <p>Message</p>
            <p>What is the average salary..?</p>
        </div>
        </div>
        <div className="section2-dibbe">
            <div className="Dibbe">
             <img src={Phone_icon} alt="" height="60px"/>
            <p>Phone</p>
            <p>510-03402032</p>
        </div>
        <div className="Dibbe ">
             <img src={Whatsapp_icon} alt="" height="60px" />
            <p>Whatsapp</p>
            <p>Groups,Empolyee Details...</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Help;
