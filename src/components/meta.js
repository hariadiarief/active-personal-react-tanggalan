import Head from 'next/head'

const defaultTitle = 'Tanggalan'
const defaultThumbnail =
	'https://images.unsplash.com/photo-1591174425156-fd472f354be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
const defaultURL = 'https://watsapan.netlify.app/'
const defaultKeyword = 'kalender, calendar, tangggalan'

const Meta = ({ title = '', description, url = defaultURL, image = defaultThumbnail, keywords = defaultKeyword }) => {
	return (
		<Head>
			<title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
			<meta name='title' content={title} />
			<meta name='description' content={description} />

			<meta property='og:type' content='website' />
			<meta property='og:url' content={url} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={image} />

			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content={url} />
			<meta property='twitter:title' content={title} />
			<meta property='twitter:description' content={description} />
			<meta property='twitter:image' content={image} />
			<meta name='p:domain_verify' content='1c45cd484910f8887fdf4c4fe4332510' />

			<meta name='keywords' content={keywords} />
			<meta name='robots' content='index, follow' />
			<meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
			<meta name='language' content='English' />
			<meta name='revisit-after' content='7 days' />
			<meta name='author' content='Masagus Hariadi Arief' />
		</Head>
	)
}

export default Meta
