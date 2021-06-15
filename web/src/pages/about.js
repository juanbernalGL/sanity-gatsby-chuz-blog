import React from 'react'
// import { Link } from 'gatsby'
// import Container from '../components/container'
// import FilterButton from '../components/FilterButton'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
// import { graphql } from 'gatsby'
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from '../lib/helpers'

// export const query = graphql`
//   fragment SanityImage on SanityMainImage {
//     crop {
//       _key
//       _type
//       top
//       bottom
//       left
//       right
//     }
//     hotspot {
//       _key
//       _type
//       x
//       y
//       height
//       width
//     }
//     asset {
//       _id
//     }
//   }

//   query IndexPageQuery {
//     site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
//       title
//       subtitle
//       description
//       keywords
//     }
//     posts: allSanityPost(
//       limit: 6
//       sort: { fields: [publishedAt], order: DESC }
//       filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
//     ) {
//       edges {
//         node {
//           id
//           publishedAt
//           mainImage {
//             ...SanityImage
//             alt
//           }
//           title
//           subtitle
//           _rawExcerpt
//           slug {
//             current
//           }
//         }
//       }
//     }
//   }
// `

const about = (props) => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : []

//  <<<
  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      {postNodes && <div>hola</div>}
      {/* <Container> */}
      <h1>about.....</h1>
      {/* </Container> */}
    </Layout>
  )
}

export default about