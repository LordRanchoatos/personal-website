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
        As a Full Stack Developer and tech entrepreneur, I thrive on building
        products that solve real-world problems. My journey spans Web3, AI, and
        Fintech sectors, where I transform complex technical solutions into
        user-friendly products that make a difference.
        <br />
        <br />I specialize in product development and team leadership, having
        revolutionized job search processes through AI integration at{' '}
        <a href="https://jobgap.xyz" target="_blank" rel="noopener noreferrer">
          jobgap.xyz
        </a>{' '}
        and created new possibilities in the Web3 ticketing space with{' '}
        <a
          href="https://spacevents.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          spacevents.xyz
        </a>
        . My entrepreneurial mindset drives me to build scalable solutions that
        serve thousands of users, not just write code.
        <br />
        <br />
        Combining technical expertise with business strategy has enabled me to
        successfully guide products from conception to market success across
        both traditional tech and Web3 spaces.Combining technical expertise with
        business strategy has enabled me to successfully guide products from
        conception to market success across both traditional tech and Web3
        spaces.
      </p>
      <br />
      - Built and scaled JobgapAI from 1,000 to 6,000+ users through AI-powered
      features
      <br />
      - Launched DeFi platform managing 13.2M+ tokens across 186+ wallets
      <br />
      - Led Bankless Africa's development, managing cross-functional teams
      <br />
      - Developed and launched NFT ticketing platform serving 400+ blockchain
      event attendees
      <br />- Maintained Madhatter bot for Web3 community management and
      administration at{' '}
      <a
        href="https://www.bankless.community/"
        target="_blank"
        rel="noopener noreferrer"
      >
        BanklessDAO
      </a>
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
