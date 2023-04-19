import { create } from '@storybook/theming';
import logo from './Polymer_logo.png';

export default create({
    base: 'light',
    colorPrimary: '#CC0001',
    colorSecondary: '#0C8188',

    // UI
    appBg: '#F5F4F6',
    // appContentBg: '#F5F4F6',
    appContentBg: 'white',
    // appBorderColor: 'grey',
    //   appBorderRadius: 8,

    // Typography
    fontBase: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    fontCode: '"Source Code Pro", "Segoe UI Mono", "Courier New", "Monaco", monospace',

    // Text colors
    textColor: '#20283A',
    textInverseColor: '#FFFFFF',

    // Toolbar default and active colors
      // barTextColor: '#EEEFF3',
      // barSelectedColor: 'white',
      // barBg: '#1A88FF',
      barTextColor: '#6A6A75',
      barSelectedColor: '#0D47A1',
      barBg: '#E3F2FD',

    // Form colors
    //   inputBg: 'red',
    //   inputBorder: 'silver',
    //   inputTextColor: 'black',
    //   inputBorderRadius: 4,
    
    brandTitle: 'React-Bootstrap-Common Script',
    brandImage: logo,
});