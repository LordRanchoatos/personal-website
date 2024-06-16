import React from 'react'
import Link from 'next/link'
import { META } from './metadata'

export const ELEMENTS = {
  mainText: (
    <>
      Essays <span className="amp">&</span> Writings
    </>
  ),
  about: (
    <>
      <p>
        I am a full stack developer, self taught develooper with a vast
        experience in building product that cut accross different technologies
        and aspects of lifes
      </p>
      <br />
      <br />
      <a href={`mailto:${META.email}`}>{META.email}</a>﹒{' '}
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a
        href={`https://twitter.com/${META.social.twitter}`}
        target="_blank"
        rel="noopener"
      >
        Twitter
      </a>
    </>
  ),
  belowArticle: `
---

# Author

I am Kumar Abhirup, a 20yo Founder and Engineer, having built many projects in past, I am on a path aiming to solve humanities' most pressing issues, in an iterative fashion, starting from most trivial things imaginable. To connect, you may DM me on [twitter](https://kumareth.com/twitter).

_Like what I write? [Subscribe to **my newsletter**](https://kumareth.com/subscribe)._
  `,
}
