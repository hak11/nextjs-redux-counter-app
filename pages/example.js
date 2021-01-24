import Counter from '../components/counter'
import Nav from '../components/nav'
import Head from 'next/head';

export default function Example() {
	return (
		<>
			<Head>
				<title>Page Example</title>
			</Head>
			<Nav />
			<br />
			<br />
			<br />
			Name: Example Page
			<Counter />
		</>
	)
}
