import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Artigos e Reviews',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: 'Título do Artigo' }),
        description: fields.text({ name: 'Resumo (SEO)', multiline: true }),
        date: fields.date({
          name: 'Data de Publicação',
          defaultValue: { kind: 'today' },
        }),
        image: fields.image({
          name: 'Imagem de Capa',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
        }),
        categories: fields.array(
          fields.text({ name: 'Categoria' }),
          { label: 'Categorias', itemLabel: props => props.value }
        ),
        author: fields.text({
          name: 'Autor do Artigo',
          defaultValue: 'Leandro',
        }),
        draft: fields.checkbox({
          label: 'Salvar como Rascunho',
          defaultValue: false,
        }),
        content: fields.mdx({
          label: 'Conteúdo Completo',
        }),
      },
    }),
  },
});
