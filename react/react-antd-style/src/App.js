import { Button, DatePicker, notification } from "antd";
import {
  BorderTopOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";
import "./App.css";

function App() {
  const openNotification = () => {
    notification.info({
      // icon: <BorderTopOutlined />,
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      placement: "top",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  return (
    <div className="App">
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
      <DatePicker placeholder="select date" />
    </div>
  );
}

export default App;
