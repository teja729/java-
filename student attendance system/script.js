document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentId = document.getElementById('student-id').value;
    const studentName = document.getElementById('student-name').value;
    
    if (studentId.trim() === '' || studentName.trim() === '') return;
    
    localStorage.setItem('studentId', studentId);
    localStorage.setItem('studentName', studentName);
    
    document.getElementById('display-name').textContent = studentName;
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('attendance-container').classList.remove('hidden');
    loadAttendance();
});

document.getElementById('mark-attendance').addEventListener('click', function() {
    const name = localStorage.getItem('studentName');
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    
    const attendanceData = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
    attendanceData.push({ name, date, time, status: 'Present' });
    localStorage.setItem('attendanceRecords', JSON.stringify(attendanceData));
    
    loadAttendance();
});

function loadAttendance() {
    const table = document.getElementById('attendance-list');
    table.innerHTML = '';
    const attendanceData = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
    attendanceData.forEach((record, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${record.name}</td><td>${record.date}</td><td>${record.time}</td><td>${record.status}</td>
        <td><button class="delete" onclick="deleteRecord(${index})">Delete</button></td>`;
        table.appendChild(row);
    });
}

function deleteRecord(index) {
    const attendanceData = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
    attendanceData.splice(index, 1);
    localStorage.setItem('attendanceRecords', JSON.stringify(attendanceData));
    loadAttendance();
}

document.getElementById('view-history').addEventListener('click', function() {
    loadAttendance();
    alert('Attendance history loaded!');
});

document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('studentId');
    localStorage.removeItem('studentName');
    document.getElementById('attendance-container').classList.add('hidden');
    document.getElementById('login-container').classList.remove('hidden');
});
