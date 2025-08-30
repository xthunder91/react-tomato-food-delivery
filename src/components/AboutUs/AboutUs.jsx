import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us w-full px-6 md:px-12 py-12 fadeIn-animation">
        <div className="cointainer max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
                <h2 className="title text-4xl mb-6 font-bold font-mono">About Us</h2>
                <p className="text-lg mb-10">Welcome to <span className="text-red-500 font-medium font-mono">Tomato</span>. We're passionate about bringing delicious meals 
                         made with the freshest ingredients right to your plate. Whether you're craving something light, hearty, or exotic -
                         we've got something you'll love.</p>
                <h3 className="text-2xl font-semibold mb-3 font-mono">Our Mission</h3>
                <p className="text-lg">To satisfy your cravings with mouth-watering dishes and a seamless online experience. Every order is prepared with care, quality and flavour.</p>
            </div>
            <div className='tagbox px-5'>
                <img src="chef.jpg" alt="" className="tag  w-full object-cover rounded-[50px] h-[550px]"/>
            </div>
        </div>
    </section>
  )
}

export default AboutUs;