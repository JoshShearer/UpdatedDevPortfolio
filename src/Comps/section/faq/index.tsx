  import React, { useState, JSX } from 'react';
  import { Comps_modal } from '#src/Comps/modal';

  const defaultProps = {
    idKey: 'default',
  } as {
    idKey?: string;
    children?: JSX.Element;
  };

  const faqs = [
    {
      question: "Why do developers always wear glasses?",
      answer: "Because they can't C# without them!"
    },
    {
      question: "What is the cloud, really?",
      answer: "It's just someone else's computer, but way cooler because it floats in the digital sky."
    },
    {
      question: "Why does my code always work on my machine?",
      answer: "Because your machine is its happy place—it’s like the code’s comfort zone."
    },
    {
      question: "What’s the fastest way to debug your code?",
      answer: "Print it on a t-shirt. Someone will point out the errors in public."
    },
    {
      question: "Why does my computer freeze at the worst time?",
      answer: "It’s practicing its inner Elsa—sometimes it just needs to let it go."
    },
    {
      question: "Can AI take over the world?",
      answer: "Only if it learns to unplug its own charging cable."
    },
    {
      question: "Why don’t robots ever get tired?",
      answer: "They take power naps every night... literally."
    },
    {
      question: "What’s the best way to learn a new programming language?",
      answer: "Threaten your current language with a breakup—it’ll either get better or you’ll move on."
    },
    {
      question: "Why are USB ports so hard to plug in on the first try?",
      answer: "It’s the Schrödinger’s cat of technology—it’s both right and wrong until you flip it again."
    },
    {
      question: "Why is my Wi-Fi so slow today?",
      answer: "Your router saw a butterfly and got distracted."
    },
    {
      question: "Why do websites ask if I accept cookies?",
      answer: "Because if they just took them without asking, it would be crumb-y."
    },
    {
      question: "What’s the deal with Bitcoin?",
      answer: "It’s digital gold... except you can’t wear it, hold it, or store it under your mattress."
    },
    {
      question: "Why do apps always ask for updates?",
      answer: "They’re like teenagers—they always think they’re out of date."
    },
    {
      question: "What’s the difference between a developer and a magician?",
      answer: "A magician performs tricks; a developer writes them into the software and calls them ‘features.’"
    },
    {
      question: "Why is my phone battery always dead?",
      answer: "Your phone has FOMO—it runs out of charge while keeping up with the latest memes."
    },
    {
      question: "Why do tech support always ask if you tried turning it off and on again?",
      answer: "Because 90% of the time, that’s their Jedi mind trick, and it works!"
    },
    {
      question: "Why do keyboards have so many keys?",
      answer: "To confuse cats and toddlers when they sit on them."
    },
    {
      question: "Why do programmers prefer dark mode?",
      answer: "Because light mode burns their souls—and their retinas."
    },
    {
      question: "Why did the computer go to art school?",
      answer: "It wanted to learn how to draw better icons."
    },
    {
      question: "Why does autocorrect always mess up my texts?",
      answer: "It’s a secret game between your phone and the recipient—they call it ‘lost in translation.’"
    }
  ];


  export const Comps_section_faq = (_props: typeof defaultProps) => {
    const props = { ...defaultProps, ..._props };
  
    const [selectedFaq, setSelectedFaq] = useState<string | null>(null);
  
    return (
      <div className="Comps_layout_sections_landing_faq flex justify-center">
        <section
          id="faqs"
          aria-labelledby="faqs-title"
          className="py-20 sm:py-32 w-full 2xl:max-w-[75%] bg-light-background dark:bg-dark-background"
        >
          <div className="">
            <div className="w-full lg:w-2/3 mx-auto">
              <h2
                id="faqs-title"
                className="text-3xl font-medium tracking-tight text-white text-center"
              >
                Frequently Asked Questions
              </h2>
            </div>
            <ul
              role="list"
              className="mx-auto mt-16 grid justify-items-center max-w-2xl grid-cols-1 gap-12 sm:mt-20 lg:max-w-none md:grid-cols-2 lg:grid-cols-3"
            >
              {faqs.map((faq, faqIndex) => {
                const faqId = `faq-${faqIndex}`;
                return (
                  <li
                    key={faqId}
                    className="max-w-xs w-full text-center px-4"
                  >
                    <h3
                      className="text-lg font-semibold leading-6 text-white cursor-pointer"
                      onClick={() => setSelectedFaq((prev) => (prev === faqId ? null : faqId))}
                    >
                      {faq.question}
                    </h3>
                    {selectedFaq === faqId && (
                      <Comps_modal
                        idKey={faqId} // Unique identifier for the modal
                        modal={{
                          title: faq.question,
                          content: faq.answer,
                          buttons: {
                            primary: {
                              text: "Ok",
                              action: () => setSelectedFaq(null),
                            },
                          },
                        }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    );
  };
  