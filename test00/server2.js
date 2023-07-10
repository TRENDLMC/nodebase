const http = require("http");
const fs = require("fs").promises;
//fs는 파일시스템 외부에서 파일을 가져오는 라이브러리
http
  .createServer(async (req, res) => {
    try {
      const data = await fs.readFile("./server2.html");
      //파일을 가져와서 data에 저장함 async와 await를 사용하여 파일이 올떄까지 함수대기
      res.writeHead(200, { "Content-Type": "text/html; charset=uft-8" });
      res.end(data);
      //respon에다가 파일을 한번에 집어넣어버림
    } catch (err) {
      console.error(err);
      res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
      res.end(err.message);
      //에러발생시 500코드를 전송하고 파일은 err의 메세지를 띄워줌
    }
  })
  .listen(8090, () => {
    console.log("8090번 포트에서 서버 대기 중입니다.!");
  });
