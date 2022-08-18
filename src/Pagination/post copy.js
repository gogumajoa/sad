import { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from './pagination.js'

function Posts() {
  const [posts, setPosts] = useState([]);
  /*페이지 당 게시물 수 limit*/
  const [limit, setLimit] = useState(10);
  /*현재 페이지 번호 page*/
  const [page, setPage] = useState(1);
  /*첫 게시물의 위치 계산 offest*/
  /*페이지 번호에서 1을 뺀 후, 페이지당 게시물수 곱하기 */
  const offset = (page - 1) * limit;

  /*useEffect를 이용하여 API 비동기로 요청 */
  useEffect(() => {
    fetch("http://43.200.205.215:8080/webtoons?genre=무협")
      .then((res) => res.json()) 
      .then((data) => setPosts(data.webtoonInfoList));
  }, []);

  //console.log(typeof(posts));

  return (
    <Layout>
      <header>
        <h1>웹툰 목록</h1>
      </header>

      <main>
        {/*offset(첫 게시물의 위치)부터 offset + 페이지당 게시물수 까지*/}
        {posts.slice(offset, offset + limit).map(({ id, name, author, image }) => (
          <article key={id}>
            <><img src={image}/></>
            <h3>{name}</h3>
            <p>{author}</p>
          </article>
        ))}
      </main>

      <footer>
        <Pagination
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

export default Posts;