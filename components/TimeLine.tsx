import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import useMedia from 'use-media';

function TimeLine() {

    const mini = useMedia({ minWidth: '768px' })

    return (
        <div className="mt-16 bg-gray-200 mx-auto py-16">
            <div className="text-center pb-16">
                <span className="text-gray-700 font-extrabold text-5xl tracking-wide">Zobacz jak działamy</span>
                <br />
                <span className="text-indigo-500 text-xl font-bold tracking-widest">Takie kroki zazwyczaj podejmujemy</span>
            </div>
            <div className="mx-auto w-10/12 md:w-3/4 mt-4">
                <VerticalTimeline
                    animate={mini ? true : false}
                >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: 'rgb(159, 122, 234)', color: '#fff' }}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        }
                    >
                        <h3 className="text-gray-700 text-2xl font-bold">Skontaktuj się z Nami</h3>
                        <h6 className="text-indigo-500 text-sm">Telefonicznie, mailowo lub osobiście</h6>
                        <p className="text-gray-500 text-md xl:text-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nobis molestias cum adipisci soluta accusamus.
                            </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: 'rgb(159, 122, 234)', color: '#fff' }}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        }
                    >
                        <h3 className="text-gray-700 text-2xl font-bold">Wykonamy rozeznanie i rekomendacje</h3>
                        <h6 className="text-indigo-500 text-sm">U Ciebie na miejscu lub telefonicznie</h6>
                        <p className="text-gray-500 text-md xl:text-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nobis molestias cum adipisci soluta accusamus.
                            </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: 'rgb(159, 122, 234)', color: '#fff' }}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        }
                    >
                        <h3 className="text-gray-700 text-2xl font-bold">Wykonamy potrzebne pomiary</h3>
                        <h6 className="text-indigo-500 text-sm">Pozwoli Nam to oszacować koszta projektu</h6>
                        <p className="text-gray-500 text-md xl:text-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nobis molestias cum adipisci soluta accusamus.
                            </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: '#4299E1', color: '#fff' }}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        }
                    >
                        <h3 className="text-gray-700 text-2xl font-bold">Skonsultujemy z Wami zakres prac</h3>
                        <h6 className="text-indigo-500 text-sm">Doceniamy ciągły wkład naszych klientów w projekty</h6>
                        <p className="text-gray-500 text-md xl:text-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nobis molestias cum adipisci soluta accusamus.
                            </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: '#4299E1', color: '#fff' }}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }
                    >
                        <h3 className="text-gray-700 text-2xl font-bold">Odpowiemy na Państwa pytania</h3>
                        <h6 className="text-indigo-500 text-sm">Poprawna komunikacja gwarantuje oczekiwane rezultaty</h6>
                        <p className="text-gray-500 text-md xl:text-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nobis molestias cum adipisci soluta accusamus.
                            </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: '#4299E1', color: '#fff' }}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }
                    >
                        <h3 className="text-gray-700 text-2xl font-bold">Uzgodniamy terminy i harmonogram</h3>
                        <h6 className="text-indigo-500 text-sm">Cenimy sobie zorganizowanie pracy i chlubimy się Naszą terminowością</h6>
                        <p className="text-gray-500 text-md xl:text-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nobis molestias cum adipisci soluta accusamus.
                            </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: '#48BB78', color: '#fff' }}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        }
                    >
                        <h3 className="text-gray-700 text-2xl font-bold">Wykonujemy zlecony projekt</h3>
                        <h6 className="text-indigo-500 text-sm">W tym etapie realizujemy zlecony projekt, to co lubimy najbardziej</h6>
                        <p className="text-gray-500 text-md xl:text-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nobis molestias cum adipisci soluta accusamus.
                            </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: '#48BB78', color: '#fff' }}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                        }
                    >
                        <h3 className="text-gray-700 text-2xl font-bold">Odbierz wykonanie projektu</h3>
                        <h6 className="text-indigo-500 text-sm">Sprawdzenie wykonania instalacji i zgłaszanie poprawek</h6>
                        <p className="text-gray-500 text-md xl:text-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nobis molestias cum adipisci soluta accusamus.
                            </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconStyle={{ background: '#48BB78', color: '#fff' }}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                        }
                    >
                        <h3 className="text-gray-700 text-2xl font-bold">Wystaw Nam opinię</h3>
                        <h6 className="text-indigo-500 text-sm">Pomóż innym oceniając wykonane przez Nas usługi</h6>
                        <p className="text-gray-500 text-md xl:text-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nobis molestias cum adipisci soluta accusamus.
                            </p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </div>
    )
}

export default TimeLine
