import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-dark'>Explore Our Recent Blogs</h1>
            <div className="blog-container">
                <h3>Difference between Authentication and Authorization -</h3>
                <p>Authentication and Authorization are both used to maintain the safety of the resources of an automated system. Despite the similar-sounding terms, authentication and authorization are very different process with respect to each other. Authentication validates if the users are whom they claim to be. On the other hand, Authorization gives permission to access the resourses of the system. Authentication identifies the user, but authorization identifies the permission of accessibility of that user. Authentication is done before authorization. Authorization works through passwords and credentials, but authentication works through settings maintained by security teams.</p>
            </div>
            <div className="blog-container">
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>I using Firebase to host my website and to authenticate my website.</p>
                <p>Fireba se is a traditional Social Authentication method. It's is widely popular now-a-days. Though there exist some other methods of authentication. Such as -</p>
                <li>
                    Token Authentication
                    <p>In this method, a digitally encoded signature is used to authenticate and authorize the correct user.</p>
                </li>
                <li>
                    Standard Authentication
                    <p>This method helps users authenticate by entering their credentials using a user id and a strong password.</p>
                </li>
                <li>
                    Multi-Factor Authentication (MFA)
                    <p>It is a multi-layered authentication method which examines the identity of users for login or other access permission.</p>
                </li>
                <li>
                    Passwordless Authentication
                    <p>In this method, a magic link, fingerprint, PIN, or a secret token delivered via email or text message is used to authenticate and authorize the correct user.</p>
                </li>

            </div>
            <div className="blog-container">
                <h3>What other services does firebase provide other than authentication?</h3>
                <p>
                    Cloud Messaging
                    Firebase can implement notifications, and it is fast, reliable, and scalable.

                    Dynamic Links
                    Firebase can generate deep links which redirect user to your applications.

                    Predictions
                    Firebase can help in making predictions about your application decisions with the help of google's AI.

                    Google Analytics
                    Firebase can help in growing and managing your application. It can become helpful in tracking user demographics, behavior, purchasing patterns, revenue reports.
                </p>
            </div>
        </div>
    );
};

export default Blogs;