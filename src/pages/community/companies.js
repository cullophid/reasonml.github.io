import React from 'react'
import shuffle from '../../utils/shuffle'
import { accent } from '../../utils/colors'

const companies = shuffle([
  {
    title: 'Ephox',
    url: 'https://www.ephox.com/',
    img: require('./logos/ephox.png'),
  },
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/',
    img: require('./logos/facebook.png'),
  },
  {
    title: 'Viska',
    url: 'https://www.viska.com/',
    img: require('./logos/viska.png'),
  },
  {
    title: 'BeOpinion',
    url: 'https://beopinion.com',
    img: require('./logos/beopinion.png'),
  },
])

export default class Companies extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>The number of companies using Reason is growing</div>
        </div>
        <div css={styles.container}>
          {companies.map(({ title, url, img }) =>
            <a key={title} href={url} css={styles.link}>
              <img src={img} css={styles.img} alt={title} />
            </a>
          )}
        </div>
        <a css={styles.addCompanyLink} href="https://github.com/reasonml/reasonml.github.io/wiki/Is-your-company-using-Reason%3F">
          Add yours!
        </a>
      </div>
    )
  }
}

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    margin: 10,
    flexDirection: 'column',
  },
  addCompanyLink: {
    textDecoration: 'none',
    color: accent,
    ':hover': {
      textDecoration: 'underline',
    },
    ':visited': {
      color: '#b13c2e',
    },
  },
  img: {
    width: 250,
    marginBottom: 0.5,
  },
}
