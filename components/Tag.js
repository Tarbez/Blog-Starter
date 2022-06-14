import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-orange-500 hover:text-orange-400 dark:text-orange-300 dark:hover:text-orange-300">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
