import { useState } from 'react';

const Accordion = () => {
    const [openQuestion, setOpenQuestion] = useState(0);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    const faqData = [
        {
            question: 'Benefits',
            answer: [
                'Support healthy aging',
                'Boost collagen production',
                'Support a healthy immune system',
                'PRO-TIP: For enhanced immunity take with Cymbiotika’s D3+ K2 + CoQ10.'
            ]
        },
        {
            question: 'Ingredients',
            answer: [
                'Water (Aqua)',
                'Glycerin',
                'Aloe Barbadensis Leaf Extract',
                'Cetearyl Alcohol',
                'Cocos Nucifera (Coconut) Oil'
            ]
        },
        {
            question: 'How to Use',
            answer: [
                'Apply a small amount to clean, dry skin.',
                'Massage gently in a circular motion until fully absorbed.',
                'Use twice daily, morning and night, for best results.'
            ]
        },
        {
            question: 'Cautions',
            answer: [
                'For external use only.',
                'Avoid contact with eyes.',
                'Keep out of reach of children.',
                'If irritation occurs, discontinue use and consult a healthcare professional.'
            ]
        }
    ];

    return (
        <div className='px-4 py-8 xl:py-10 xl:px-20 border-t border-b mb-10'>
            <div className="flex flex-col-reverse lg:flex-row items-center">
                <div className="w-full xl:w-[60%]">
                    <div className="space-y-1">
                        {faqData.map((item, index) => (
                            <div key={index} className="p-2 md:p-2 lg:p-4 border-b">
                                <button
                                    className="flex items-center justify-between text-left w-full"
                                    onClick={() => toggleQuestion(index)}
                                >
                                    <h1 className="font-semibold text-xl md:text-2xl">{item.question}</h1>
                                    <span className="rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`w-6 h-6 transform transition-transform ${openQuestion === index ? 'rotate-180' : 'rotate-0'}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </span>
                                </button>
                                {openQuestion === index && (
                                    <ul className="mt-3 lg:mt-3 text-xs md:text-base list-inside">
                                        {item.answer.map((answerItem, answerIndex) => (
                                            <li key={answerIndex}>{answerItem}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="xl:w-[40%] xl:ml-20">
                    <img src="/Accordion.png" alt="Accordion" />
                </div>
            </div>
        </div>
    );
};

export default Accordion;
