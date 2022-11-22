export const allPostsWithSlugQuery = `
{
  posts(first: 10000) {
    edges {
      node {
        slug
      }
    }
  }
}
`;

export const getFirstPostsQuery = `
query AllPosts($first: Int) {
  posts(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
    edges {
      node {
        title
        excerpt
        slug
        content
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
            firstName
            lastName
            avatar {
              url
            }
          }
        }
      }
    }
  }
}
`;

export const findPostBySlug = `query findPostBySlug($slug: String!) {
  postBy(slug: $slug) {
    title
    featuredImage {
      node {
        sourceUrl
      }
    }
    content
    date
    author {
          node {
            name
            firstName
            lastName
            avatar {
              url
            }
          }
        }
  }
}`;


export const datosPagina = `query datos {
  datos {
    nodes {
      nombreDeLaTienda
      direccion
      telefonoDeLinea
      email
      numeroWhatsApp
      facebook
      instagram
      tikTok
      leyendaEnHeaderSuperior
      mensajeImportante      
    }
  }
}`;

export const categoriasPrincipalesQuery = `query categorias {
	productCategories(first: 4) {
		nodes {
			id
			name
			slug
			image {
				sourceUrl
				altText
			}
		}
	}	
}`;