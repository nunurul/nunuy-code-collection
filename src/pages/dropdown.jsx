import { useState } from "react";
import "../style/dropdown.css";
import { useRef } from "react";
import { useEffect } from "react";

const Dropdown = () => {
  const [selectedDropdown, setSelectedDropdown] = useState("Opsi 1");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    {
      id: 1,
      label: "Opsi 1",
    },
    {
      id: 2,
      label: "Opsi 2",
    },
    {
      id: 3,
      label: "Opsi 3",
    },
    {
      id: 4,
      label: "Opsi 4",
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectedOption = (label) => {
    setSelectedDropdown(label);
    setIsOpen(false);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="App">
      <h1>Dropdown React</h1>
      <div className="dropdown" ref={dropdownRef}>
        <div className="selected-option" onClick={toggleDropdown}>
          {selectedDropdown}
        </div>
        {isOpen && (
          <div className="dropdown-content">
            {options.map((opsi) => (
              <div
                // className=""
                key={opsi.id}
                className={selectedDropdown === opsi.label ? "active" : ""}
                onClick={() => selectedOption(opsi.label)}
              >
                {opsi.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
