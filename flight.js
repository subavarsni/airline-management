import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = 'https://your-supabase-url.supabase.co';  
const SUPABASE_ANON_KEY = 'your-supabase-anon-key';  

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function searchFlights() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const departureDate = document.getElementById("departure-date").value;

    let query = supabase.from('flights').select('*');

    if (from) query = query.eq('from_location', from);
    if (to) query = query.eq('to_location', to);
    if (departureDate) query = query.eq('departure_date', departureDate);

    const { data, error } = await query;

    if (error) {
        console.error("Error fetching flights:", error.message);
        return;
    }

    displayFlights(data);
}

function displayFlights(flights) {
    const flightsList = document.getElementById("flights-list");
    flightsList.innerHTML = ""; 
    if (flights.length === 0) {
        flightsList.innerHTML = "<tr><td colspan='6'>No flights available</td></tr>";
        return;
    }

    flights.forEach(flight => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${flight.flight_number}</td>
            <td>${flight.from_location}</td>
            <td>${flight.to_location}</td>
            <td>${flight.departure_date}</td>
            <td>${flight.departure_time}</td>
            <td>
                <button class="book-btn" onclick="bookFlight('${flight.id}')">Book</button>
                <button class="cancel-btn" onclick="cancelFlight('${flight.id}')">Cancel</button>
            </td>
        `;
        flightsList.appendChild(row);
    });
}

async function bookFlight(flightId) {
    alert(`Flight ${flightId} booked successfully!`);
}

async function cancelFlight(flightId) {
    const { error } = await supabase.from('flights').delete().match({ id: flightId });

    if (error) {
        alert("Error canceling flight: " + error.message);
    } else {
        alert("Flight canceled successfully!");
        searchFlights(); 
    }
}


searchFlights();


window.searchFlights = searchFlights;
window.bookFlight = bookFlight;
window.cancelFlight = cancelFlight;
