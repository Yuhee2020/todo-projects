import * as React from 'react'

export const Sun = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 16 14" fill="currentColor" height="1.5em" width="1.5em" {...props}>
      <path
        fill="currentColor"
        d="M8 13a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zM8 3a1 1 0 01-1-1V1a1 1 0 012 0v1a1 1 0 01-1 1zm7 4a1 1 0 010 2h-1a1 1 0 010-2h1zM3 8a1 1 0 01-1 1H1a1 1 0 010-2h1a1 1 0 011 1zm9.95 3.536l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414zm-9.9-7.072l-.707-.707a.999.999 0 111.414-1.414l.707.707A.999.999 0 113.05 4.464zm9.9 0a.999.999 0 11-1.414-1.414l.707-.707a.999.999 0 111.414 1.414l-.707.707zm-9.9 7.072a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM8 4a4 4 0 100 8 4 4 0 000-8zm0 6.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
      />
    </svg>
  )
}
