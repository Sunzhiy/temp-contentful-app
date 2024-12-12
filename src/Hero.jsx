import heroImg from './assets/hero.svg';
const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, soluta eum? Exercitationem beatae consectetur eos culpa veritatis optio at dicta ut sapiente nostrum fugiat, vel in tenetur est aspernatur ullam.
                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="woman and the browser" className='img' />
            </div>
        </div>
    </section>
  )
}
export default Hero