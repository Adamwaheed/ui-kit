export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: '',
      order: [
        'Introduction',
        'UI Colors',
        'Layout',
        'Content',
        'Form',
        'Components',
        'Shell'
      ], 
      locales: '', 
    },
  },
}

import "../dist/build.css";
import "./story.css";
import { withSource } from './withSource'

export const decorators = [
  withSource
]