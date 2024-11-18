import React, {useState, useEffect} from "react";
import Sidebar from "../components/Sidebar";





const UserProfile = () => {
    const [userName, setUserName] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    
    

    useEffect(() => {
        // Retrieve user name from localStorage
        const storedUserName = localStorage.getItem('userName');
        if (storedUserName) {
            setUserName(storedUserName);
        } else {
            setUserName('Guest');
        }
        // Get the current date and day
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString(undefined, options);
        setCurrentDate(formattedDate);


        
    }, []);
    return(
        <>
        <div className="flex">
        <Sidebar />
        
        <div className="m-2">
        <div className="mb-4 ml-5 mt-3">
        <h2 className="flex m-2 text-3xl font-semibold animate__fadeOutRight" >Dashboard</h2>
        <p className="justify-center m-2 text-sm text-[#333333]">{currentDate}</p>
        </div>
        <div className="ml-5 absolute bg-neutral-300 h-44 w-[650px] rounded-2xl justify-center"> 
        <h1 className="text-[#293352] font-bold text-[2rem] m-5 justify-center">Hello, {userName}!</h1>
        <p className="justify-center text-sm text-[#333333] m-5">We’ve missed you! Check out what’s new 
            <br/> and improved in your dashboard</p>
            <div className="flex flex-col ml-[350px] -mt-44">
            <img className="flex-wrap flex h-52 ml-20" src="assets/ship.png"></img>
            </div>
        </div>
    </div>
    </div>
    </>
    )
}

export default UserProfile;