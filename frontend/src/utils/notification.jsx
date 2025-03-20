import { notification } from 'antd';

const openNotificationWithIcon = (type, title, description, duration) => {
  notification[type]({
    message: title,
    description: description,
    duration: duration,
    placement: 'top'
  });
};

export default openNotificationWithIcon;