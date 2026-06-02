import React from 'react'
import ExpandAbout from './ExpandAbout';

function About() {
    return (
        <>
        <div id="about" className="py-20 px-6 bg-gray-100">
            <div className="max-w-3xl mx-auto ">
                <h1 className="text-3xl font-bold font-serif text-center mb-6">
                About Us
                </h1>

                <p className="text-gray-700 font-serif text-center leading-relaxed mb-10">
                Pop & Drop Vending provides modern, fully serviced snack and beverage
                solutions for workplaces and communities. We handle installation,
                restocking, and maintenance so businesses can offer convenient vending
                with zero hassle.
                </p>

                <section className="space-y-4">
                <ExpandAbout title="✅ Locally owned">A local business dedicated to building lasting relationships and delivering exceptional service.</ExpandAbout>
                <ExpandAbout title='✅ Free installation'>You don't have to worry about a thing—we'll handle every aspect of your machine placement and management from start to finish.</ExpandAbout>
                <ExpandAbout title="✅ Fair Prices. No Surprises."> We understand that prices have risen significantly in recent years, which is why we're committed to offering fair, affordable pricing that feels like the good old days.</ExpandAbout>

                </section>
            </div>
        </div>

        </>
    )
}

export default About;