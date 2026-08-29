# ICHL25 Conference Website

The website and digital conference programme for the 25th International Conference on Historical Linguistics (ICHL25), held at the University of Oxford in August 2022.

The application was developed as the production website for the conference, providing attendees with conference information, an interactive multi-track programme, and access to presentation abstracts, handouts and other conference materials.

## Technical highlights

The site is a React single-page application built around a structured representation of the conference programme.

Rather than maintaining the programme as a collection of independent pages, talks, posters, workshops, sessions, rooms, authors and scheduling information are represented as structured data. React components transform this common dataset into the different programme and presentation views required throughout the site.

Key aspects include:

* Component-based React architecture for the conference website and programme.
* React Router for client-side navigation and dynamically routed presentation pages.
* A structured conference data model representing presentations, sessions, rooms, authors, workshops and scheduling.
* A data-driven multi-day, multi-track timetable generated from the common conference dataset.
* Dynamic presentation pages connecting timetable entries with presentation metadata and resources.
* Conditional rendering to accommodate different presentation types and available materials.
* Integration and embedding of PDF abstracts, handouts and conference documents.
* A single application combining the public conference website, interactive programme and digital presentation resources.

One of the central design decisions was to treat the conference programme as structured data from which interfaces could be derived, rather than duplicating programme information across individual pages. This allowed timetable and presentation views to share a common source of information and made the complex conference schedule substantially easier to manage.

## Project status

Archived production project.

This repository contains the website as developed for ICHL25. The conference took place in 2022 and the application is no longer under active development.

The repository is retained both as a record of the conference website and as an example of my earlier production web development. It demonstrates data modelling, component-based frontend development, dynamic routing, and the translation of a complex academic conference programme into a navigable web interface.

The project also reflects the technologies and engineering practices I was using at the time. For a comparable system today, I would place greater emphasis on stronger separation between content and application code, schema validation, TypeScript, automated testing and accessibility. The underlying approach I would retain is the use of a structured programme model as the source of truth, with user-facing views generated from that model.

## Technology

React · JavaScript · JSX · React Router · HTML · CSS · Create React App · GitHub Pages

## Historical context

This repository represents a completed, time-bounded production system. It is preserved in its conference-era form rather than being continually modernised after the event, so that the repository remains representative of the software that was actually developed and deployed for ICHL25.

## Authorship and name

I developed this website as part of my role in organising ICHL25. At the time of the conference, I was known professionally as Emily Lindsay-Smith; I now use the name Rowan Lindsay-Smith.

Contemporary conference materials, including the website and published proceedings, therefore refer to me as Emily Lindsay-Smith. These have been retained in their original form as part of the historical record of the conference.