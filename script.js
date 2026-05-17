// KUVEMPU COLLEGE OF LAW - Main Script

const DEFAULT_FACULTY = [
    {
        id: 1,
        name: "Dr. Gurumurthy T.N",
        designation: "Principal",
        qualification: "LL.M., Ph.D",
        experience: "10 Years (5 Teaching + 5 Practice)",
        email: "murthyguru1987@gmail.com",
        phone: "9916246833",
        photo: null
    },
    {
        id: 2,
        name: "Dr. Muniraja M",
        designation: "Assistant Professor",
        qualification: "LL.M., Ph.D",
        experience: "10 Years",
        email: "munirajulc@gmail.com",
        phone: "09886435787",
        photo: null
    },
    {
        id: 3,
        name: "Sunil M.V",
        designation: "Assistant Professor",
        qualification: "B.A., LL.B., LL.M",
        experience: "5 Years",
        email: "sunilmvmc@gmail.com",
        phone: "9686140617",
        photo: null
    },
    {
        id: 4,
        name: "Sushmitha K",
        designation: "Assistant Professor",
        qualification: "B.A., LL.B., LL.M",
        experience: "5 Years",
        email: "Contact through admin",
        phone: "N/A",
        photo: null
    },
    {
        id: 5,
        name: "Dawood Baig K",
        designation: "Assistant Professor",
        qualification: "B.A., LL.B., LL.M",
        experience: "Fresher",
        email: "dawoodbaig.k@gmail.com",
        phone: "9632800538",
        photo: null
    },
    {
        id: 6,
        name: "Geetha H.D",
        designation: "Assistant Professor",
        qualification: "B.A., LL.B., LL.M",
        experience: "7 Years",
        email: "geethahd26@gmail.com",
        phone: "8197525759",
        photo: null
    }
];

// Initialize page on load
document.addEventListener('DOMContentLoaded', function() {
    loadFacultyData();
    setupNavigation();
});

// Load and display faculty data
function loadFacultyData() {
    const facultyGrid = document.getElementById('facultyGrid');
    
    // Try to load from localStorage
    let faculty = JSON.parse(localStorage.getItem('collegefaculty')) || DEFAULT_FACULTY;
    
    // If no faculty data in localStorage, save default and use it
    if (faculty.length === 0) {
        localStorage.setItem('collegefaculty', JSON.stringify(DEFAULT_FACULTY));
        faculty = DEFAULT_FACULTY;
    }
    
    // Render faculty cards
    facultyGrid.innerHTML = faculty.map(member => `
        <div class="faculty-card">
            <div class="faculty-image">
                ${member.photo ? `<img src="${member.photo}" alt="${member.name}" style="width: 100%; height: 100%; object-fit: cover;">` : '👨‍⚖️'}
            </div>
            <div class="faculty-content">
                <h3>${member.name}</h3>
                <p class="faculty-designation">${member.designation}</p>
                <p class="faculty-qualification"><strong>Qualification:</strong> ${member.qualification}</p>
                <p class="faculty-qualification"><strong>Experience:</strong> ${member.experience}</p>
                <p class="faculty-contact"><strong>Email:</strong> ${member.email}</p>
                <p class="faculty-contact"><strong>Phone:</strong> ${member.phone}</p>
            </div>
        </div>
    `).join('');
}

// Setup navigation active state
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Set initial active state
    document.querySelector('[data-section="home"]').classList.add('active');
}

// Reload faculty when returning from admin panel
window.addEventListener('focus', function() {
    loadFacultyData();
});
