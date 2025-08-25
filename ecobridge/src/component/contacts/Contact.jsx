import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Contact() {
        const [contact, setContact] = useState({
            firstName: '',
            lastName: '',
            email: '',
        });


    return (


        <div>
            <section id="contacts-1" className="pb-50 inner-page-hero contacts-section division">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title text-center mb-80">
                                {/* Title */}
                                <h2 className="s-52 w-700">Questions? Let's Talk</h2>
                                {/* Text */}
                                <p className="p-lg">Want to learn more about EcoBridge, get a quote, or speak with an expert?
                                    Let us know what you are looking for and we’ll get back to you right away
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* CONTACT FORM */}
                    <div className="row justify-content-center">
                        <div className="col-md-11 col-lg-10 col-xl-8">
                            <div className="form-holder">
                                <form name="contactform" className="row contact-form">
                                    {/* Form Select */}
                                    <div className="col-md-12 input-subject">
                                        <p className="p-lg">This question is about: </p>
                                        <span>Choose a topic, so we know who to send your request to: </span>
                                        <select className="form-select subject" aria-label="Default select example">
                                            <option>This question is about...</option>
                                            <option>Registering/Authorising</option>
                                            <option>Using Application</option>
                                            <option>Troubleshooting</option>
                                            <option>Backup/Restore</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    {/* Contact Form Input */}


                                    <div className="col-md-12">
                                        <p className="p-lg">Your Name: </p>
                                        <span>Please enter your real name: </span>
                                        <input type="text"  className="form-control email" placeholder="Your Name*"
                                                value={contact.firstName}
                                                   onChange={e =>{
                                                       setContact({
                                                           ...contact,
                                                           firstname: e.target.value
                                                       });
                                                   }}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <p className="p-lg">Your Email Address: </p>
                                        <span>Please carefully check your email address for accuracy</span>
                                        <input type="text" name="email" className="form-control email" placeholder="Email Address*" />
                                    </div>
                                    <div className="col-md-12">
                                        <p className="p-lg">Explain your question in details: </p>
                                        <span>Your OS version, EcoBridge version &amp; build, steps you did. Be VERY precise!</span>
                                        <textarea className="form-control message" name="message" rows={6} placeholder="I have a problem with..." />
                                    </div>
                                    {/* Contact Form Button */}
                                    <div className="col-md-12 mt-15 form-btn text-right">
                                        <button type="submit" className="btn btn--theme hover--theme submit">Submit Request</button>
                                    </div>
                                    <div className="contact-form-notice">
                                        <p className="p-sm">We are committed to your privacy. EcoBridge uses the information you
                                            provide us to contact you about our relevant content, products, and services.
                                            You may unsubscribe from these communications at any time. For more information,
                                            check out our <Link href="/privacy">Privacy Policy</Link>.
                                        </p>
                                    </div>
                                    {/* Contact Form Message */}
                                    <div className="col-lg-12 contact-form-msg">
                                        <span className="loading" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>	   {/* END CONTACT FORM */}
                </div>	   {/* End container */}
            </section>	{/* END CONTACTS-1 */}

            <hr className="divider" />


        </div>




        // <div className="min-h-screen bg-blue-50">
        //
        //
        //         <h1>Send us a message</h1>
        //         <div className="contact-container">
        //
        //
        //             <form name="contactform">
        //                 <div className="contact-input">
        //                     <label htmlFor="fname">First Name</label>
        //                     <input type="text" id="fname" name="firstname" placeholder="Your name*.." />
        //                 </div>
        //
        //                 <div className="contact-input">
        //                     <label htmlFor="lname">Last Name</label>
        //                     <input type="text" id="lname" name="lastname" placeholder="Your last name*.." />
        //                 </div>
        //
        //                 <div className="contact-input">
        //                     <label htmlFor="email">Email Address</label>
        //                     <input type="text" id="email" name="email" placeholder="Email Address*.."/>
        //                         <label htmlFor="confirm-email">Confirm Email Address</label>
        //                         <input type="text" id="confirm-email" name="confirmEmail"
        //                                placeholder="Re-type your email Address*.." />
        //                 </div>
        //
        //                 <div className="contact-input">
        //                     <label htmlFor="country">Country</label>
        //                     <select id="country" name="country">
        //                         <option value="usa">USA</option>
        //                     </select>
        //                 </div>
        //
        //                 <div className="contact-input">
        //                     <label htmlFor="subject">Explain your question in details:</label>
        //                     <textarea id="subject" name="subject" placeholder="Write something.."
        //                               style="height:200px"></textarea>
        //                 </div>
        //
        //                 <div className="button">
        //                     <button type="submit" value="Submit">Submit</button>
        //                 </div>
        //
        //
        //             </form>
        //
        //         </div>
        //
        // </div>
    );
}