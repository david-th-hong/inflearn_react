# 이 스터디는 조현영님의 react 무료강좌를 따라갑니다.

## NOTE 1-1 왜 리액트인가?

- 리액트는 프레임워크.
- 사용법을 배워보자
  - 리액트 공식 문서 보면 잘 나옴.
  - 리액트 class보다는 hooks로 배울것
  - hooks가 표준
  - 90%는 class로 만들어짐
  - 둘다 다룬다.
- 리액트는 SPA
  - 앱과 비슷한 느낌
  - 사용자 경험
  - 전형적인 웹사이트에서의 진화
  - 앱같은 경험을 웹에서 구현
- 리액트는 데이터 처리를 쉽게함
  - 데이터가 많아지면, 관리가 어려워짐.
  - 데이터와 화면을 일치시키는게 어려움
- 재활용 가능한 웹 컴포넌트
  - 컨텐츠만 다르고 템플릿이 같으면, 컴포넌트로 재활용 가능.
  - 중복되지 않고 유지보수 쉽게
  - 컴포넌트는 조각임
  - 중복을 피할수 있다

### 즉, 사용자 경험 / 데이터 관리 / 중복되는 요소 재활용

- 처음 시작에 어려운것은 컴포넌트로 만드는 사고 전환이 어려움.
- 전환하는 연습을 하겠다.

## NOTE 1-2 첫 리액트 컴포넌트

- 리액트는 자바스크립트. JS파일
- HTML에서 JS는,

```html
<html>
  <head> </head>
  <body>
    <script src="like-button.js"></script>
    // 이렇게도 쓸수 있고
    <script>
      window.onload = () => {}
    </script>
  </body>
</html>
```

- 웹팩을 이해해야함. 웹팩은 쪼개진 자바스크립트 파일을 html이 실행할수 있는 JS 하나로 모아주는 역할임

- 아래는 div id=root 라는 dom에 react가 like라는 버튼을 그려주는것임

```html
<html>
  <head>
    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
  </head>
  <body>
    <div id="root"></div>
    <script>
      const e = React.createElement

      class LikeButton extends React.Component {
        constructor(props) {
          super(props)
        }
        render() {
          return e('button', null, 'like')
        }
      }
    </script>
    <script>
      ReactDOM.render(e(LikeButton), document.querySelector('#root'))
    </script>
  </body>
</html>
```

## NOTE 1-3 HTML 속성과 state

- 위에서 만든 HTML Like 버튼에 event를 입혀보자.

```html
<html>
  <head>
    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
  </head>
  <body>
    <div id="root"></div>
    <script>
      const e = React.createElement

      class LikeButton extends React.Component {
        constructor(props) {
          super(props)
          // 아래부터 상태를 표시하기 위해 this.state를 사용.
          this.state = {
            liked: false,
          }
        }
        render() {
          // return e('button', null, 'like')
          // 위에서 null 은 event의 위치임
          // 아래같이 console.log를 반납해보자
          return e(
            'button',
            {
              onClick: () => {
                this.setState({ liked: true }), console.log('click like button')
              },
            },
            'LIKE BUTTON'
          )
        }
      }
    </script>
    <script>
      ReactDOM.render(e(LikeButton), document.querySelector('#root'))
    </script>
  </body>
</html>
```

- 위와같이 button DOM을 생성하고 event를 넣어보았다.
- 상태는 바뀌는 부분/ 바뀔수 있는 부분이다.
- Like button 이 상태인거임
- 상태는 this.state로 생성자에서 설정 (아래 참고)

```javascript
class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Liked: false,
    }
  }
}
```

- 이벤트에서 state 접근은 this.setState로 접근

## NOTE 1-4 JSX 와 Babel

- 클래스 하나가 컴포넌트 하나라고 생각해라

- 아래 문법은 매우 귀찮으니 다른 방식이 있다.

- 기존

```javascript
        render() {
          // return e('button', null, 'like')
          // 위에서 null 은 event의 위치임
          // 아래같이 console.log를 반납해보자
          return e(
            'button',
            {
              onClick: () => {
                this.setState({ liked: true }), console.log('click like button')
              },
            },
            'LIKE BUTTON'
          )
        }
```

- 변경

```javascript
render() {
  return (
    <button
    type="submit"
    onClick = {() => {this.setState({liked : true})}}
      > Like
    </button>
    )
}
```

- 위와 같은 문법은 지원하지 않기 때문에 babel을 사용해야함.

  - Index.html에서 위 코드를 돌려보자.
  - 당연히 return 에서 < 부터 인식하지 못하는 에러를 리턴

- bable을 import해보자

```html
<script src="https://unpkg.com/babel-standalone@6/bable.min.js"></script>
<!--  그리고 각 스크립트 실행에서
 <script>를  <script type="text/bable"></script>-->
로 변경
```

- 위에 저 코드가 JSX임 javascript와 XML을 합친거다.

- 저렇게 만들면 재사용성이 좋아진다.
- Like 버튼을 여러개 만들고싶으면 아래와 같이 React.DOM에서 Component만 반복해주면 된다
- 물론 div하나로 감싸주긴 해야함. vue 도 template으로 감싸준것처럼.
- 또 대문자로 시작하는것이 컴포넌트임.

```javascript
ReactDOM.render(
  <div>
    <LikeButton />
    <LikeButton />
    <LikeButton />
  </div>,
  document.querySelector('#root')
)
```

## NOTE 1-5 첫번째 Q&A

- State는 변할수 있는 여지가 있는것
- Props는 컴포넌트간의 상속을 위해 존재.
- state에 등록하면 변하는 부분 관리가 가능함.
-

## NOTE 1-6 구구단 리액트로 만들기

- 조현영님의 javascript강의도 참고하자
- 바뀌는 곳을 먼저 파악해라!

## NOTE 1-7 클래스 매서드

- onChange등은 메서드를 따로 구분해서 만들수 있음

## NOTE 1-8 Fragment와 기타 팁들

- render안에서 div로 감싸는것은 쓸데 없음.
- <div></div> 대신에 <> </> 또는 <React.Fragment></React.Fragment>로 감쌀수 있다.
- react 에서의 Constructor 알아봐야함.

  - 위에가 무슨 말이냐면 아래 코드를 보자

  ```javascript
  class Gugudan extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        // 1. 변할 것들을 다 state로 만들어준다.
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
        result: '',
      }
    }
  }
  ```

  - 이거 대신에 아래같이 Contructor 또는 super없이,

  ```javascript
  class Gugudan extends React.Component {
    state = {
      // 1. 변할 것들을 다 state로 만들어준다.
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: '',
      result: '',
    }
  }
  ```

## NOTE 1-9 함수형 setState

```javascript
```

## NOTE 1-10 ref

- focus()를 위해 사용함.
- onRefInput = (c) => { this.input = c; };

  ```html
  <input
    ref="{this.onRefInput}"
    type="number"
    value="{this.state.value}"
    onChange
    ....
  />
  ```

- 위와같이 작성하여, focus를 대체함.
