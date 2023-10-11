import * as S from "./Input.style";
interface PropsType {
  dark: boolean;
}
function Input({ dark }: PropsType) {
  return (
    <div>
      <S.TargetBox>
        <S.TargetTo dark={dark}>TO :</S.TargetTo>
        <S.TargetName placeholder="대상을 입력해주세요" dark={dark} />
      </S.TargetBox>
    </div>
  );
}

export default Input;
