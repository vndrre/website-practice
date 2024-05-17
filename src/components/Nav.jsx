import { useState } from "react"
import OutlineBtn from "./buttons/OutlineBtn";

export default function Nav(){   
    let Links =[
        {name:"Home",link:"/"},
        {name:"Product",link:"#product"},
        {name:"About",link:"#about"},
        {name:"Contact",link:"#"},
      ];
    
    let [open,setOpen]=useState(false);

    const [color, setColor] = useState(false)
    
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    
    window.addEventListener('scroll', changeColor)


    return (
        <nav className={color ? 'text-white bg-[#0e0e0e] bg-opacity-90 backdrop-blur-md w-full fixed top-0 left-0 font-main header-bg': 'text-white w-full fixed top-0 left-0 font-main header-bg'}>
            <div className="flex md:justify-center items-center md:px-28 md:py-5 px-5 py-4">
                <div className="flex items-center lg:gap-64 md:gap-10">
                    <div className="font-bold text-2xl cursor-pointer flex justify-between items-center md:scale-110"> 
                        <a href="/"><h1 className="font-bold text-[24px] text-[#02E4C0]">Logo</h1></a>
                    </div>
                    
                    <div className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden" onClick={()=>setOpen(!open)}>
                        <ion-icon name={open ? 'close':'menu'}></ion-icon>
                    </div>

                    <ul className={color ? `md:flex text-[18px] md:gap-14 bg-[#0e0e0e] bg-opacity-90 backdrop-blur-md md:items-center md:pb-0 pb-5 pt-5 md:pt-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
                    transition-all duration-500 ease-in md:text-center ${open ? 'top-10':'top-[-490px]'}` : `md:flex text-[18px] md:gap-14  md:items-center md:pb-0 pb-5 pt-5 md:pt-0 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
                    transition-all duration-500 ease-in md:text-center ${open ? 'top-10':'top-[-490px]'}`}>
                        {
                            Links.map((link)=>(
                                <li key={link.name} className="md:opacity-85 md:hover:opacity-100 duration-500 md:my-0 my-7">
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))
                        }
                        <div className="md:hidden flex">
                            <OutlineBtn>Log In</OutlineBtn>
                        </div>
                    </ul>

                    <div className="hidden lg:flex">
                        <OutlineBtn>Log In</OutlineBtn>
                    </div>
                </div>
            </div>
        </nav>
    )
}