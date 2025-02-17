import { useState } from "react";
import { format } from "date-fns";
import "./header.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';

const Header = () => {
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    rooms: 1
  })
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ]);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div className="header">
      <div className="headerContainer">
      <div className="headerList">
        <div className="headerListItem active">
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faPlane} />
        <span>Flights</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faCar} />
        <span>Car rentals</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faBed} />
        <span>Attractions</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faTaxi} />
        <span>Airport taxis</span>
        </div>
      </div>
      <h1 className="headerTitle">Your next holiday awaits</h1>
      <p className="headerDesc">Get the lowest prices on hotels, 
        apartments and more...</p>
      <button className="headerBtn">Sign in / Register</button>
      <div className="headerSearch">
        <div className="headerSearchItem">
        <FontAwesomeIcon icon={faBed}  className="headerIcon"/>
        <input type="text" placeholder="Where are you going?" className="headerSearchInput"/>
        </div>
        <div className="headerSearchItem">
        <FontAwesomeIcon icon={faCalendarDays}  className="headerIcon"/>
        <span onClick={() =>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
        {openDate && <DateRange editableDateInputs={true}
        onChange={item => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date} className="date"
        />}
        </div>
        <div className="headerSearchItem">
        <FontAwesomeIcon icon={faPerson}  className="headerIcon"/>
        <span className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.rooms} room`}</span>
        </div>
        <div className="headerSearchItem">
        <button className="headerBtn">Search</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header