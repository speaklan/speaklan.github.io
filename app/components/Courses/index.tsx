"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid'

// CAROUSEL DATA

interface DataType {
    heading: string;
    heading2: string;
    imgSrc: string;
    name: string;
    students: number;
    classes: number;
    price: number;
    rating: number;
}

const postData: DataType[] = [
    {
        heading: 'Russian language for begginers',
        heading2: 'Russian',
        name: "Ideal for those just starting their journey in Russian. Covers basic vocabulary, essential grammar, and foundational conversation skills.",
        imgSrc: '/assets/courses/two.jpeg',
        students: 10,
        classes: 12,
        price: 20,
        rating: 4.9,
    },
    {
        heading: 'Conversational Russian',
        heading2: 'Ukrainian',
        name: "Focuses on practical, everyday conversation. Learn to communicate naturally and confidently in various social and professional contexts.",
        imgSrc: '/assets/courses/three.jpeg',
        students: 130,
        classes: 12,
        price: 20,
        rating: 5,
    },
    {
        heading: 'Russian for Travelers',
        heading2: 'Russian/Culture',
        name: 'Perfect for those planning a trip to a Russian-speaking country. Learn essential phrases, directions, and cultural tips to navigate with ease.',
        imgSrc: '/assets/courses/one.jpeg',
        students: 120,
        classes: 12,
        price: 20,
        rating: 4.8,
    },
    {
        heading: 'Beginner Ukrainian Course',
        heading2: 'Webflow this Week!',
        name: 'Perfect for newcomers to Ukrainian. Covers fundamental vocabulary, essential grammar, and basic conversation skills to get you started.',
        imgSrc: '/assets/courses/four.jpg',
        students: 150,
        classes: 12,
        price: 20,
        rating: 5,
    },
    {
        heading: 'Conversational Ukrainian',
        heading2: 'Webflow this Week!',
        name: 'Focuses on practical, everyday communication. Learn to engage in natural conversations in various social and professional settings.',
        imgSrc: '/assets/courses/six.jpg',
        students: 150,
        classes: 12,
        price: 20,
        rating: 5,
    },
    {
        heading: 'Speaking club',
        heading2: 'Webflow this Week!',
        name: 'Practice your Russian or Ukrainian in small, friendly groups!',
        imgSrc: '/assets/courses/five.jpg',
        students: 150,
        classes: 12,
        price: 10,
        rating: 5,
    },

]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        };


        return (
            <div id="courses">
                <div className='mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 '>

                    <div className="sm:flex justify-between items-center">
                        <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-0">Popular courses.</h3>
                        {/* <Link href={'/'} className="text-Blueviolet text-lg font-medium space-links">Explore courses&nbsp;&gt;&nbsp;</Link> */}
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-20 shadow-courses rounded-2xl'>
                                    <div className="relative rounded-3xl">
                                        <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="m-auto clipPath" />
                                        <div className="absolute right-5 -bottom-2 bg-ultramarine rounded-full p-6">
                                            <h3 className="text-white uppercase text-center text-sm font-medium">best <br /> seller</h3>
                                        </div>
                                    </div>

                                    <div className="px-3">
                                        <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
                                        {/* <h4 className='text-sm pt-1 text-black'>{items.heading2}</h4> */}

                                        <div>
                                            <h3 className='text-base font-normal pt-6 opacity-75'>{items.name}</h3>
                                        </div>

                                        <div className="flex justify-between items-center py-6">
                                            <div className="flex gap-4">
                                                <h3 className="text-red text-22xl font-medium">{items.rating}</h3>
                                                <div className="flex">
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-medium">${items.price}</h3>
                                            </div>
                                        </div>

                                        <hr style={{ color: "#C4C4C4" }} />

                                        {/* <div className="flex justify-between pt-6">
                                            <div className="flex gap-4">
                                                <Image src={'/assets/courses/book-open.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                <h3 className="text-base font-medium text-black opacity-75">{items.classes} classes</h3>
                                            </div>
                                            <div className="flex gap-4">
                                                <Image src={'/assets/courses/users.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                <h3 className="text-base font-medium text-black opacity-75">{items.students} students</h3>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
