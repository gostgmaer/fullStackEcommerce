

import React from 'react';
import Image from 'next/image';
import Layout from '@/components/global/layout/Layout';

import PageHeading from '@/components/global/layout/heading/pageHeading';
import { contactData } from '@/utils/data';

import Contact from '@/components/global/common/forms/Contact';

export const metadata = {
    title: "Conatact",
    description: "Created by kishor sarkar",
  };

const ContactUs = () => {





    return (
        <Layout >
            <PageHeading title="contact-page-title" />

            <div className="bg-white">
                <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
                    {/* contact promo */}
                    <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8 font-serif">
                        {contactData.map((data) => (
                            <div key={data.id} className="border p-10 rounded-lg text-center">
                                <span className="flex justify-center text-4xl text-emerald-500 mb-4">
                                    <data.icon />
                                </span>
                                <h5 className="text-xl mb-2 font-bold">{data.title}</h5>
                                <p className="mb-0 text-base opacity-90 leading-7">
                                    <a
                                        href={`mailto:${data.contact}`}
                                        className="text-emerald-500"
                                    >
                                        {data.contact}
                                    </a>{' '}
                                    {data.info}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* contact form */}
                    <div className="px-0 pt-24 mx-auto items-center flex flex-col md:flex-row w-full justify-between">
                        <div className="hidden md:w-full lg:w-5/12 lg:flex flex-col h-full">
                            <Image
                                width={874}
                                height={874}
                                src="/contact-us.png"
                                alt="logo"
                                className="block w-auto"
                            />
                        </div>
                        <div className="px-0 pb-2 lg:w-5/12 flex flex-col md:flex-row">

                          <Contact/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ContactUs;

