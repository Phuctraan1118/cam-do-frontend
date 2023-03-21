import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import menu1 from "../../asset/img/menu1.png";
import menu2 from "../../asset/img/menu2.png";
import menu3 from "../../asset/img/menu3.png";
import menu4 from "../../asset/img/menu4.png";
import menu5 from "../../asset/img/menu5.png";
import menu6 from "../../asset/img/menu6.png";
import menu7 from "../../asset/img/menu7.png";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
const NavMenu = () => {
  const [show1, setShow1] = useState(
    JSON.parse(localStorage.getItem("show1")) || false
  );
  const [show2, setShow2] = useState(
    JSON.parse(localStorage.getItem("show2")) || false
  );
  const [show3, setShow3] = useState(
    JSON.parse(localStorage.getItem("show3")) || false
  );

  const clickShow = () => {
    setShow1(!show1);
  };
  const clickShow1 = () => {
    setShow2(!show2);
  };
  const clickShow2 = () => {
    setShow3(!show3);
  };

  useEffect(() => {
    localStorage.setItem("show1", JSON.stringify(show1));
    localStorage.setItem("show2", JSON.stringify(show2));
    localStorage.setItem("show3", JSON.stringify(show3));
  }, [show1, show2, show3]);
  const clickHide = () => {
    localStorage.setItem("show1", JSON.stringify(false));
    localStorage.setItem("show2", JSON.stringify(false));
    localStorage.setItem("show3", JSON.stringify(false));
    setShow1(false);
    setShow2(false);
    setShow3(false);
  };

  return (
    <div className="menu-conten">
      <ul className="menu-text">
        <li onClick={clickHide}>
          <NavLink to="/" className="text-menu home">
            {" "}
            <img src={menu1} className="iconMenu" />
            <span>Trang chủ</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/detaipawn" className="text-menu">
            {" "}
            <img src={menu2} className="iconMenu" />
            <span>Cầm đồ</span>
            <MdKeyboardArrowRight className="arrow" />
          </NavLink>
        </li>
        <li>
          <a className="text-menu" onClick={clickShow}>
            {" "}
            <img src={menu3} className="iconMenu" />
            <span>Quản lý cửa hàng</span>
            {show1 === true ? (
              <MdKeyboardArrowDown className="arrow" />
            ) : (
              <MdKeyboardArrowRight className="arrow" />
            )}
          </a>

          {show1 && show1 ? (
            <ul className={`submenu ${show1}`}>
              <li className="subtext">
                <NavLink to="/home"> Chuỗi cửa hàng</NavLink>
              </li>
              <li className="subtext">
                <NavLink to="/ccc" className="subtext">
                  Chi tiết cửa hàng
                </NavLink>
              </li>
              <li className="subtext">
                <NavLink to="/a" className="subtext">
                  Danh sách cửa hàng
                </NavLink>
              </li>
              <li className="subtext">
                <NavLink to="/c" className="subtext">
                  Cấu hình hàng hóa
                </NavLink>
              </li>
              <li className="subtext">
                <NavLink to="/e" className="subtext">
                  Tiền quỹ đầu ngày
                </NavLink>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </li>

        <li>
          <a className="text-menu">
            {" "}
            <img src={menu4} className="iconMenu" />
            <span>Quản lý kho</span>
            <MdKeyboardArrowRight className="arrow" />
          </a>
        </li>
        <li>
          <a className="text-menu" onClick={clickShow1}>
            <img src={menu5} className="iconMenu" />
            <span>Quản lý nhân viên</span>
            {show2 === true ? (
              <MdKeyboardArrowDown className="arrow" />
            ) : (
              <MdKeyboardArrowRight className="arrow" />
            )}
          </a>
          {show2 && (
            <ul className={`submenu ${show1}`}>
              <li className="subtext">
                <NavLink to="/home"> Danh sách nhân viên</NavLink>
              </li>
              <li className="subtext">
                <NavLink to="/ccc" className="subtext">
                  Phân quyền nhân viên
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink to="/customer-manager" className="text-menu">
            <img src={menu6} className="iconMenu" />
            <span>Quản lý khách hàng</span>
          </NavLink>
        </li>
        <li>
          <a className="text-menu" onClick={clickShow2}>
            <img src={menu7} className="iconMenu" />

            <span>Báo cáo</span>
            {show3 === true ? (
              <MdKeyboardArrowDown className="arrow" />
            ) : (
              <MdKeyboardArrowRight className="arrow" />
            )}
          </a>
          {show3 && (
            <ul className={`submenu ${show3}`}>
              <li className="subtext">
                <NavLink to="/total-report"> Tổng giao dịch</NavLink>
              </li>
              <li className="subtext">
                <NavLink to="/report-years" className="subtext">
                  Báo cáo năm
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
