import React from "react";
import ReactDOM from "react-dom/client";
import dual from "./dual.gif";

// 创建高阶组件：装饰器模式
function WithMouse(WrappedComponent) {

  // 该组件提供复用的状态逻辑
  class Mouse extends React.Component {

    // 鼠标状态
    state = { x: 0, y: 0 };

    handleMouseMove = (event) => {
      this.setState({ x: event.clientX, y: event.clientY });
    }

    // 控制鼠标状态的逻辑
    componentDidMount() {
      window.addEventListener("mousemove", this.handleMouseMove);
    }

    // 清理工作
    componentWillUnmount() {
      window.removeEventListener("mousemove", this.handleMouseMove);
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />
    }
  }
  Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`;

  return Mouse;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// 函数式组件，使用箭头函数创建
const Position = (props) => (
  <p>鼠标当前位置: (x: {props.x}, y: {props.y})</p>
)

const Image = (props) => (
  <img src={dual} alt="dual" style={{
    position: "absolute",
    left: props.x - 173,
    top: props.y - 173
  }} />
)

// 增强后的组件
const MousePosition = WithMouse(Position);
const MouseImage = WithMouse(Image);

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        {/* 渲染增强后的组件 */}
        <MousePosition />
        <MouseImage />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

