import Welcome from '../component/welcome';
import Mylist from '../component/mylist';
import ImageWithProps from '../component/imagewithprops';

const Home = () => {
  return (
    <div className="App">
      <Welcome />
      <Mylist />
      <h1>Hello React</h1>
      <p>This is my first react app</p>
      <ImageWithProps width={1200} height={675} />
    </div>
  );
};

export default Home;