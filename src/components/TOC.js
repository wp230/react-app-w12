// React의 Component 클래스를 가져옵니다.
import { Component } from "react";

// 'TOC' (Table of Contents)라는 이름의 클래스 기반 컴포넌트를 정의합니다.
class TOC extends Component {
  // render 메서드는 컴포넌트가 화면에 렌더링 될 내용을 반환합니다.
  render() {
    // 리스트 아이템들을 담을 빈 배열을 생성합니다.
    var lists = [];
    // 부모 컴포넌트로부터 전달받은 data props를 로컬 변수에 할당합니다.
    var data = this.props.data;
    // while 루프를 사용하여 data 배열의 각 항목에 대해 리스트 아이템을 생성합니다.
    var i = 0;
    while (i < data.length) {
      // lists 배열에 <li> 요소를 push합니다.
      lists.push(
        // 각 <li> 요소에는 고유한 key prop이 필요합니다. 여기서는 각 데이터의 id를 key로 사용합니다.
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id} // href 속성은 클릭했을 때 이동할 URL을 지정합니다.
            data-id={data[i].id} // data-id 속성을 사용하여 각 링크에 고유한 ID를 부여합니다.
            onClick={function (e) {
              e.preventDefault(); // 기본 이벤트를 취소합니다. 여기서는 페이지가 다시 로드되는 것을 방지합니다.
              // 부모 컴포넌트로부터 전달받은 onChangePage 함수를 호출합니다.
              // e.target.dataset.id를 통해 클릭된 요소의 data-id 값을 얻습니다.
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)} // onClick 핸들러 내부에서 this가 컴포넌트 인스턴스를 가리키도록 bind 함수를 사용합니다.
          >
            {/* data 배열의 현재 항목의 title 값을 링크 텍스트로 사용합니다.*/}
            {data[i].title}
          </a>
        </li>,
      );
      i = i + 1; // 인덱스를 증가시켜 다음 항목으로 이동합니다.
    }

    // 최종적으로, 모든 리스트 아이템들을 포함하는 <nav> 요소를 반환합니다.
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

// TOC 컴포넌트를 export 하여 다른 파일에서 import하여 사용할 수 있도록 합니다.
export default TOC;
