import { mount } from '@vue/test-utils'
import Services from '~/components/Services.vue'

describe('Services', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Services)
    expect(wrapper.vm).toBeTruthy()
  })
})
