// @flow
import React, { Fragment } from 'react'
import { withRouteData } from 'react-static'
import Attendees from '../modules/Attendees'
import Contact from '../modules/Contact'
import Hello from '../modules/Hello'
import ImageBreak from '../modules/ImageBreak'
import Location from '../modules/Location'
import Schedule from '../modules/Schedule'
import Speakers from '../modules/Speakers'

type Props = {
  attendees: string,
  contact: string,
  hello: string,
  location: string,
  scheduleCards: Array<string>,
  scheduleSource: string,
  speakersCards: Array<string>,
  speakersSource: string,
}

export default withRouteData((props: Props) => (
  <Fragment>
    <Hello
      source={props.hello}
    />
    <Schedule
      cards={props.scheduleCards}
      currentIndex={0}
      source={props.scheduleSource}
    />
    <Attendees
      source={props.attendees}
    />
    <ImageBreak
      alt="people"
      css={{ objectPosition: '50% 0' }}
      source="/attendees-and-location.jpg"
    />
    <Location
      source={props.location}
    />
    <Speakers
      cards={props.speakersCards}
      source={props.speakersSource}
    />
    <Contact
      source={props.contact}
    />
  </Fragment>
))
