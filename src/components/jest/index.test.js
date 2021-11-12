
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import { Example } from './index'



describe('Enzyme shallow', function () {
    it('Example component', function () {
        const name = '按钮名'
        let wrapper = shallow(<Example text={name} />)
        expect(wrapper.contains(<p>hello</p>)).toEqual(true)
    })

    it('事件', () => {
        let wrapper = shallow(<Example text={'click me'} />)
        wrapper.find('.btn').simulate('click')
        expect(wrapper).toMatchSnapshot()

    })

    it('props 测试', () => {
        let wrapper = shallow(<Example text={'点我'} />)
        console.log(wrapper.prop('text'))
        // expect(wrapper.prop('text')).toEqual('点我')
    })
})