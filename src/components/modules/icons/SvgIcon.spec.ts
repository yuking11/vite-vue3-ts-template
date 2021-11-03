import { mount } from '@vue/test-utils'
import store from '~/store'
import SvgIcon from '~/components/modules/icons/SvgIcon.vue'

describe('SvgIcon', () => {
  it('should display Component', () => {
    const props = {
      name: 'info_outline',
      width: 24,
      height: 24,
    }

    const wrapper = mount(SvgIcon, {
      global: {
        stubs: ['svgImage'],
        plugins: [store],
      },
      props,
    })

    expect(wrapper).toBeTruthy()
  })
})
