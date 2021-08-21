import React from 'react'
import { META } from './metadata'

export const ELEMENTS = {
  mainText: (
    <>
      Essays <span className="amp">&</span> Writings
    </>
  ),
  about: (
    <>
      I am a Full-Stack JavaScript Developer who loves to code and create cool
      projects. I am specialized in building full stack applications that use
      React in frontend and Node.js, GraphQL in the backend.
      <br />
      <br />I am in the evergreen process of learning, and I am loving it!
      <br />
      Currently running{' '}
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href="https://itsbeam.com" target="_blank" rel="noopener">
        Beam, the Substack for SMS.
      </a>
      <br />
      <br />
      <a href={`mailto:${META.email}`}>{META.email}</a> ﹒{' '}
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href={`${META.resume}`} target="_blank" rel="noopener">
        Resume
      </a>
    </>
  ),
  belowArticle: `
---

# 🏆 About me

I am **Kumar Abhirup, an 18-year-old Software Developer**, founder of [Beam](https://itsbeam.com). <br /> To connect, you may DM me on [twitter](https://twitter.com/kumar_abhirup).

_Love what I write? [Subscribe to **my newsletter**](https://kumarabhirup.me/subscribe) and stay updated about my content in general, lol._
  `,
}
