const venues = [
    {
        image: 'D:/Academic Lab Subjects/Full Stack Project/arvrLab.jpg',
        name: 'ARVR LAB',
        description: 'Dedicated to students interested in game development and AR/VR app development.',
        location: 'EASTERN WING',
        systems: 25,
        seats: 50,
        incharge: 'Dr. Smith',
        phone: '123-456-7890',
        status: 'Open' // New status property
    },
    {
        image: 'D:/Academic Lab Subjects/Full Stack Project/embeded Lab.jpg',
        name: 'EMBEDED SYSTEMS LAB',
        description: 'Dedicated to students interested in embeded systems and internet of things.',
        location: 'WESTERN WING',
        systems: 20,
        seats: 40,
        incharge: 'Ms. Emily',
        phone: '987-654-3210',
        status: 'Under Maintenance' // New status property
    },
    {
        image: 'D:/Academic Lab Subjects/Full Stack Project/drone lab.jpg',
        name: 'DRONE LAB',
        description: 'Dedicated to students interested in drone developments.',
        location: 'Location 3',
        systems: 15,
        seats: 30,
        incharge: 'Mr. John',
        phone: '456-789-1234',
        status: 'Closed' // New status property
    }
];


let currentIndex = 0;

const venueImg = document.getElementById('venue-img');
const venueDetails = document.getElementById('venue-details');
const detailsTableContainer = document.getElementById('details-table-container');
const venueName = document.getElementById('venue-name');
const venueDescription = document.getElementById('venue-description');
const venueLocation = document.getElementById('venue-location');
const venueSystems = document.getElementById('venue-systems');
const venueSeats = document.getElementById('venue-seats');
const venueIncharge = document.getElementById('venue-incharge');
const venuePhone = document.getElementById('venue-phone');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateVenue() {
    const venue = venues[currentIndex];
    venueImg.src = venue.image;
    venueName.textContent = venue.name;
    venueDescription.textContent = venue.description;
    venueLocation.textContent = venue.location;
    venueSystems.textContent = venue.systems;
    venueSeats.textContent = venue.seats;
    venueIncharge.textContent = venue.incharge;
    venuePhone.textContent = venue.phone;
    document.getElementById('venue-status').textContent = venue.status; // Update status

    // Adjust image height conditionally
    if (currentIndex === 2 || currentIndex == 0 || currentIndex == 1) {
        venueImg.style.height = '400px';
    } else {
        venueImg.style.height = '300px';
    }
}


function toggleDetailsTable() {
    const detailsTableContainer = document.getElementById('details-table-container');
    detailsTableContainer.classList.toggle('expanded');
}

document.getElementById('details-table-container').addEventListener('click', toggleDetailsTable);


prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? venues.length - 1 : currentIndex - 1;
    updateVenue();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === venues.length - 1) ? 0 : currentIndex + 1;
    updateVenue();
});

detailsTableContainer.addEventListener('click', toggleDetailsTable);

updateVenue();
