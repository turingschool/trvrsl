// @flow
import React, { Fragment } from 'react'
import { withRouteData } from 'react-static'
import Attendees from '../modules/Attendees'
import Contact from '../modules/Contact'
import Hello from '../modules/Hello'
import Location from '../modules/Location'
import Schedule from '../modules/Schedule'
import Speakers from '../modules/Speakers'

type Props = {
  attendees: string,
  contact: string,
  hello: string,
  location: string,
  schedule: string,
  speakersCards: Array<string>,
  speakersSource: string,
}

export default withRouteData((props: Props) => (
  <Fragment>
    <Hello source={props.hello} />
    <Schedule source={props.schedule} />
    <Attendees source={props.attendees} />
    <Location source={props.location} />
    <Speakers source={props.speakersSource} cards={props.speakersCards} />
    <Contact source={props.contact} />
  </Fragment>
))
