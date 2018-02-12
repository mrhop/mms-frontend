/**
 * Created by Donghui Huo on 2018/2/12.
 */
import  React from 'react'
import {Select} from 'antd';
const Option = Select.Option
const urlSelectBefore = (
  <Select defaultValue="Http://" style={{ width: 90 }}>
    <Option value="Http://">Http://</Option>
    <Option value="Https://">Https://</Option>
  </Select>
);
const urlSelectAfter = (
  <Select defaultValue=".com" style={{ width: 80 }}>
    <Option value=".com">.com</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
    <Option value=".info">.info</Option>
  </Select>
);

export {urlSelectBefore, urlSelectAfter}
