const URL = import.meta.env.WP_GRAPHQL_URL;
import { traerPrimerPostQuery, datosPagina, categoriasPrincipalesQuery } from '../lib/queries';

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
* ******** BLOG **********
*/

const postsBlog = await fetch(`${URL}/`,
	{
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: traerPrimerPostQuery,
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
* ********* WOOCOMMERCE ***************
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