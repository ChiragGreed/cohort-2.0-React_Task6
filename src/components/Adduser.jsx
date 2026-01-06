const Adduser = (props) => {
    return (
        <div key={props.idx} className="bg-[#cecece] relative flex gap-4 mb-4 items-center px-4 py-2 pr-40 rounded-4xl">
            <div className="h-20 w-20 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${props.elem.Url})` }} />
            <div>
                <div className="mb-2">
                    <h1 className="text-3xl font-bold">{props.elem.Name}</h1>
                    <h3 className="text-xl font-bold">{props.elem.Role}</h3>
                </div>
                <p className="text-sm text-[#1c1c1c]">{props.elem.Description}.</p>
            </div>
            <button onClick={() => {
                props.deletion(props.idx)
            }
            }
                className="absolute top-10 right-10">
                <i className="ri-close-fill text-3xl bg-[#bcbbbb] text-[#4a4a4a] p-3 rounded-full"></i>
            </button>
        </div>
    )
}

export default Adduser
