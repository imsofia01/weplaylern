import React from "react";
import Sidebar from "../components/Sidebar";


const Story = () => {
    return(
        <div className="flex">
        <Sidebar/>
        <div className="flex flex-col">Stories</div>
        </div>
    )
}

export default Story