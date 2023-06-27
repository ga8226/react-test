import './scss/kgr.scss'
const App = () => {
  const mytext = '내가 이집의 주인장이었는데 이젠 아니야'
  return <div className="App">
    {mytext}이랍니다
   </div>
}

const App2 = () => {
  const 오늘평가날 = 627
  return(
 <div className="App">
    <h1>리액트훈련</h1>
    {
      오늘평가날 == 627 &&
      <div>
        오늘은 평가날 입니다 { 1 + 1}
      </div>
    }
   </div>
  ) 
}

export {App , App2};
