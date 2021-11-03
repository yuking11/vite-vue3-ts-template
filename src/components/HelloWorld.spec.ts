import { mount } from '@vue/test-utils'
import store from '~/store'
import HelloWorld from '~/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('should display header text', () => {
    const msg = 'Hello Vue 3'

    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [store],
      },
      props: { msg },
    })

    expect(wrapper.find('h1').text()).toEqual(msg)
  })
})
