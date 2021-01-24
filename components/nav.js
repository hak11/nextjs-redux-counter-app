import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/example">
        <a>Example</a>
      </Link>
      <Link href="/example1">
        <a>Example 1</a>
      </Link>
      <style jsx>
        {`
          a {
            margin-right: 15px;
          }
        `}
      </style>
    </nav>
  )
}

export default Nav
