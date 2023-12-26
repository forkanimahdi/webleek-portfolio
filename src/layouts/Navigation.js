import logo from "../assets/images/webleek.png"
export const Navigation = () => {
    return (
        <>
            <div className="h-[10vh] z-10 fixed w-full flex items-center justify-around">

                <div className="logo select-none flex gap-2">
                    <img width={"150px"} src={logo} alt="Logo hna" />
                </div>

                <div className=" flex gap-3 ">
                    <a className="no-underline text-white" href="">About us</a>
                    <a className="no-underline text-white" href="">What we do </a>
                    <a className='no-underline text-white' href="">Our work</a>
                </div>
                <div className="">
                    <a className="no-underline text-black btn btn-side px-3 rounded-pill " href="">Contact us</a>
                </div>
            </div>
        </>
    )
}
