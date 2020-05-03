import React from 'react'

import Layout from '../components/Layout'
import { USES } from '../constants/Uses'
import { META } from '../constants/Meta'

function Uses({ og }) {
  return (
    <>
      <Layout secondaryPage>
        <h1 className="uses-h1">What I use</h1>

        <div className="uses-intro">
          Many folks on my{' '}
          <a
            href={`https://twitter.com/${META.social.twitter}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Twitter
          </a>{' '}
          ask me what stuff I use everyday , so here it is.
        </div>

        {USES.map(({ title, stack }) => (
          <ul className="uses-list" key={title}>
            <li className="head">{title}</li>

            {stack.map(({ name, description, link }) => (
              <>
                <li key={name}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {name}
                  </a>
                  <span>{description}</span>
                </li>
              </>
            ))}
          </ul>
        ))}
      </Layout>
    </>
  )
}

Uses.getInitialProps = () => ({
  data: {
    og: {
      description: `What ${META.fname} uses on a daily basis.`,
      image: META.pageOgs.uses,
    },
  },
})

export default Uses
