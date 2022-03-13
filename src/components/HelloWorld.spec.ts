import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import HelloWorld from '~/components/HelloWorld.vue'

describe('HelloWorld', () => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  it('should display header text', () => {
    const msg = 'Hello Vue 3'

    const wrapper = mount(HelloWorld, {
      props: { msg },
    })

    expect(wrapper.find('h1').text()).toEqual(msg)
  })
  /* eslint-enable */
})
