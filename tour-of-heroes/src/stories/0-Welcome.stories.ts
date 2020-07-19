import { Welcome } from '@storybook/angular/demo';
import {AppComponent} from '../app/app.component';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => ({
  component: Welcome,
  props: {},
});


ToStorybook.story = {
  name: 'to Storybook',
};
