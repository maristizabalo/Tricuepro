import { notification } from 'antd';

const openNotificationWithIcon = (type, title, description, duration) => {
  notification[type]({
    message: title,
    description: description,
    duration: duration,
    placement: 'top',
    // className: 'dark:bg-gray-800 dark:text-white',
  });
};

export default openNotificationWithIcon;