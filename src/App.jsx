import { useState } from "react";

const App = () => {

  const [users, Setusers] = useState([]);

  function SubmitHandler(e) {
    e.preventDefault();
    console.log(Adduser());
    Setusers([...users, { Name, Role, Description, Url }]);
    SetName('');
    SetRole('');
    SetDescription('');
    Seturl('');
    console.log("Submited");
  }

  const [Name, SetName] = useState("");
  const [Role, SetRole] = useState("");
  const [Description, SetDescription] = useState("");
  const [Url, Seturl] = useState("");

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
    let newusers = users.map((elem) => {
      return <div className="bg-[#cecece] flex gap-4 mb-4 items-top px-4 py-2 pr-40 rounded-4xl">
        <div className="h-20 w-20 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${elem.Url})` }} />
        <div>
          <div className="mb-2">
            <h1 className="text-3xl font-bold">{elem.Name}</h1>
            <h3 className="text-xl font-bold">{elem.Role}</h3>
          </div>
          <p className="text-sm text-[#1c1c1c]">{elem.Description}.</p>
        </div>
      </div>
    })
    return newusers;
  }



  return (
    <div className="flex">
      <div className="mr-10 flex-1">
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
            value={Url}
          />

          <button className="text-white font-bold bg-green-600 text-2xl px-10 py-2 rounded-2xl">Create User</button>
        </form>
      </div>
      <div className="bg-[#2F5755] flex-2 p-3 rounded-2xl">
        <Adduser />
      </div>

    </div>
  )
}

export default App
