import React from 'react';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Accordion from './Accordion.js';

describe(`Accordion Component`, () => {

  const sections = [
    {
        title: 'Section 1',
        content: 'Section 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        title: 'Section 2',
        content: 'Section 2 Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
        title: 'Section 3',
        content: 'Section 3 Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]
  
  it('renders empty given no accordion item data', () => {
    const wrapper = shallow(<Accordion />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders no active sections by default', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('shows content under a button on click', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('hides content under a button on double click', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  
  
  it('shows content under a button on click after another button is exposed', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  }) 
})
