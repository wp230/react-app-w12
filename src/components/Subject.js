// React의 Component 클래스를 가져옵니다.
import { Component } from "react";

// 'Subject'라는 이름의 클래스 기반 컴포넌트를 정의합니다.
class Subject extends Component {
  // render 메서드는 컴포넌트가 화면에 렌더링 될 내용을 반환합니다.
  render() {
    // JSX를 반환합니다. 여기서는 header 요소를 사용하여 페이지의 헤더 부분을 구성합니다.
    return (
      // header 태그는 웹 페이지나 섹션의 헤더를 나타냅니다.
      <header>
        {/* h1 태그는 페이지 타이틀을 위한 HTML 태그입니다. */}
        <h1>
          {/* a 태그는 하이퍼링크를 생성합니다.
          여기서는 클릭 이벤트를 처리하기 위한 onClick 이벤트 핸들러를 정의하고 있습니다. */}
          <a
            href="/" // href 속성은 클릭했을 때 이동할 URL을 지정합니다.
            onClick={function (e) {
              e.preventDefault(); // 기본 이벤트를 취소합니다. 여기서는 페이지가 다시 로드되는 것을 방지합니다.
              this.props.onChangePage(); // 부모 컴포넌트로부터 전달받은 onChangePage 함수를 호출합니다.
            }.bind(this)} // onClick 핸들러 내부에서 this가 컴포넌트 인스턴스를 가리키도록 bind 함수를 사용합니다.
          >
            {/* this.props.title을 사용하여 부모 컴포넌트로부터 전달받은 title 값을 표시합니다. */}
            {this.props.title}
          </a>
        </h1>
        {/* 부모 컴포넌트로부터 전달받은 sub 프로퍼티를 화면에 표시합니다. */}
        {this.props.sub}
      </header>
    );
  }
}

// Subject 컴포넌트를 export 하여 다른 파일에서 import하여 사용할 수 있도록 합니다.
export default Subject;
