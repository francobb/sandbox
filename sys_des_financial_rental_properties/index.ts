/**
 * “How would I design a tenant financial tracking system (your domain)?”
 * Q's:
 *  - Who is going to use it?
 *  - How are they going to use it?
 *  - How Many users will be using it?
 *  - How many users will be using it concurrently?
 *  - What does the system do?
 *  - How much data do we expect to handle?
 *  - What is the expected read to write ratio?
 *  Assumptions:
 *    - The system will be used by property managers and tenants
 *    - Users will primarily access the system through a web interface
 *    - The system will support up to 1000 concurrent users
 *    - The system will handle a maximum of 1000 transactions per day
 *    - The expected read to write ratio is 10:1
 *
 *  Main Components:
 *  Landlord functionality:
 *    - User/tenant Management
 *    - Property Management
 *    - Financial Tracking
 *    - Maintenance/Repair Management
 *    - Reporting
 *    - Notification
 *  Tenant functionality:
 *    - Rent payments
 *    - Maintenance requests
 *    - Reporting
 *    - Notifications
 */
