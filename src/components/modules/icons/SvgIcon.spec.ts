import { mount } from '@vue/test-utils'
import store from '~/store'
import SvgIcon from '~/components/modules/icons/SvgIcon.vue'

describe('SvgIcon', () => {
  it('should display Component', () => {
    const name = 'info_outline'

    const wrapper = mount(SvgIcon, {
      global: {
        stubs: ['VueSvgIcon', 'svgImage'],
        plugins: [store],
      },
      props: { name },
    })

    expect(wrapper).toBeTruthy()
  })
})
