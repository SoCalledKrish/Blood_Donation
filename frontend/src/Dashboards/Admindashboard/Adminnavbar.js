import { NavLink } from "react-router-dom";
import "./Adminnavbar.css";
// import Adminhome from './Dashboards/Admindashboard/Adminhome';
// import BloodRequest from './Dashboards/Admindashboard/BloodRequest';
// import BloodStock from './Dashboards/Admindashboard/BloodStock';
// import Donation from './Dashboards/Admindashboard/Donation';
// import Donor from './Dashboards/Admindashboard/Donor';
// import Patient from './Dashboards/Admindashboard/Patient';
// import RequestHistory from './Dashboards/Admindashboard/RequestHistory';
const Adminnavbar = () => (
  <nav className="sidebar">
    <ul>
      <li>
        <NavLink to="/admindashboard/home" className={({ isActive }) => (isActive ? 'active' : '')} end>
          AdminHome
        </NavLink>
      </li>
      <li>
        <NavLink to="/admindashboard/bloodrequest" className={({ isActive }) => (isActive ? 'active' : '')}>
          BloodRequest
        </NavLink>
      </li>
      <li>
        <NavLink to="/admindashboard/bloodstock" className={({ isActive }) => (isActive ? 'active' : '')}>
          BloodStock
        </NavLink>
      </li>
      <li>
        <NavLink to="/admindashboard/donation" className={({ isActive }) => (isActive ? 'active' : '')}>
          Donation
        </NavLink>
      </li>
      <li>
        <NavLink to="/admindashboard/donor" className={({ isActive }) => (isActive ? 'active' : '')}>
          Donor
        </NavLink>
      </li>
      <li>
        <NavLink to="/admindashboard/patient" className={({ isActive }) => (isActive ? 'active' : '')}>
          Patient
        </NavLink>
      </li>
      <li>
        <NavLink to="/admindashboard/requesthistory" className={({ isActive }) => (isActive ? 'active' : '')}>
          RequestHistory
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Adminnavbar;
