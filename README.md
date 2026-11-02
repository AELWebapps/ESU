I don't really know, man... what can I say?
6️⃣7️⃣6️⃣7️⃣6️⃣7️⃣6️⃣7️⃣😫😫

🔧📱 AEL Field Maintenance System
🏗️ Mobile Field Inspection • 📷 Photo Capture • 📍 GPS • 🔳 QR Code • ☁️ Power Automate • 💾 Offline Backup

A mobile-first field maintenance and equipment inspection web application designed for technicians working on site.

The system combines equipment identification, QR scanning, GPS positioning, camera/photo capture, fault reporting, technician check-in and cloud synchronization into one simple browser-based workflow.

✨🚀 Key Features
🔐 System Login
Secure entry screen before accessing the maintenance interface.

🏗️ Site & Equipment Selection
Record the site, equipment type, machine ID and work order.

🔳 QR Code Scanning
Scan equipment QR codes to automatically populate inspection information.

📍 GPS Positioning
Capture latitude, longitude and GPS accuracy during field operations.

📷 Camera & Photo Upload
Take inspection photos directly from the device camera or select existing images.

🔄 Front / Rear Camera Switching
Switch between device cameras directly inside the application.

👷 Technician Check-In
Record technician name, GPS position, timestamp and device information.

⚠️ Fault Reporting
Select common equipment problems or enter a custom fault description.

💾 Offline Local Backup
Store inspection records locally using IndexedDB when cloud upload is unavailable.

☁️ Power Automate Integration
Send inspection records, photos and field information to Microsoft Power Automate.

🔁 Manual Re-Synchronization
Retry locally stored records through the Cloud Sync Center.

📱 Mobile-First Interface
Designed for technicians using phones and tablets during site work.

🔳 QR Code Support

QR codes can automatically populate inspection information.

📦 Supported information
👷 Technician
🏢 Site
🔧 Equipment
🆔 Machine ID
📋 Work Order

📷 Photo Inspection

Technicians can document equipment conditions directly from their device.

📸 Available functions
📷 Take photo
🖼️ Upload existing image
📚 Capture multiple photos
👀 Preview photos before submission
❌ Remove unwanted photos
🔄 Switch front/rear camera
📍 Associate GPS information
☁️ Upload photos through Power Automate
📍 GPS Location

The application uses the browser's Geolocation API.

Location information can include:

📍 Latitude
 📍 Longitude
 🎯 GPS Accuracy

This information can be associated with technician check-ins and maintenance inspection records.

⚠️ Equipment Fault Reporting

Technicians can record the primary problem found during inspection.

Examples include:

✅ No problem
💧 No water supply
📉 Low water pressure
🚰 Water leakage
💥 Burst pipe
🔊 Abnormal noise
🚨 Alarm
⚡ Electrical trip / no power
🎛️ Panel fault
📡 Sensor fault
🌊 Flooding
✍️ Other / custom description
👷📍 Technician Check-In

The standalone check-in function records field attendance information.

📝 Information recorded

👤 Technician name
 📍 GPS position
 🕐 Timestamp
 📱 Device information
 ☁️ Synchronization status

 🛠️💻 Technology Stack
🔧 Technology	🎯 Purpose🌐 HTML5	Application structure
🎨 CSS3	Mobile interface
⚙️ JavaScript	Application logic
🗃️ IndexedDB	Offline/local records
💾 LocalStorage	Saved browser information
⏱️ SessionStorage	Temporary inspection state
📷 MediaDevices API	Camera access
📍 Geolocation API	GPS positioning
🖼️ FileReader API	Image upload
🎨 Canvas API	Camera image capture
🔳 html5-qrcode	QR code scanning
☁️ Microsoft Power Automate	Cloud workflow integration
