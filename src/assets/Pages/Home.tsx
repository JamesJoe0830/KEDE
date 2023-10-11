import MainPhoto from "./Main/MainPhoto";
import * as S from "./Home.style";
import SideContents from "./SideContents/SideContents";
function Home() {
  return (
    <div>
      <S.HomeWrapper>
        <MainPhoto />
        <SideContents />
      </S.HomeWrapper>
    </div>
  );
}

export default Home;
