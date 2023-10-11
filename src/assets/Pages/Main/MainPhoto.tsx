import { useState } from "react";
import * as S from "./MainPhoto.style";
import Input from "./components/Input";
import TextBox from "./components/TextBox";
interface Image {
  id: number;
  image: string;
  alt: string;
}
const images: Image[] = [
  { id: 1, image: "/images/night.jpg", alt: "1" },
  { id: 2, image: "/images/morning.jpg", alt: "2" },
];
// const images1: Image[] = [
//   { id: 3, image: "/images/dolomites.jpg", alt: "3" },
//   { id: 4, image: "/images/desert.jpg", alt: "4" },
// ];

function MainPhoto() {
  const [next, setNext] = useState<number>(0);
  const [dark, setDark] = useState<boolean>(false);
  const [change, setChange] = useState<boolean>(false);
  const handleNext = () => {
    setChange(true);
    const nextIndex = (next + 1) % images.length;
    setNext(nextIndex);
    setTimeout(() => {
      setChange(false);
    }, 500);
    setDark((prev) => !prev);
  };
  console.log("dark", dark);
  return (
    <div>
      <S.MainWrapper>
        <S.FullImagesWrapper>
          <S.Title>The King Has Donkey's Ears</S.Title>
          <S.DarkModeBtn onClick={handleNext} dark={dark}>
            {dark ? "dark" : "light"}
          </S.DarkModeBtn>
          <S.FullImages
            src={images[next].image}
            alt={`Image ${next + 1}`}
            change={change}
          />
          <S.MiddleBox>
            <S.MiddleImage
              src={images[next].image}
              alt={`Image ${next + 1}`}
              change={change}
            />
          </S.MiddleBox>
          <S.EndImageBox>
            <S.EndImage
              src={images[next].image}
              alt={`Image ${next + 1}`}
              change={change}
            />
            <S.TotalInputWrapper>
              <Input dark={dark} />
              <TextBox />
            </S.TotalInputWrapper>
          </S.EndImageBox>
        </S.FullImagesWrapper>
      </S.MainWrapper>
    </div>
  );
}

export default MainPhoto;
