import css from './Slidebar.module.css';
import { MdSpaceDashboard } from 'react-icons/md';
import { AiFillCalendar, AiOutlineTable } from 'react-icons/ai';
import { FaTasks } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className={css.container}>
            <img src="./logo.png" alt="logo" className={css.logo} />
            <div className={css.menu}>
                <NavLink to="dashboard" className={css.ite}
            </div>
        </div>
    );
};

export default Sidebar;