import Link from 'next/link'

export default function Menubar() {
    return (
      <>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='https://expense-alpha-ruby.vercel.app/'>Midterm Part I - Expense</Link>
          </li>
          <li>
            <Link href='https://miterm-part-2.vercel.app/'>Midterm Part II - own site</Link>
          </li>
        </ul>
      </>
    )
  }