import { Form, type FormProps } from '@lobehub/ui';
import { Select, Switch } from 'antd';

const setting = {
  i18n: 'en',
  liteAnimation: false,
  sidebarExpand: true,
  sidebarFixedMode: 'float',
  sidebarWidth: 300,
};

const items: FormProps['items'] = [
  {
    children: (
      <Select
        options={[
          {
            label: 'English',
            value: 'en',
          },
          {
            label: '简体中文',
            value: 'zh_CN',
          },
        ]}
      />
    ),
    desc: 'Editor language',
    label: 'Language',
    name: 'i18n',
  },
  {
    children: <Switch />,
    desc: 'Reduce the blur effect and background flow color, which can improve smoothness and save CPU usage',
    label: 'Reduce Animation',
    name: 'liteAnimation',
    valuePropName: 'checked',
  },
];

export default () => {
  return <Form initialValues={setting} items={items} itemsType={'flat'} onFinish={console.table} />;
};