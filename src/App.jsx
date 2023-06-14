import { useState } from "react";
import { CustomAlert } from "./customAlert";

function App() {
  const [td, setTd] = useState("");
  const [tdList, setTdList] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    const inputValue = document.getElementById("newItem").value;
    if (inputValue === "") {
      setAlertMessage("Você precisa digitar uma tarefa.");
      setShowAlert(true);
      return;
    }
    if (inputValue.length < 3) {
      setAlertMessage("Escreva mais sobre sua tarefa.");
      setShowAlert(true);
      return;
    }

    setTdList([...tdList, { todoName: inputValue }]);
    setTd("");
    
  };

  const hideAlert = () => {
    setShowAlert(false);
    setAlertMessage("");
  };

  const delTd = (deleteValue) => {
    const restTdList = tdList.filter((val) => {
      return val.todoName !== deleteValue;
    });
    setTdList(restTdList);
  };

  return (
    <>
      <div className="bg-gray-200 w-full h-screen flex items-center">
      {showAlert && <CustomAlert message={alertMessage} onClose={hideAlert} />}
        <div className="w-[560px] mx-auto bg-white p-5 rounded-xl">
          <h1 className="text-6xl text-center font-bold mb-8">To-do-List</h1>
          <form onSubmit={handleForm}>
            <input
              id="newItem"
              type="text"
              value={td}
              onChange={(e) => setTd(e.target.value)}
              placeholder="Add Todo"
              className="h-12 p-1 text-2xl placeholder:text-gray-500 border-4 border-solid rounded-xl border-cyan-700"
            />
            <button
              type="submit"
              className="bg-green-700 ml-3 py-3 px-9 rounded-xl text-white"
            >
              Add TD
            </button>
          </form>
          <div className="td-show-area">
            <ul>
              {tdList.map((singleTodo, index) => {
                return (
                  <li
                    key={index}
                    className="bg-slate-700 rounded-xl flex justify-between text-white text-2xl p-5 mt-5"
                  >
                    {singleTodo.todoName}
                    {""}
                    <span
                      onClick={() => delTd(singleTodo.todoName)}
                      className="text-red-500 cursor-pointer"
                    >
                      x
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default App;
