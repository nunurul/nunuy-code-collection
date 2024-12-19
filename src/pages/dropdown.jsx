import "../style/dropdown.css";
import vue from "../assets/dropdown/vue.js.png";
import react from "../assets/dropdown/react.js.png";
import angular from "../assets/dropdown/angular.js.png";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
const Dropdown = () => {
  const [isLanguage, setIsLanguage] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const language = [
    { id: 1, img: vue, name: "Vue.js", className: "vue" },
    { id: 1, img: react, name: "React.js", className: "react" },
    { id: 1, img: angular, name: "Angular.js", className: "angular" },
  ];

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const settingLanguage = (language) => {
    setIsLanguage(language);
    setOpenDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <div className={`dropdown ${isLanguage ? isLanguage.className : ""}`}>
      <div className="box-img">
        {isLanguage ? (
          <img src={isLanguage.img} alt={isLanguage.name} />
        ) : (
          <p className="text">NO PHOTOS</p>
        )}
      </div>
      <div className="content" ref={dropdownRef}>
        <div className="bar" onClick={toggleDropdown}>
          <p className="text">
            {isLanguage ? isLanguage.name : "Pilih Bahasa"}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
          </svg>
        </div>
        <div className={`container ${openDropdown ? "active" : ""}`}>
          {language.map((bahasa) => (
            <div
              className="item"
              key={bahasa.id}
              onClick={() => settingLanguage(bahasa)}
            >
              <img src={bahasa.img} alt={bahasa.name} />
              <p className="teks">{bahasa.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
