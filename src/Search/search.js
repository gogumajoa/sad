import React, { Component } from 'react';
import Information from './sample-info.js';

class Search extends Component{

    constructor(){
        super();

        this.state={    //상태; 초기에 null로 설정된 search라는 변수 포함됨
            search:null
        };      
    }

    searchSpace=(event)=>{
        let keyword = event.target.value;
        //키워드 event.target.value 넣으라고 코드를 짰습니다.
        this.setState({search:keyword})
    }

    render(){
        const styleInfo = { //const는 재할당이 불가능한 변수 =상수
            paddingRight: '10px' //그냥 글자 간격 띄워주는거임
        }
        //2)검색 상자 추가 - 검색 상자 스타일
        const elementStyle ={
            border:'solid',
            borderRadius:'10px',
            position:'relative',
            left:'10vh',
            height:'3vh',
            width:'20vh',
            marginTop:'5vh',
            marginBottom:'10vh'
        }
        
        //객체 배열 구문 분석 ; 새 배열 반환하고 map함수로 뷰포트에 표시
        const items = Information.filter((data)=>{
            if(this.state.search == null)
                return data
            else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.country.toLowerCase().includes(this.state.search.toLowerCase())){
                return data
            }
        }).map(data=>{
            return(
                <div>
                    <ul>
                        <li style={{position:'relative',left:'10vh'}}>
                        <span style={styleInfo}>{data.name}</span>
                        <span style={styleInfo}>{data.age}</span>
                        <span style={styleInfo}>{data.country}</span>
                        </li>
                    </ul>
                </div>
            )
        })

        return (
            <div> {/*검색기능 */}
                <input  type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)}/>
                {items}
            </div>
        )
    }

}

export default Search;