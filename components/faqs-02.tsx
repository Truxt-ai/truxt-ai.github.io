import Accordion from '@/components/accordion';

export default function Faqs() {
    const faqs01 = [
        {
            question: 'How does Truxt.AI handle customer queries?',
            answer: 'Truxt.AI uses advanced generative AI models to provide fast and accurate responses to customer queries by analyzing real-time data and facts.'
        },
        {
            question: 'Can I integrate Truxt.AI with my existing system?',
            answer: 'Yes, Truxt.AI is designed to integrate seamlessly with existing customer support platforms and systems using API connections.'
        },
        {
            question: 'What types of data does Truxt.AI process?',
            answer: 'Truxt.AI can process structured and unstructured data from various sources including documents, websites, and databases to provide insightful answers.'
        },
        {
            question: 'Is Truxt.AI scalable for large organizations?',
            answer: 'Absolutely! Truxt.AI is built to scale with your business, handling everything from small queries to large-scale enterprise solutions.'
        },
        {
            question: 'How secure is my data on Truxt.AI?',
            answer: 'Truxt.AI prioritizes data security with end-to-end encryption, ensuring that all customer data is protected and compliant with global data privacy regulations.'
        }
    ];

    const faqs02 = [
        {
            question: 'What plans does Truxt.AI offer?',
            answer: 'Truxt.AI offers flexible plans suited for startups, mid-sized companies, and enterprises, with pricing based on the level of usage and support required.'
        },
        {
            question: 'Can I cancel my Truxt.AI subscription?',
            answer: "Yes, you can cancel your subscription at any time. However, you'll still be able to use the service for the remainder of the term you signed up for."
        },
        {
            question: 'What is the process for upgrading my plan?',
            answer: 'Upgrading your plan is Truxt. You can do it directly from your dashboard, and the changes will reflect in your next billing cycle.'
        },
        {
            question: 'Does Truxt.AI offer a free trial?',
            answer: 'Yes, Truxt.AI offers a free trial so you can experience the platform’s capabilities before committing to a paid plan.'
        },
        {
            question: 'How do I reach Truxt.AI customer support?',
            answer: 'Our support team is available 24/7 via email and live chat to assist you with any queries or technical issues.'
        }
    ];

    const faqs03 = [
        {
            question: 'How do I reset my Truxt.AI account password?',
            answer: "You can easily reset your password by clicking on the 'Forgot Password' link on the login page, and you'll receive an email with instructions."
        },
        {
            question: 'How do I update my account details?',
            answer: "You can update your account details, including your email address, by accessing the 'Account Settings' section in your Truxt.AI dashboard."
        },
        {
            question: 'How do I delete my Truxt.AI account?',
            answer: 'If you wish to delete your account, please contact our support team, and they will guide you through the process.'
        },
        {
            question: 'How can I manage my notification preferences?',
            answer: 'Notification settings can be adjusted in your account settings, where you can choose how and when you receive updates.'
        },
        {
            question: 'Can multiple users collaborate on Truxt.AI?',
            answer: 'Yes, you can invite team members to collaborate on projects within Truxt.AI. Access controls allow you to manage user roles and permissions.'
        }
    ];

    return (
        <section>
            <div className='mx-auto max-w-6xl px-4 sm:px-6'>
                <div className='pb-12 md:pb-20'>
                    <div className='mx-auto max-w-3xl space-y-12'>
                        {/* Truxt.AI Overview */}
                        <div>
                            <h2 className='mb-5 text-xl font-bold'>Truxt.AI Overview</h2>
                            <div className='space-y-2'>
                                {faqs01.map((faq, index) => (
                                    <Accordion key={index} title={faq.question} id={`faqs-${index}`}>
                                        {faq.answer}
                                    </Accordion>
                                ))}
                            </div>
                        </div>
                        {/* Plans & Pricing */}
                        <div>
                            <h2 className='mb-5 text-xl font-bold'>Plans & Pricing</h2>
                            <div className='space-y-2'>
                                {faqs02.map((faq, index) => (
                                    <Accordion key={index} title={faq.question} id={`faqs-${index}`}>
                                        {faq.answer}
                                    </Accordion>
                                ))}
                            </div>
                        </div>
                        {/* Account & Settings */}
                        <div>
                            <h2 className='mb-5 text-xl font-bold'>Account & Settings</h2>
                            <div className='space-y-2'>
                                {faqs03.map((faq, index) => (
                                    <Accordion key={index} title={faq.question} id={`faqs-${index}`}>
                                        {faq.answer}
                                    </Accordion>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
