<template>
  <VueSvgIcon :data="svg" v-bind="$attrs" original />
</template>

<script lang="ts">
import { defineComponent, shallowRef, PropType } from 'vue'

type Props = Readonly<{
  name: string
}>

export default defineComponent({
  props: {
    name: {
      type: String as PropType<Props['name']>,
      required: true,
    },
  },
  setup(props: Props) {
    // set data

    const svg = shallowRef('')

    import(`../../assets/svg/${props.name}.svg`).then((val) => {
      svg.value = val.default
    })

    return {
      svg,
    }
  },
})
</script>
