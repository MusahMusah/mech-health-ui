import { mount } from '@vue/test-utils'
import Analysis from '~/components/Analysis.vue'

test('Testing Analysis Component', () => {
  const wrapper = mount (Analysis)
  expect(wrapper.html()).toMatchSnapshot()
})
