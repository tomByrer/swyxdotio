import React from 'react'
import Link from 'gatsby-link'
import { A } from 'swyx-a'
const Markdown = require('react-markdown')

import { Callout } from '@blueprintjs/core'
const IndexPage = () => (
  <div>
    <div style={{ marginTop: 20 }}>
      <img
        src="https://user-images.githubusercontent.com/35976578/39973926-0f34b514-56f3-11e8-9c4e-59547fedb719.jpg"
        height={100}
        width={100}
        style={{
          borderRadius: '50%',
          float: 'right',
          margin: 20,
        }}
      />
      <h1> Hello there!</h1>
      <p> This is the homepage of Shawn Wang on the web!</p>
    </div>

    <Markdown
      escapeHtml={false}
      source={`

  * 🗺️ I'm from Singapore 🇸🇬 and live in NYC 🍎🗽.
  * 👨🏼‍🎓 Proud [Wharton](https://www.wharton.upenn.edu/), [Huntsman](http://huntsman.upenn.edu/) and [UChicago](http://finmath.uchicago.edu/) alum, current [GATech OMSCS](https://www.omscs.gatech.edu/) student.
  * 💰 I used to trade stocks, currency and derivatives at some of the largest [banks](https://www.sc.com/) and [hedge funds](https://www.bamfunds.com/) in the world (with [Haskell](https://www.haskell.org/) and [Python](https://www.python.org/)).
  * ⚛️ Now I maintain the [Typescript](https://www.typescriptlang.org/)/[React](https://reactjs.org/) [design system](https://designsystemsrepo.netlify.com/) at [Two Sigma](https://www.twosigma.com/)'s insurance startup.
  * 🎤 I also did a fair amount of Singing/Acapella back in the day. Now I listen to a ton of [podcasts](https://github.com/sw-yx/awesome-dev-podcasts) (and [make one](https://www.impostor-syndrome.org/)!)
  * 💁🏼‍♂️ [Talk to me](mailto:momoney@swyx.io) about fintech/frontend consulting engagements!
  `}
    />
    <Callout style={{ marginBottom: 20, textAlign: 'center' }}>
      You can find me on <A href="https://twitter.com/swyx">Twitter</A> and{' '}
      <A href="https://github.com/sw-yx">Github</A>!
    </Callout>

    <Markdown
      escapeHtml={false}
      source={`
  ### 📚 Current Projects

  * [Founder Checklists](https://founders.swyx.io/) - Short lists for hard problems by founders who've been there, done that.
  * [Impostor Syndrome](https://spectrum.chat/impostor-syndrome) - a [podcast](https://www.impostor-syndrome.org/) and [online community](https://spectrum.chat/impostor-syndrome) for people joining the tech industry via bootcamps.
  * [React Rally](http://www.reactrally.com/speakers) - Preparing for a public talk at the biggest stage of my life.
  * (pending) [Egghead.io](https://egghead.io/) instructor - short technical courses!
  * (pending) Georgia Tech OMSCS - Course 1-10


  ### ❤️ Open Source

  * [Storybook Typescript Docs](https://storybook.js.org/configurations/typescript-config/) - I wrote the whole thing, and also added some more longform stuff on [dev.to](https://dev.to/swyx/quick-guide-to-setup-your-react--typescript-storybook-design-system-1c51)
  * [create-react-app-parcel](https://github.com/sw-yx/create-react-app-parcel) - CLI for creating react apps with parceljs because why not!
  * [async-render-toolbox](https://github.com/sw-yx/async-render-toolbox) - Chrome/Firefox extension for adding the React Time Slicing Lag Radar


  ### 🗣️ Talks

  * [Fullstack Academy: React Trip Planner](https://github.com/sw-yx/FSA-React-Trip-Planner) - a guided workshop on converting a vanilla JS app into React for the first time.
  * [Fullstack Academy: Crossbones](https://www.fullstackacademy.com/hackathon-presentations/crossbones-fullstacks-react-native-boilerplate) - a React Native boilerplate [[source](https://github.com/sw-yx/crossbones)]
  * [Fullstack Academy: Heaps](https://slides.com/swyx/heaps#/) - a guide to the data structure and where they are used
  * [ReactNYC: Contributing to React](https://www.youtube.com/watch?v=GWCcZ6fnpn4) - my first technical talk, added by Dan Abramov to [React's official docs](https://reactjs.org/docs/how-to-contribute.html) [[slides](https://github.com/sw-yx/react-contributing)]
  * [ReactNYC: Never Bundle React Again](https://www.youtube.com/watch?v=rPuwZJEA-9U) - a lightning talk rehash of [this React Rally talk](https://www.youtube.com/watch?v=2rhkgB8Cohc) [[slides](https://slides.com/swyx/never-bundle-react-again#/)] - I'm not super proud of it but 🤷🏼‍♂️
  * [ReactNYC: React Suspense](https://slides.com/swyx/react-suspense) - a compendium of everything discussed about the React Suspense API
  * [ReactNYC: Creating Create React App](https://www.beautiful.ai/deck/-LD4eaMxlqSlCy6biPmZ/Creating-Create-React-App) - diving into the history of CRA, how CRA works, and my experience making [create-react-app-parcel](https://github.com/sw-yx/create-react-app-parcel)

  `}
    />
  </div>
)

export default IndexPage
