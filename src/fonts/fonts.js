import { createGlobalStyle } from 'styled-components';
import Gecorgia from './georgia.ttf'
import Arial from './arialmt.ttf'



const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Gecorgia';
  src: url(${Gecorgia}) format('ttf'),
}
@font-face {
    font-family: 'Arial';
    src: url(${Arial}) format('ttf'),
  }

`;
export default FontStyles;