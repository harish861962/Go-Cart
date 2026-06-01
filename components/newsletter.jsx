import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Newsletter(){
    const [name, setName] = useState("");
return(
<>
<div className="newsletter-text">
    <h4>Join Newsletter</h4>
    <p>Subscribe to get exclusive deals, new arrivals, and insider updates delivered straight to your inbox every week</p>
</div>

<div className="newsletter-input">
    <input type="text" placeholder="Enter your e-mail address"  value={name} onChange={(e)=>setName(e.target.value)}/>
    <button onClick={()=>{toast.success(` E-mail sent sucess`)}}>GetUpdates</button>
</div>

</>
)
}