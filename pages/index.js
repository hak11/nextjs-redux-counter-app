import Counter from '../components/counter'
import Nav from '../components/nav'
import Head from 'next/head';

export default function Page() {

	return (
		<>
			<Head>
				<title>Page Index</title>
			</Head>
			<Nav />
			<br />
			<br />
			<br />
			Name : Index
			<Counter />
		</>
	)
}
