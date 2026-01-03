import { useState } from "react";

const App = () => {

  const [users, Setusers] = useState([]);

  function SubmitHandler(e) {
    e.preventDefault();
    Setusers([...users, Name, Role, Description, url]);
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
      {users.map((elem, idx) => {
        return <h1 key={idx} className="text-2xl text-white">{elem}</h1>
      })}
    </div>
  }

  return (
    <div className="grid grid-cols-[1fr_2fr]">
      <div className="mr-10">
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
          className="flex flex-col gap-5 items-start ">
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

          <button className="text-white font-bold bg-green-600 text-2xl px-10 py-2 rounded-2xl">Create User</button>
        </form>
      </div>

      {/* <Adduser /> */}
      <div>
        <div className="bg-[#cecece] flex gap-4 items-top px-4 py-2 pr-40 rounded-4xl">
          <div className="h-20 w-20 rounded-full bg-cover bg-center" style={{backgroundImage: "url('{url}')"}}/>
          <div>
            <div className="mb-2">
              <h1 className="text-3xl font-bold">user[0]</h1>
              <h3 className="text-xl font-bold">users[1]</h3>
            </div>
            <p className="text-sm text-[#1c1c1c]">users[3].</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
