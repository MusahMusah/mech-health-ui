import { mount } from '@vue/test-utils'
import ModalCard from '~/components/ModalCard.vue'

describe('ModalCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ModalCard)
    expect(wrapper.vm).toBeTruthy()
  })
})
