import '@fullcalendar/react/dist/vdom';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import brLocale from '@fullcalendar/core/locales/pt-br';
import styled from 'styled-components';
import { useRef } from 'react';


const CalendarContainer = styled.div`
    width: 100%;
    padding: 15px;
`;

const CalendarToolbar = styled.div`
    margin-bottom: 15px;


    .views-toggle {
        margin-left: auto;
        width: 260px;
        button {
            color: #c1ab60;
            padding: 5px 15px;
            border: 1px solid #c1ab60;

            border-right: none;

            :first-child {
                border-radius: 4px 0 0 4px;
            }

            :last-child {
                border-radius: 0 4px 4px 0;
                border-right: 1px solid #c1ab60;
            }
        }
    }

`;

const CalendarViews = [
    { label: 'Dia', view: 'dayGridDay' },
    { label: 'Semana', view: 'dayGridWeek' },
    { label: 'Mês', view: 'dayGridMonth' },
    {label: 'Lista', view: 'listMonth'}
]

export const Schedule = () => {

    const calendarRef = useRef<FullCalendar>(null);

    const changeView = (view: string) => {
        const api = calendarRef.current!.getApi();
        console.log(api);
        console.log(api.view);
        
        api.changeView(view);
    }

    

    return (
        <CalendarContainer>

            <CalendarToolbar>


                {calendarRef.current?.getApi().view.type}


                <div className="views-toggle">
                    {
                        CalendarViews.map(v => (
                            <button key={v.view} onClick={() => changeView(v.view)}>{v.label}</button>
                        ))
                    }
                </div>


            </CalendarToolbar>

            <FullCalendar
                ref={calendarRef}
                locale={brLocale}
                height={'100%'}
                plugins={[dayGridPlugin, listPlugin]}
                initialView="dayGridMonth"
                weekends={false}
                events={[
                    { title: 'event 1', date: '2022-02-29' },
                    { title: 'event 2', date: '2022-02-29' }
                ]}
            />
        </CalendarContainer>
    )
};

export default Schedule;
