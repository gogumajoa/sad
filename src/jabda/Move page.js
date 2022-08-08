import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
// import Detail from './detail.js'
import { useParams } from 'react-router-dom'

function Movepage() {
  return (
    /* <Route path="/url경로" element={ <보여줄html> } />*/
    <div className="Movepage">
      <Routes>
        <Route path="/detail/:id" element={ <Detail/>} />
      </Routes>
      {
        [1,2,3,4,5].map((a,i)=>{
          return(
            <Link to = {"/detail/"+i}> 
            <p>{i}번째 페이지</p>
            </Link>
          )
        })
      }
      <Link to = "/">홈</Link>
    </div>
  );
}

function Detail(){
  let {id} = useParams();

  return(
      <p> {id} 번째 페이지 </p>
  )
};

export default Movepage;