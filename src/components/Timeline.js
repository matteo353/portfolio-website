import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import { HiAcademicCap, HiComputerDesktop } from "react-icons/hi2";
import "./Styling/Timeline.css"
import { timelineElements } from './Data';



function Timeline () {

    let workIconStyles = {color: 'white', background: "#6aa8cf"}
    let schoolIconStyles = {color: 'white', background: "#841619"}

    return (
        <div>
            <VerticalTimeline>
                {
                    timelineElements.map(element => {
                        let isWorkIcon = element.icon === "work"
                        return (
                            <VerticalTimelineElement
                                key={element.key}
                                date={element.date}
                                dateClassName="date" //css styling
                                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                icon={isWorkIcon ? <HiComputerDesktop /> : <HiAcademicCap />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {element.title}
                                </h3>
                                <h5 className='vertical-timeline-element-subtitle'>
                                    {element.location}
                                </h5>
                                <p id='description'>{element.description}</p>
                            </VerticalTimelineElement>
                        )
                    })
                }

            </VerticalTimeline>
        </div>
    );
}

export default Timeline