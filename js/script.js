$(document).ready(function() {
    // Attendance Logic
    $('#addBtn').on('click', function() {
        const firstName = $('#fn').val().trim();
        const middleName = $('#mn').val().trim() || "N/A";
        const lastName = $('#ln').val().trim();
        const age = $('#age').val().trim();
        const email = $('#em').val().trim();

        if (!firstName || !lastName || !age || !email) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Info',
                text: 'Please fill in all required fields.',
                confirmButtonColor: '#b30000'
            });
            return;
        }

        const newRow = `
            <tr>
                <td>${firstName}</td>
                <td>${middleName}</td>
                <td>${lastName}</td>
                <td>${age}</td>
                <td>${email}</td>
            </tr>`;

        $('#qTable tbody').append(newRow);

        Swal.fire({
            icon: 'success',
            title: 'Recorded!',
            text: 'Welcome to McFood Express!',
            timer: 1500,
            showConfirmButton: false
        });

        $('#fn, #mn, #ln, #age, #em').val('');
    
    });
});

// Calculator Functions
function appendValue(val) { document.getElementById("display").value += val; }
function clearDisplay() { document.getElementById("display").value = ""; }
function deleteLast() {
    let cur = document.getElementById("display").value;
    document.getElementById("display").value = cur.slice(0, -1);
}
function calculate() {
    try {
        // Evaluate the string expression
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        Swal.fire({ icon: 'error', title: 'Error', text: 'Invalid Math Expression' });
        clearDisplay();
    }
}

function loginUser() {
    const user = $("#username").val().trim();
    const pass = $("#password").val().trim();

    // Checks if both fields have at least one character typed in
    if (user !== "" && pass !== "") {
        Swal.fire({
            icon: 'success',
            title: `Access Granted`,
            text: `Welcome, ${user}! Initializing McFood Express...`,
            showConfirmButton: false,
            timer: 2000,
            background: '#b30000',
            color: '#fff',
            iconColor: '#ffcc00'
        }).then(() => {
            window.location.href = "index.html";
        });
    } else {
        // If they left a field blank
        $("#login-message")
            .text("Both fields are required to enter.")
            .css("color", "#ffcc00");
    }

    return false; // Stops the form from refreshing the page
}