import { Progress } from "antd";

const MyProgress = ({ percent, width, type, trailColor, strokeColor }) => {
  return (
    <Progress
      trailColor={trailColor}
      type={type}
      percent={percent}
      width={width}
      strokeColor={strokeColor}
    ></Progress>
  );
};

export default MyProgress;
