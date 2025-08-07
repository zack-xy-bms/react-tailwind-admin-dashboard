import type { DateSelectArg, EventClickArg, EventInput } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import { useEffect, useRef, useState } from 'react'
import PageMeta from '@/components/common/PageMeta'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { useModal } from '@/hooks/useModal'

interface CalendarEvent extends EventInput {
  extendedProps: {
    calendar: string
  }
}

const Calendar: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null,
  )
  const [eventTitle, setEventTitle] = useState('')
  const [eventStartDate, setEventStartDate] = useState('')
  const [eventEndDate, setEventEndDate] = useState('')
  const [eventLevel, setEventLevel] = useState('')
  const [events, setEvents] = useState<CalendarEvent[]>([])
  const calendarRef = useRef<FullCalendar>(null)
  const { isOpen, openModal, closeModal } = useModal()

  const calendarsEvents = {
    Danger: 'danger',
    Success: 'success',
    Primary: 'primary',
    Warning: 'warning',
  }

  useEffect(() => {
    // Initialize with some events
    setEvents([
      {
        id: '1',
        title: 'Event Conf.',
        start: new Date().toISOString().split('T')[0],
        extendedProps: { calendar: 'Danger' },
      },
      {
        id: '2',
        title: 'Meeting',
        start: new Date(Date.now() + 86400000).toISOString().split('T')[0],
        extendedProps: { calendar: 'Success' },
      },
      {
        id: '3',
        title: 'Workshop',
        start: new Date(Date.now() + 172800000).toISOString().split('T')[0],
        end: new Date(Date.now() + 259200000).toISOString().split('T')[0],
        extendedProps: { calendar: 'Primary' },
      },
    ])
  }, [])

  const resetModalFields = (): void => {
    setEventTitle('')
    setEventStartDate('')
    setEventEndDate('')
    setEventLevel('')
    setSelectedEvent(null)
  }

  const handleDateSelect = (selectInfo: DateSelectArg): void => {
    resetModalFields()
    setEventStartDate(selectInfo.startStr)
    setEventEndDate(selectInfo.endStr || selectInfo.startStr)
    openModal()
  }

  const handleEventClick = (clickInfo: EventClickArg): void => {
    const event = clickInfo.event
    setSelectedEvent(event as unknown as CalendarEvent)
    setEventTitle(event.title)
    setEventStartDate(event.start?.toISOString().split('T')[0] || '')
    setEventEndDate(event.end?.toISOString().split('T')[0] || '')
    setEventLevel(event.extendedProps.calendar)
    openModal()
  }

  const handleAddOrUpdateEvent = (): void => {
    if (selectedEvent) {
      // Update existing event
      setEvents(prevEvents =>
        prevEvents.map(event =>
          event.id === selectedEvent.id
            ? {
                ...event,
                title: eventTitle,
                start: eventStartDate,
                end: eventEndDate,
                extendedProps: { calendar: eventLevel },
              }
            : event,
        ),
      )
    }
    else {
      // Add new event
      const newEvent: CalendarEvent = {
        id: Date.now().toString(),
        title: eventTitle,
        start: eventStartDate,
        end: eventEndDate,
        allDay: true,
        extendedProps: { calendar: eventLevel },
      }
      setEvents(prevEvents => [...prevEvents, newEvent])
    }
    closeModal()
    resetModalFields()
  }

  function handleOpenChange(open: boolean): void {
    if (open)
      openModal()
    else closeModal()
  }

  return (
    <>
      <PageMeta
        title="React.js Calendar Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Calendar Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="rounded-2xl border  border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="custom-calendar">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next addEventButton',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            events={events}
            selectable={true}
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventContent={renderEventContent}
            customButtons={{
              addEventButton: {
                text: 'Add Event +',
                click: openModal,
              },
            }}
          />
        </div>
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
          <form className="flex flex-col">
            <DialogContent className="sm:max-w-[700px]">
              <DialogHeader>
                <DialogTitle>{selectedEvent ? 'Edit Event' : 'Add Event'}</DialogTitle>
                <DialogDescription>
                  Plan your next big moment: schedule or edit an event to stay on
                  track
                </DialogDescription>
              </DialogHeader>
              <div className="mt-8">
                <div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Event Title
                    </label>
                    <input
                      id="event-title"
                      type="text"
                      value={eventTitle}
                      onChange={e => setEventTitle(e.target.value)}
                      className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block mb-4 text-sm font-medium text-gray-700 dark:text-gray-400">
                    Event Color
                  </label>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                    {Object.entries(calendarsEvents).map(([key, value]) => (
                      <div key={key} className="n-chk">
                        <div
                          className={`form-check form-check-${value} form-check-inline`}
                        >
                          <label
                            className="flex items-center text-sm text-gray-700 form-check-label dark:text-gray-400"
                            htmlFor={`modal${key}`}
                          >
                            <span className="relative">
                              <input
                                className="sr-only form-check-input"
                                type="radio"
                                name="event-level"
                                value={key}
                                id={`modal${key}`}
                                checked={eventLevel === key}
                                onChange={() => setEventLevel(key)}
                              />
                              <span className="flex items-center justify-center w-5 h-5 mr-2 border border-gray-300 rounded-full box dark:border-gray-700">
                                <span
                                  className={`h-2 w-2 rounded-full bg-white ${
                                    eventLevel === key ? 'block' : 'hidden'
                                  }`}
                                >
                                </span>
                              </span>
                            </span>
                            {key}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Enter Start Date
                  </label>
                  <div className="relative">
                    <input
                      id="event-start-date"
                      type="date"
                      value={eventStartDate}
                      onChange={e => setEventStartDate(e.target.value)}
                      className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Enter End Date
                  </label>
                  <div className="relative">
                    <input
                      id="event-end-date"
                      type="date"
                      value={eventEndDate}
                      onChange={e => setEventEndDate(e.target.value)}
                      className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 pl-4 pr-11 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button size="lg" variant="outline">Close</Button>
                </DialogClose>
                <Button size="lg" type="submit" onClick={handleAddOrUpdateEvent}>{selectedEvent ? 'Update Changes' : 'Add Event'}</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </>
  )
}

function renderEventContent(eventInfo: any): React.ReactElement {
  const colorClass = `fc-bg-${eventInfo.event.extendedProps.calendar.toLowerCase()}`
  return (
    <div
      className={`event-fc-color flex fc-event-main ${colorClass} p-1 rounded-sm`}
    >
      <div className="fc-daygrid-event-dot"></div>
      <div className="fc-event-time">{eventInfo.timeText}</div>
      <div className="fc-event-title">{eventInfo.event.title}</div>
    </div>
  )
}

export default Calendar
