import Layout from '../index.js'
import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button, LocaleProvider } from 'antd'
import BaseStyle from 'antd/lib/style/index.css';
import GridStyle from 'antd/lib/grid/style/index.css';
import LayoutStyle from 'antd/lib/layout/style/index.css';
import FormStyle from 'antd/lib/form/style/index.css';
import SelectStyle from 'antd/lib/select/style/index.css';
import InputNumberStyle from 'antd/lib/input-number/style/index.css';
import DatePickerStyle from 'antd/lib/date-picker/style/index.css';
import SwitchStyle from 'antd/lib/switch/style/index.css';
import SliderStyle from 'antd/lib/slider/style/index.css';
import ButtonStyle from 'antd/lib/button/style/index.css';
import LocaleProviderStyle from 'antd/lib/locale-provider/style/index.css';
import enUS from 'antd/lib/locale-provider/en_US'

const style = BaseStyle + GridStyle + LayoutStyle + FormStyle + SelectStyle + InputNumberStyle + DatePickerStyle + SwitchStyle + SliderStyle + ButtonStyle + LocaleProviderStyle;
const FormItem = Form.Item
const Option = Select.Option

export default () => (
  <Layout>
    <LocaleProvider locale={enUS}>
      <div style={{ marginTop: 100 }}>
        <Form layout='horizontal'>
          <FormItem
            label='Input Number'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
        >
            <InputNumber size='large' min={1} max={10} style={{ width: 100 }} defaultValue={3} name='inputNumber' />
            <a href='#'>Link</a>
          </FormItem>

          <FormItem
            label='Switch'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
        >
            <Switch defaultChecked name='switch' />
          </FormItem>

          <FormItem
            label='Slider'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
        >
            <Slider defaultValue={70} />
          </FormItem>

          <FormItem
            label='Select'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
        >
            <Select size='large' defaultValue='lucy' style={{ width: 192 }} name='select'>
              <Option value='jack'>jack</Option>
              <Option value='lucy'>lucy</Option>
              <Option value='disabled' disabled>disabled</Option>
              <Option value='yiminghe'>yiminghe</Option>
            </Select>
          </FormItem>

          <FormItem
            label='DatePicker'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
        >
            <DatePicker name='startDate' />
          </FormItem>
          <FormItem
            style={{ marginTop: 48 }}
            wrapperCol={{ span: 8, offset: 8 }}
        >
            <Button size='large' type='primary' htmlType='submit'>
            OK
          </Button>
            <Button size='large' style={{ marginLeft: 8 }}>
            Cancel
          </Button>
          </FormItem>
        </Form>
      </div>
    </LocaleProvider>
    <style jsx global>{style}</style>
  </Layout>
)
