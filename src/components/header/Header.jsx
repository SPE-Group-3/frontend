// import { useState } from "react";
// import { format } from "date-fns";
// import "./header.css"
// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
// import { DateRange } from 'react-date-range';

// const Header = () => {
//   const [openOptions, setOpenOptions] = useState(false)
//   const [options, setOptions] = useState({
//     adult: 1,
//     children: 0,
//     rooms: 1
//   })
//   const [date, setDate] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: 'selection',
//     }
//   ]);
//   const [openDate, setOpenDate] = useState(false);
//   return (
//     <div className="header">
//       <div className="headerContainer">
//       <div className="headerList">
//         <div className="headerListItem active">
//         <FontAwesomeIcon icon={faBed} />
//         <span>Stays</span>
//         </div>
//         <div className="headerListItem">
//         <FontAwesomeIcon icon={faPlane} />
//         <span>Flights</span>
//         </div>
//         <div className="headerListItem">
//         <FontAwesomeIcon icon={faCar} />
//         <span>Car rentals</span>
//         </div>
//         <div className="headerListItem">
//         <FontAwesomeIcon icon={faBed} />
//         <span>Attractions</span>
//         </div>
//         <div className="headerListItem">
//         <FontAwesomeIcon icon={faTaxi} />
//         <span>Airport taxis</span>
//         </div>
//       </div>
//       <h1 className="headerTitle">Your next holiday awaits</h1>
//       <p className="headerDesc">Get the lowest prices on hotels, 
//         apartments and more...</p>
//       <button className="headerBtn">Sign in / Register</button>
//       <div className="headerSearch">
//         <div className="headerSearchItem">
//         <FontAwesomeIcon icon={faBed}  className="headerIcon"/>
//         <input type="text" placeholder="Where are you going?" className="headerSearchInput"/>
//         </div>
//         <div className="headerSearchItem">
//         <FontAwesomeIcon icon={faCalendarDays}  className="headerIcon"/>
//         <span onClick={() =>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
//         {openDate && <DateRange editableDateInputs={true}
//         onChange={item => setDate([item.selection])}
//         moveRangeOnFirstSelection={false}
//         ranges={date} className="date"
//         />}
//         </div>
//         <div className="headerSearchItem">
//         <FontAwesomeIcon icon={faPerson}  className="headerIcon"/>
//         <span className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.rooms} room`}</span>
//         <div className="options">
//           <div className="optionItem">
//             <span className="optionText">Adult</span>
//             <button className="optionCounterButton">-</button>
//             <span className="optionCounterNumber">1</span>
//             <button className="optionCounterButton">+</button>
//           </div>
//           <div className="optionItem">
//             <span className="optionText">Children</span>
//             <button className="optionCounterButton">-</button>
//             <span className="optionCounterNumber">0</span>
//             <button className="optionCounterButton">+</button>
//           </div>
//           <div className="optionItem">
//             <span className="optionText">Room</span>
//             <button className="optionCounterButton">-</button>
//             <span className="optionCounterNumber">1</span>
//             <button className="optionCounterButton">+</button>
//           </div>
//         </div>
//         </div>
//         <div className="headerSearchItem">
//         <button className="headerBtn">Search</button>
//         </div>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Header


import { faBed,  faCalendarDays,  faCar,  faPerson,  faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
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
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
            Your next holiday awaits.
            </h1>
            <p className="headerDesc">
            Get the lowest prices on hotels, 
            apartments and more...
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
