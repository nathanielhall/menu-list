import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { MenuList, MenuListProps } from './MenuList'
import { MenuListItem } from './MenuListItem'

const setup = (propOverrides?: Partial<MenuListProps>) => {
  const props = {
    heading: 'my heading',
    ...propOverrides
  }
  const wrapper: ReactWrapper = mount(
    <MenuList {...props}>
      <MenuListItem onClick={() => console.log('clicked profile')}>
        Profile
      </MenuListItem>
      <MenuListItem onClick={() => console.log('clicked settings')}>
        Settings
      </MenuListItem>
    </MenuList>
  )
  return {
    props,
    wrapper
  }
}

test('renders', () => {
  const { wrapper } = setup()
  expect(wrapper.exists()).toBeTruthy()
})

test.todo('more tests')
