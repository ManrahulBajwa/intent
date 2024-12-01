import NanoExpress from 'nanoexpress';
import { get_simple_html_page } from '../scenarios/simple_html_page.js';

// Initialize the Express app instance
const app = NanoExpress();

// Bind the 'simple_html_page' scenario route
app.get('/', (request, response) => {
    // Generate the scenario payload
    const { status, headers, body } = get_simple_html_page({ server_name: 'NanoExpress' });

    // Write the status and headers
    response.status(status);
    Object.keys(headers).forEach((header) => response.header(header, headers[header]));

    // Write the body and end the response
    return response.send(body);
});

export default app;
