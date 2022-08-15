import React, { useState } from 'react';
import WebtInfo from './webt-info.js';
import './genre.css';
    
function Searchcopy() {

    let [search, setSearch] = useState(null)
    let [btClick, setbtClick] = useState(0)
    
        const items = WebtInfo.filter((data)=>{
            if(btClick == 1){
                if(search == null)
                    return data
                else if(data.title.toLowerCase().includes(search.toLowerCase()) || data.name.toLowerCase().includes(search.toLowerCase())){
                    return data
            }
            }
            else if(btClick == 0)
                return data
        }).map(data=>{
            return(
                <div id="box">
                    <div className="col-xs-1 col-lg-1 col-md-1">
                        <div className="img-wp">
                            <img type="button" id="Cardimg" src={data.picture}/>
                        </div>
                    <h5 type="button" id="title">{data.title}</h5>
                    <p type="button" id="name">{data.name}</p>
                    </div>
                </div>
            )
        })

        return (
            <div className="Genre">
                <input id="input" placeholder="검색어를 입력하세요"
                onChange={(e)=>{setSearch(e.target.value)}}/>
                <button id="button"
                onClick={()=>{setbtClick(1)}}>검색</button>
                {items}
            </div>
        )
}
export default Searchcopy;