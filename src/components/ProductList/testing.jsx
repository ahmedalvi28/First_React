
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Forth_page() {
 
    const [state, setstate] = useState([])
 
    const card = async () => {
        try {
            let tues = await axios.get('https://nft.archiecoin.online/Get_Vender_Register')
            console.log(tues.data.data)
            setstate(tues.data.data)
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        card()
    }, [])
 
    return (
<div className="container">
<div className="row my-5 mt-3">

    Direct Code 
 
<div className='col-12 my-5'>
 
<input type="text" placeholder=' Sreach' className='w-50'/>
</div>
                {
                    state.map((item , index)=>{  
                        // const result = state.filter();   
                        return (
<>
<div className="col-4 mt-5">
<div class="card" >
<div class="card-header text-danger fs-3 ">
<b>  THIS IS GET API</b>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">{item.Shop_Name}</li>
<li class="list-group-item">{item.Retype_email}</li>
<li class="list-group-item">{item.Company}</li>
</ul>
</div>
</div>
</>
                        )
                    })
                }
</div>
</div>
    )
}
export default Forth_page