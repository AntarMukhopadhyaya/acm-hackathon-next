
'use client';
import Image from 'next/image';
import { Chrono } from 'react-chrono';

const items = [
  {


    media: {
      name: 'dunkirk beach',
      source: {
        url: '/images/step_1.png',
      },
      type: 'IMAGE',
    },

    cardDetailedText:
      'Teams should be formed as per perspective guidelines. Eligibility of the members for HACKSPIRE 2024 should follow eligibility guidelines..',
  },
  {
    title: 'February 2022',
    cardTitle: 'Event 2',
    cardSubtitle: 'Event 2 Subtitle',
    cardDetailedText:
      'IDEA template has to be prepared following the given IDEA template PPT in the HACKSPIRE portal.',
  },
  {
    title: 'March 2022',
    cardTitle: 'Event 3',
    cardSubtitle: 'Event 3 Subtitle',
    cardDetailedText: 'A PDF has to be created of this PPT..',
  },
  {
    title: 'March 2022',
    cardTitle: 'Event 4',
    cardSubtitle: 'Event 4 Subtitle',
    cardDetailedText:
      'A consent letter has to be obtained in the given format from the Head of the institute and it scould be scanned to PDF',
  },
  {
    title: 'March 2022',
    cardTitle: 'Event 3',
    cardSubtitle: 'Event 3 Subtitle',
    cardDetailedText: 'A PDF has to be created of this PPT..',
  },
  {
    title: 'March 2022',
    cardTitle: 'Event 3',
    cardSubtitle: 'Event 3 Subtitle',
    cardDetailedText: 'A PDF has to be created of this PPT..',
  },
];
const Timeline = () => {
  return (
    <section className='w-full h-90'>
      <Image src="/images/process_flow.png"   alt="Process Flow"className="mx-auto" width={350} height={100} />
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        cardWidth={450}
        

        disableToolbar
        scrollable
        theme={{
          cardBgColor: '#2f68ff',
          cardDetailsColor: 'white',
          iconBackgroundColor: 'black',
          cardMediaBgColor: '#2f68ff',
        }}
      >
        <div className="chrono-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-20 h-20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
        </div>
      </Chrono>
    </section>
  );
};

export default Timeline;
