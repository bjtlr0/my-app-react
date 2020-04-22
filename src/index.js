import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// StrictMode : 앱에서 발생할 수 있는 잠재적인 문제를 알아내기 위한 모드. => 디버깅 모드라고 봐도 되는건가?
// StrictMode는 개발모드에서만 활성화 되므로 프로덕션 빌드에 영향을 주지 않는다.
// StrictMode 내의 자손들까지 모두 검사가 이루어진다.
/** 
 * [StrictMode검사항목]
 * identifying components with unsafe lifecycles
 * 안전하지 않은 라이프사이클의 컴포넌츠 식별.
 * warning about legacy string ref API usage
 * 레거시 문자열 레퍼런스 사용에 대한 경고.
 * warning about deprecated findDOMNode usage
 * 권장되지 않는 findDOMNode 사용에 대한 경고
 * detecting unexpected side effects
 * 예상치 못한 부작용 검사
 * detecting legay context API
 * 레거시 콘텍스트 API의 검사
 * 
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
