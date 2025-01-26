import logo from '/src/assets/Images/shatayu-logo.png'

const About = () => {
    return (
        <div className="py-10">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12 flex justify-center">
                        <img className='rounded-full w-3/4'
                            src={logo}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12 text-white">
                        <h2 className="text-2xl font-bold md:text-4xl">
                        Our Story: Nourishing Health Through Organic Foods
                        </h2>
                        <p className="mt-6">
                        At Shatayu, our journey began with a simple but powerful belief: that food should nourish, heal, and fuel our bodies naturally. We are an organic foods and nutrition company dedicated to bringing you high-quality products that support your health and well-being, from the inside out.
                        <br></br>
                        We’re passionate about offering a wide range of organic foods, supplements, and wellness essentials, all crafted with the highest standards of sustainability and purity in mind. Our ingredients are carefully sourced from trusted organic farms, ensuring that everything we offer is free from harmful chemicals and full of the nutrients your body craves.
                        </p>
                        <p className="mt-4">
                        Our commitment goes beyond just providing nutritious products; it’s about fostering a community that embraces wellness, sustainability, and conscious living. We believe that healthy choices should be accessible, enjoyable, and part of your everyday routine. Whether you’re an athlete looking to optimize performance, a parent striving to feed your family with the best, or someone simply looking to improve overall well-being, we’re here to support you on your journey.
                        <br />
                        At Shatayu, we don’t just sell food—we sell nourishment, vitality, and a brighter, healthier future. Join us in making choices that matter, for both your health and the planet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
