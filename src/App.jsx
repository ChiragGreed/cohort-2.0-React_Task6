import { useState } from "react";
import Adduser from "./components/Adduser";


const App = () => {

  const [users, Setusers] = useState([]);

  const [Name, SetName] = useState("");
  const [Role, SetRole] = useState("");
  const [Description, SetDescription] = useState("");
  const [Url, Seturl] = useState("");
  
  function SubmitHandler(e) {
    e.preventDefault();
    Setusers([...users, { Name, Role, Description, Url, }]);
    SetName('');
    SetRole('');
    SetDescription('');
    Seturl('');
  }

  function deletion(idx) {
    const copyusers = [...users];
    copyusers.splice(idx, 1);
    Setusers(copyusers);
  }

  function changeName(elem) {
    SetName(elem);
  }
  function changeRole(elem) {
    SetRole(elem);
  }
  function changeDescription(elem) {
    SetDescription(elem);
  }
  function changeurl(elem) {
    Seturl(elem);
  }


  return (
    <div className="flex flex-col md:flex-row ">
      <div className="mb-10 flex-1 md:mr-10">
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
          className="flex flex-col gap-5 items-start">
          <input
            onChange={(elem) =>
              changeName(elem.target.value)
            }
            className="text-white bg-gray-800 py-5 px-3 w-full border-2 border-gray-200 text-xl rounded-3xl"
            type="text"
            required
            placeholder='Enter Name'
            value={Name}
          />

          <input
            onChange={(elem) =>
              changeRole(elem.target.value)
            }
            className="text-white bg-gray-800 py-5 px-3 w-full border-2 border-gray-200 text-xl rounded-3xl"
            type="text"
            required
            placeholder='Enter Role'
            value={Role}
          />

          <input
            onChange={(elem) =>
              changeDescription(elem.target.value)
            }
            className="text-white bg-gray-800 py-5 px-3 w-full border-2 border-gray-200 text-xl rounded-3xl"
            type="text"
            required
            placeholder='Enter Description'
            value={Description}
          />

          <input
            onChange={(elem) =>
              changeurl(elem.target.value)
            }
            className="text-white bg-gray-800 py-5 px-3 w-full border-2 border-gray-200 text-xl rounded-3xl"
            type="text"
            required
            placeholder='Enter image url'
            value={Url}
          />
          <button className="text-white font-bold bg-green-600 text-2xl px-10 py-2 rounded-2xl">Create User</button>
        </form>
      </div>

      <div className="bg-[#2F5755] flex-2 p-3 rounded-2xl">
        {users.map(function (elem, idx) {
          return <Adduser key={idx} elem={elem} idx={idx} deletion={deletion} />
        })}
      </div>

    </div>
  )
}

export default App
