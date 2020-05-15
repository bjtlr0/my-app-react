import React, { Component } from 'react';
import { Home, Signup } from './pages';
import { Route, Switch } from 'react-router-dom';

// 이런 클래스 컴포넌트 선언 방식은 ES6를 도입한 이후에 사용 가능하다.
/** ES6가 도입되지 않은 경우 아래와 같이 선언한다.
 * var someClass = createReactClass({
 *  render : function(){
 *    return <div>some html</div>
 *  }
 * 
 * });
 * 
 * 
 * 
 */
class App extends Component {
  render(){
    return (
      <div>
        {/* Route 라이브러리를 설치했음, dom간의 이동을 편하게 할 수 있도록 한다.*/}
        <Route exact path="/" component={Home} />
        <Switch>
          {/* switch를 통해 동일한 url에서도 조건에 따라 분기시킬 수 있다. */}
          <Route path="/signup/:number" component={Signup}/>  {/* url이동 시에 파라미터를 붙이는 방법 :param */}
          <Route path="/signup" component={Signup}/>
        </Switch>
        {/*<Route path="/signup" component={Signup} />*/}
      </div>
    );
  };
};

export default App;