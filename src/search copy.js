import React, { useState } from 'react';
import WebtInfo from './webt-info.js';
import './genre.css';
    
function Searchcopy(){
    
    let[search, setSearch] = useState(null)

    const searchSpace = ((event)=>{
        let keyword = event.target.value;
        //키워드 event.target.value 넣으라고 코드를 짰습니다.
        setSearch({keyword}) //state 변경 함수
    })

        //객체 배열 구문 분석 ; 새 배열 반환하고 map함수로 뷰포트에 표시
        const items = WebtInfo.filter((data)=>{
            if(search == null)
                return data
            else if(data.title.toLowerCase().includes(search.toLowerCase()) || data.name.toLowerCase().includes(search.toLowerCase())){
                return data
            }
        }).map(data=>{
            return(
                <div id="box">
                    <div className="col-xs-1 col-lg-1 col-md-1">
                        <div className="img-wp">
                        <img id="Cardimg" src={data.picture} />
                        </div>
                        <h5 id="title">{data.title}</h5>
                        <p id="name">{data.name}</p>
                    </div>
                </div>
            )
        })

        return (
            <div> {/* 검색 입력 받기 */}
                <input id="input" placeholder="검색어를 입력하세요" 
                onChange={(e)=>this.searchSpace(e)}/>
                {items}
            </div>
        )
    }

export default Searchcopy;