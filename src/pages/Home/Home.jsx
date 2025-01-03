import Hero from '/src/Component/Hero/Hero.jsx'
import Join from '/src/Component/Join/Join'
import Member from '/src/Component/memberShip/Member';
import Staff from '/src/Component/Staff/Staff';
import About from "/src/Component/About/About"
const Home = () => {
  return (
    <div>
      <Hero/>
      <Join/>
      <Member/>
      <About/>
      <Staff />
    </div>
  )
}

export default Home;
