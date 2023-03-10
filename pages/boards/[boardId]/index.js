import { useRouter } from "next/router";
import { useState } from "react";

export default function BoardsPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  const onClickCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <div>안녕하세요 게시판 상세 동적페이지 입니다.</div>
      <div>게시글 아이디: {router.query.boardId}</div>
      <button onClick={onClickCount}>더하기</button>
      <div>{count}</div>
    </>
  );
}

// export const getServerSideProps = () => {
//   //만약 서버사이드 렌더링을 하는 페이지라면?? => out 폴더로 생성 불가
//   //=> 이런 경우, next.config.js에서 exportPathMap으로 현재 페이지 제외 시키면 됨,.
// };
