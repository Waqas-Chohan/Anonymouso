import karanaujla from './karanaujla.jpg';


function ImageWithProps({ src, alt, width, height }) {
  return (
    <img 
      src={karanaujla} 
      alt={alt || "Default description"} 
      width={width} 
      height={height}
    />
  );
}
<p>not found</p>
export default ImageWithProps; 

