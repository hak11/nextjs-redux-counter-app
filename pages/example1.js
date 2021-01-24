import Head from 'next/head';
import Counter from '../components/counter'
import Nav from '../components/nav'

export default function Example1() {
	return (
		<>
			<Head>
				<title>Page Example 1</title>
			</Head>
			<Nav />
			<br />
			<br />
			<br />
			Name: Example 1 Page
			<Counter />
		</>
	)
}
