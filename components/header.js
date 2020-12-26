import Link from 'next/link'

function Header() {
    return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/courses">
                                <a>Courses</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Resources">
                                <a>Resources</a>
                            </Link>
                        </li>
                        <li>
                            <button type="button">Login</button>
                        </li>
                    </ul>
                </nav>

    <style jsx>{`
        header {
          padding: 0.2rem;
          color: #000;
          background-color: #fff;
          border-style: outset;
        }
        nav {
          max-width: 42rem;
          margin: 1.5rem auto;
        }
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }
        li {
          margin-right: 1rem;
        }
        li:nth-child(3) {
          margin-right: auto;
        }
        a {
          color: #000;
          text-decoration: none;
        }
        button {
          font-size: 1rem;
          color: #fff;
          cursor: pointer;
          border: none;
          padding: 0.5rem;
          background-color:#56BD66;
        }
      `}</style>
            </header>
    )
}

export default Header
