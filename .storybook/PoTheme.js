import { create } from '@storybook/theming';

export default create({

    colorPrimary: '#282f53',
    colorSecondary: '#ec6d25',
  
    // UI
    appBg: '#282f53',
    appContentBg: '#f1f5f9',
    appBorderColor: '#94a3b8',
    appBorderRadius: 4,
  
    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',
  
    // Text colors
    textColor: '#f1f5f9',
    textInverseColor: 'rgba(255,255,255,0.9)',
  
    // Toolbar default and active colors
    barTextColor: '#f1f5f9',
    barSelectedColor: '#ec6d25',
    barBg: '#282f53',
  
    // Form colors
    inputBg: 'white',
    inputBorder: 'gray',
    inputTextColor: 'black',
    inputBorderRadius: 4,

    base: 'light',
    brandTitle: 'Pension UI',
    brandUrl: 'https://pension.gov.mv',
    brandImage: '../public/pension-ui-logo.png',
    brandTarget: '_self',
});