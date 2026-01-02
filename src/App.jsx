import { useState } from "react";

const App = () => {
  
  const [users, Setusers] = useState([]);
  
  function SubmitHandler(e) {
    e.preventDefault();
    Setusers(...users,[Name, Role, Description, url]);
    console.log(users);
    SetName('');
    SetRole('');
    SetDescription('');
    Seturl('');
    console.log("Submited");
  }

  const [Name, SetName] = useState("");
  const [Role, SetRole] = useState("");
  const [Description, SetDescription] = useState("");
  const [url, Seturl] = useState("");

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


  function Adduser() {
    return <div>
      <h1 className="text-2xl text-white">{users[0]}</h1>
      <h1 className="text-2xl text-white">{users[1]}</h1>
      <h1 className="text-2xl text-white">{users[2]}</h1>
      <h1 className="text-2xl text-white">{users[3]}</h1>
    </div>
  }

  return (
    <div>
      <form onSubmit={(e) => {
        SubmitHandler(e);
      }}
        className="flex flex-col gap-5 w-[30%] items-center">
        <input
          onChange={(elem) =>
            changeName(elem.target.value)
          }
          className="text-white bg-gray-800 py-5 px-3 w-full border-2 border-gray-200 text-xl rounded-3xl"
          type="text"
          placeholder='Enter Name'
          value={Name}
        />

        <input
          onChange={(elem) =>
            changeRole(elem.target.value)
          }
          className="text-white bg-gray-800 py-5 px-3 w-full border-2 border-gray-200 text-xl rounded-3xl"
          type="text"
          placeholder='Enter Role'
          value={Role}
        />

        <input
          onChange={(elem) =>
            changeDescription(elem.target.value)
          }
          className="text-white bg-gray-800 py-5 px-3 w-full border-2 border-gray-200 text-xl rounded-3xl"
          type="text"
          placeholder='Enter Description'
          value={Description}
        />

        <input
          onChange={(elem) =>
            changeurl(elem.target.value)
          }
          className="text-white bg-gray-800 py-5 px-3 w-full border-2 border-gray-200 text-xl rounded-3xl"
          type="text"
          placeholder='Enter image url'
          value={url}
        />

        <button className="text-white font-bold bg-green-600 text-2xl w-60 h-20 rounded-2xl">Create User</button>
      </form>

          <Adduser/>


    </div>
  )
}

export default App
