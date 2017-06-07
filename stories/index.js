import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import Counter from '../src/routes/Counter/components/Counter'
import HomeView from '../src/routes/Home/components/HomeView'

storiesOf('Counter', module)
    .add('default', () => <Counter/>);

storiesOf('HomeView', module)
    .add('default', () => <HomeView/>);