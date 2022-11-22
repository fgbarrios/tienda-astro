const URL = import.meta.env.WP_GRAPHQL_URL;

/*
* ARTICULOS DEL BLOG
*/

import { getFirstPostsQuery, datosPagina, categoriasPrincipalesQuery } from '../lib/queries';

const postsBlog = await fetch(`${URL}/`,
	{
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: getFirstPostsQuery,
			variables: {
				first: 20,
			},
		}),
	});

const jsonBlog = await postsBlog.json();
const allPosts = jsonBlog.data.posts.edges;

export { allPosts };

//const heroPost = allPosts[0]; // primer post

/*
* DATOS DEL SITIO
*/
const datos = await fetch(`${URL}/`,
	{
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: datosPagina
		}),
	})
const jsonDatos = await datos.json();
const datosSitio = jsonDatos.data.datos.nodes[0]; 

export { datosSitio };

/*
* PRINCIPALES CATEGORIAS
*/
const categorias = await fetch(`${URL}/`,
	{
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: categoriasPrincipalesQuery
		}),
	})
const jsonDatosCat = await categorias.json();
const categoriasPrincipales = jsonDatosCat.data.productCategories.nodes; 

export { categoriasPrincipales };