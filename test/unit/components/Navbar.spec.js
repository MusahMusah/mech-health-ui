import { mount } from '@vue/test-utils'
import Navbar from '~/components/Navbar.vue'

describe('Navbar', () => {
  test('Testing the Navbar Component', () => {
    const wrapper = mount(Navbar)
    expect(wrapper.vm).toBeTruthy()
  })
})
