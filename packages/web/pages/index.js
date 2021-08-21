import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

import Layout, { Icon } from '../components/Layout'
import { META, ELEMENTS } from '../constants/Meta'
import { TECH, SOCIAL, PROJECTS } from '../constants/Stack'
import TextTransitionAnimation from '../components/TextTransitionAnimation'
import Subscribe from '../components/Subscribe'
import { DiscordInviteBox } from './subscribe'

function About() {
  return (
    <>
      <Layout secondaryPage>
        <div style={{ marginTop: 50, paddingLeft: '3px', paddingRight: '3px' }}>
          <h1 className="about-h1">
            {META.fname} {META.lname}
            {/* <TextTransitionAnimation /> */}
          </h1>

          <div className="about-intro">
            <Row>
              <Col md={12}>{ELEMENTS.about}</Col>
            </Row>
            <hr />
            <>
              <h3>{TECH.title}</h3>
              <Row style={{ marginTop: 30 }}>
                {TECH.data.map(s => (
                  <Col
                    md={2}
                    xs={4}
                    key={s?.title || s}
                    style={{ textAlign: 'center', marginBottom: 40 }}
                  >
                    {(() => {
                      if (s?.svg && s?.title) {
                        return (
                          <>
                            <div
                              data-icon={s?.title}
                              style={{
                                fill: `${s?.hex || '#000'}`,
                                display: 'inline-block',
                                width: '50px',
                                margin: '0 auto',
                              }}
                              dangerouslySetInnerHTML={{ __html: s?.svg }}
                            />
                            <div className="stack-name">{s?.title}</div>
                          </>
                        )
                      }

                      return (
                        <>
                          <Icon stack={s} />
                          <div className="stack-name">{s}</div>
                        </>
                      )
                    })()}
                  </Col>
                ))}
              </Row>
            </>
            <br />
            <>
              <h3>{PROJECTS.title}</h3>
              <Row style={{ marginTop: 30 }}>
                <ul
                  className="uses-list"
                  style={{ marginTop: '0px', marginBottom: '0px' }}
                >
                  {PROJECTS.data.map(
                    ({ image, name, description, link, width }) => (
                      <div key={link}>
                        <img
                          src={image}
                          alt={`Project - ${name}`}
                          style={{
                            width: width ? `${width}px` : '200px',
                            marginLeft: '10px',
                          }}
                        />
                        <li key={name}>
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                          >
                            {name}
                          </a>
                          <br />
                          <br />
                          <span className="darker">{description}</span>
                        </li>
                        <hr />
                      </div>
                    )
                  )}
                </ul>
              </Row>
            </>
            <br />
            <>
              <h3>{SOCIAL.title}</h3>
              <Row style={{ marginTop: 30 }}>
                {SOCIAL.data.map(s => (
                  <Col
                    md={2}
                    xs={4}
                    key={s.link}
                    style={{ textAlign: 'center', marginBottom: 40 }}
                  >
                    <Icon stack={s.platform} />
                    <div className="stack-name">
                      <a
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {s.platform}
                      </a>
                    </div>
                  </Col>
                ))}
              </Row>
            </>

            <DiscordInviteBox />

            <br />

            {/* <div className="card"> */}
            <Subscribe />
            {/* </div> */}

            <hr />

            <center>
              Follow me on{' '}
              <a
                href={`https://twitter.com/${META.social.twitter}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Twitter
              </a>
              . That's where I usually hangout.
            </center>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About
