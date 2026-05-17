// KUVEMPU COLLEGE OF LAW - Admin Panel Script

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

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeAdmin();
    setupMenuNavigation();
    setupFormHandlers();
    setupLogoUpload();
    setupBackupRestore();
    loadFacultyList();
    loadPhotoUploadUI();
    updateStats();
});

// Initialize admin panel
function initializeAdmin() {
    // Ensure default faculty exists
    if (!localStorage.getItem('collegefaculty')) {
        localStorage.setItem('collegefaculty', JSON.stringify(DEFAULT_FACULTY));
    }
}

// Setup menu navigation
function setupMenuNavigation() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            
            // Remove active class from all items and sections
            menuItems.forEach(m => m.classList.remove('active'));
            document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked item and corresponding section
            this.classList.add('active');
            document.getElementById(section).classList.add('active');
        });
    });
}

// Setup form handlers
function setupFormHandlers() {
    const form = document.getElementById('addFacultyForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newFaculty = {
            id: Date.now(),
            name: document.getElementById('facultyName').value,
            designation: document.getElementById('facultyDesignation').value,
            qualification: document.getElementById('facultyQualification').value,
            experience: document.getElementById('facultyExperience').value,
            email: document.getElementById('facultyEmail').value,
            phone: document.getElementById('facultyPhone').value,
            photo: null
        };
        
        let faculty = JSON.parse(localStorage.getItem('collegefaculty')) || [];
        faculty.push(newFaculty);
        localStorage.setItem('collegefaculty', JSON.stringify(faculty));
        
        // Clear form
        form.reset();
        
        // Reload lists
        loadFacultyList();
        loadPhotoUploadUI();
        updateStats();
        
        showSuccess('Faculty member added successfully!');
    });
}

// Load and display faculty list
function loadFacultyList() {
    const faculty = JSON.parse(localStorage.getItem('collegefaculty')) || [];
    const container = document.getElementById('facultyList');
    
    container.innerHTML = faculty.map(member => `
        <div class="faculty-item">
            <div class="faculty-photo-preview">
                ${member.photo ? `<img src="${member.photo}" alt="${member.name}">` : '👨‍⚖️'}
            </div>
            <div class="faculty-info">
                <h3>${member.name}</h3>
                <p><strong>${member.designation}</strong></p>
                <p>Qualification: ${member.qualification}</p>
                <p>Experience: ${member.experience}</p>
                <p>Email: ${member.email}</p>
                <p>Phone: ${member.phone}</p>
            </div>
            <div class="faculty-actions">
                <button class="btn-secondary" onclick="editFaculty(${member.id})">✏️ Edit</button>
                <button class="btn-danger" onclick="deleteFaculty(${member.id})">🗑️ Delete</button>
            </div>
        </div>
    `).join('');
}

// Load photo upload UI
function loadPhotoUploadUI() {
    const faculty = JSON.parse(localStorage.getItem('collegefaculty')) || [];
    const container = document.getElementById('photoUploadContainer');
    
    container.innerHTML = faculty.map(member => `
        <div style="margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid var(--medium-gray);">
            <h4>${member.name}</h4>
            <div class="form-group">
                <div class="image-upload-area" onclick="document.getElementById('photo-${member.id}').click()">
                    <p>📁 Click to upload photo for ${member.name}</p>
                    <p style="font-size: 0.85rem; color: var(--text-secondary);">PNG, JPG (Max. 2MB)</p>
                </div>
                <input type="file" id="photo-${member.id}" accept="image/*" style="display: none;" onchange="uploadPhoto(${member.id}, this)">
            </div>
            ${member.photo ? `
                <div style="margin-top: 1rem;">
                    <img src="${member.photo}" alt="${member.name}" style="max-width: 200px; border-radius: 4px;">
                    <br>
                    <button class="btn-danger" style="margin-top: 0.5rem;" onclick="removePhoto(${member.id})">Remove Photo</button>
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Upload photo
function uploadPhoto(facultyId, inputElement) {
    const file = inputElement.files[0];
    if (!file) return;
    
    if (file.size > 2 * 1024 * 1024) {
        showError('File size must be less than 2MB');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const faculty = JSON.parse(localStorage.getItem('collegefaculty')) || [];
        const member = faculty.find(m => m.id === facultyId);
        
        if (member) {
            member.photo = e.target.result;
            localStorage.setItem('collegefaculty', JSON.stringify(faculty));
            loadPhotoUploadUI();
            showSuccess(`Photo uploaded for ${member.name}!`);
        }
    };
    reader.readAsDataURL(file);
}

// Remove photo
function removePhoto(facultyId) {
    const faculty = JSON.parse(localStorage.getItem('collegefaculty')) || [];
    const member = faculty.find(m => m.id === facultyId);
    
    if (member && confirm(`Remove photo for ${member.name}?`)) {
        member.photo = null;
        localStorage.setItem('collegefaculty', JSON.stringify(faculty));
        loadPhotoUploadUI();
        showSuccess('Photo removed successfully!');
    }
}

// Delete faculty
function deleteFaculty(facultyId) {
    const faculty = JSON.parse(localStorage.getItem('collegefaculty')) || [];
    const member = faculty.find(m => m.id === facultyId);
    
    if (member && confirm(`Delete ${member.name}? This cannot be undone.`)) {
        const updated = faculty.filter(m => m.id !== facultyId);
        localStorage.setItem('collegefaculty', JSON.stringify(updated));
        loadFacultyList();
        loadPhotoUploadUI();
        updateStats();
        showSuccess(`${member.name} deleted successfully!`);
    }
}

// Edit faculty (simplified - opens in new form)
function editFaculty(facultyId) {
    alert('Edit feature: Duplicate the member and delete the old one, or add a detailed edit form later.');
}

// Setup logo upload
function setupLogoUpload() {
    const uploadArea = document.getElementById('logoUploadArea');
    const input = document.getElementById('logoInput');
    
    uploadArea.addEventListener('click', () => input.click());
    
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.background = 'rgba(30, 58, 138, 0.1)';
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.background = 'rgba(30, 58, 138, 0.02)';
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.background = 'rgba(30, 58, 138, 0.02)';
        const file = e.dataTransfer.files[0];
        if (file) {
            input.files = e.dataTransfer.files;
            uploadLogo();
        }
    });
    
    input.addEventListener('change', uploadLogo);
    
    // Load existing logo
    const savedLogo = localStorage.getItem('collegeLogo');
    if (savedLogo) {
        showLogoPreview(savedLogo);
    }
}

// Upload logo
function uploadLogo() {
    const input = document.getElementById('logoInput');
    const file = input.files[0];
    
    if (!file) return;
    
    if (file.size > 2 * 1024 * 1024) {
        showError('Logo file size must be less than 2MB');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        localStorage.setItem('collegeLogo', e.target.result);
        showLogoPreview(e.target.result);
        
        // Update logo on main site (if parent window)
        if (window.opener) {
            window.opener.location.reload();
        }
        
        showSuccess('Logo uploaded successfully!');
    };
    reader.readAsDataURL(file);
}

// Show logo preview
function showLogoPreview(logo) {
    const preview = document.getElementById('logoPreview');
    preview.innerHTML = `
        <div style="padding: 1rem; background: var(--light-gray); border-radius: 4px; text-align: center;">
            <img src="${logo}" alt="College Logo" style="max-width: 200px; max-height: 200px;">
            <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 0.5rem;">Current logo</p>
        </div>
    `;
}

// Change logo
function changeLogo() {
    document.getElementById('logoInput').click();
}

// Setup backup and restore
function setupBackupRestore() {
    const backupInput = document.getElementById('backupInput');
    backupInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);
                    if (confirm('This will replace all current data. Continue?')) {
                        localStorage.setItem('collegefaculty', JSON.stringify(data.faculty));
                        if (data.logo) {
                            localStorage.setItem('collegeLogo', data.logo);
                        }
                        loadFacultyList();
                        loadPhotoUploadUI();
                        updateStats();
                        showSuccess('Data restored successfully!');
                        location.reload();
                    }
                } catch (error) {
                    showError('Invalid backup file');
                }
            };
            reader.readAsText(file);
        }
    });
}

// Backup data
function backupData() {
    const faculty = JSON.parse(localStorage.getItem('collegefaculty')) || [];
    const logo = localStorage.getItem('collegeLogo') || null;
    
    const backupData = {
        timestamp: new Date().toISOString(),
        faculty: faculty,
        logo: logo
    };
    
    const dataStr = JSON.stringify(backupData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `kuvempu-college-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showSuccess('Backup downloaded successfully!');
}

// Restore data
function restoreData() {
    document.getElementById('backupInput').click();
}

// Update dashboard stats
function updateStats() {
    const faculty = JSON.parse(localStorage.getItem('collegefaculty')) || [];
    const photoCount = faculty.filter(m => m.photo).length;
    
    document.getElementById('facultyCount').textContent = faculty.length;
    document.getElementById('photoCount').textContent = photoCount;
}

// Show success message
function showSuccess(message) {
    const element = document.getElementById('successMessage');
    element.textContent = '✓ ' + message;
    element.classList.add('show');
    
    setTimeout(() => {
        element.classList.remove('show');
    }, 4000);
}

// Show error message
function showError(message) {
    const element = document.getElementById('errorMessage');
    element.textContent = '✗ ' + message;
    element.classList.add('show');
    
    setTimeout(() => {
        element.classList.remove('show');
    }, 4000);
}
