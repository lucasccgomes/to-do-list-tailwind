import React, { useEffect, useState } from "react";
import { FiAlertOctagon } from "react-icons/fi";

export const CustomAlert = ({ message, onClose }) => {
  const [showAlert, setShowAlert] = useState();

  useEffect(() => {
    if (message) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <>
      {showAlert && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 w-72 p-4 bg-gray-800 text-white rounded-xl shadow-lg z-50 animate-fade-in">
          <p className="flex items-center">
            <FiAlertOctagon /> 
            <p className="ml-1"> {message} </p>
          </p>
        </div>
      )}
    </>
  );
};
