import { reactive } from 'vue'

type Meta = {
  name?: string
  property?: string
  content: string
}

type UsePageMeta = {
  title: string
  meta: Meta[]
}

export const usePageMeta = (title: string, description: string, isTop = false): UsePageMeta => {
  return reactive({
    title,
    meta: [
      {
        name: `description`,
        content: description,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:type',
        content: !isTop ? 'article' : 'website',
      },
    ],
  })
}
