document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.getElementById("calendar");
    const calendarDates = document.getElementById("calendar-dates");
    const monthYear = document.getElementById("month-year");
    const prevMonth = document.getElementById("prev-month");
    const nextMonth = document.getElementById("next-month");

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let currentDate = new Date();

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);

        monthYear.textContent = `${months[month]} ${year}`;
        calendarDates.innerHTML = "";

        // Fill the calendar dates
        for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
            const emptyCell = document.createElement("div");
            calendarDates.appendChild(emptyCell);
        }

        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            const dateCell = document.createElement("div");
            dateCell.textContent = i;
            if (i === date.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
                dateCell.classList.add("current-date");
            }
            calendarDates.appendChild(dateCell);
        }
    }

    prevMonth.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonth.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});

document.addEventListener("DOMContentLoaded", function() {
    const progressCircles = document.querySelectorAll(".progress-circle");

    progressCircles.forEach(circle => {
        const progress = parseFloat(circle.getAttribute("data-progress"));
        const degree = (progress / 100) * 360;
        circle.style.setProperty('--progress', `${degree}deg`);
    });
});





