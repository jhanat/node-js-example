// Test API endpoints
async function testEndpoint(endpoint, method = 'GET', data = null) {
    const resultArea = document.getElementById('result');
    resultArea.textContent = `Testing ${method} ${endpoint}...`;

    try {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            }
        };

        if (data && (method === 'POST' || method === 'PUT')) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(endpoint, options);
        const responseData = await response.json();

        const result = {
            status: response.status,
            statusText: response.statusText,
            headers: Object.fromEntries(response.headers.entries()),
            data: responseData
        };

        resultArea.textContent = JSON.stringify(result, null, 2);
        resultArea.style.color = response.ok ? '#68d391' : '#fc8181';
    } catch (error) {
        resultArea.textContent = `Error: ${error.message}`;
        resultArea.style.color = '#fc8181';
    }
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // You can add more interactive features here
    console.log('Node.js Server Test Page Loaded');
    
    // Display current timestamp
    const now = new Date().toISOString();
    console.log(`Page loaded at: ${now}`);
});

// Helper function to create and test a new user
async function createTestUser() {
    const userData = {
        name: 'Test User',
        email: `test${Date.now()}@example.com`
    };
    
    await testEndpoint('/api/users', 'POST', userData);
}

// Helper function to test updating a user
async function updateTestUser(userId) {
    const userData = {
        name: 'Updated User Name',
        email: `updated${Date.now()}@example.com`
    };
    
    await testEndpoint(`/api/users/${userId}`, 'PUT', userData);
}

// Helper function to test deleting a user
async function deleteTestUser(userId) {
    await testEndpoint(`/api/users/${userId}`, 'DELETE');
}
