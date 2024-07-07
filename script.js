function showDetails() {
    document.getElementById('details').style.display = 'block';
    document.querySelector('.welcome').style.display = 'none';
}

function showCalendar() {
    document.getElementById('calendar').style.display = 'block';
    document.getElementById('details').style.display = 'none';

    const itinerary = [
        { date: 'July 20', activity: 'Arrival and Hotel Check-in' },
        { date: 'July 21', activity: 'Eiffel Tower and Seine River Cruise' },
        { date: 'July 22', activity: 'Louvre Museum' },
        { date: 'July 23', activity: 'Gourmet Dining Experience' },
        { date: 'July 24', activity: 'Montmartre and Sacré-Cœur' },
        { date: 'July 25', activity: 'Departure' },
    ];

    const calendarContainer = document.getElementById('calendar-container');
    calendarContainer.innerHTML = '';
    itinerary.forEach(item => {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.innerHTML = `<h3>${item.date}</h3><p>${item.activity}</p>`;
        calendarContainer.appendChild(dayDiv);
    });
}

function showPreferences() {
    document.getElementById('preferences').style.display = 'block';
    document.getElementById('calendar').style.display = 'none';
}

function submitForm(event) {
    event.preventDefault();
    document.getElementById('message').style.display = 'block';
    document.getElementById('preferences').style.display = 'none';
}
