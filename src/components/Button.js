import '../assets/styles/utils.css';

const Button = ({ data: { buttonName, buttonType, func=undefined } }) => {
  switch (buttonType) {
    case 'default':
      return (
        <button className="btnDefaultOuter" onClick={func}><span className="btnDefault">{ buttonName }</span></button>
      )
    case 'primary':
      return (
        <button className="btnPrimaryOuter" onClick={func}><span className="btnPrimary">{ buttonName }</span></button>
      )
    case 'contrast':
      return (
        <button className="btnContrastOuter" onClick={func}><span className="btnContrast">{ buttonName }</span></button>
      )
    case 'icon':
      return (
        <button className="btnIcon">{ buttonName }</button>
      )
    default:
      return (
        <button className="btnDefaultOuter" onClick={func}><span className="btnDefault">{ buttonName }</span></button>
      )
  }
}
 
export default Button;