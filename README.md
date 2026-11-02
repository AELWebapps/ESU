I don't really know, man... what can I say?
6️⃣7️⃣6️⃣7️⃣6️⃣7️⃣6️⃣7️⃣😫😫

# 🔧📱 AEL Field Maintenance System

> 🏗️ Field Inspection • 📷 Photos • 📍 GPS • 🔳 QR Code • 💾 Offline Storage • ☁️ Power Automate

A mobile-first web app for field maintenance and equipment inspection.

Technicians can scan equipment, capture photos, record GPS locations, report faults, and upload inspection records to Microsoft Power Automate.

---

## ✨ Features

- 🔳 **QR Code Scanning** – Identify equipment quickly
- 📷 **Camera Capture** – Take inspection photos
- 🖼️ **Photo Upload** – Upload existing images
- 📍 **GPS Location** – Record inspection location
- 👷 **Technician Check-In** – Record technician and location
- 🏗️ **Equipment Inspection** – Record equipment details
- 📋 **Work Orders** – Link inspections to work orders
- ⚠️ **Fault Reporting** – Record equipment problems
- 💾 **Offline Storage** – Save records locally
- ☁️ **Power Automate** – Upload inspection data
- 🔄 **Cloud Sync** – Retry unsynchronized records
- 📱 **Mobile-Friendly UI** – Designed for field use

---

## 🧭 Workflow

```text
🔐 Login
   │
   ▼
🏠 Home
   │
   ├── 👷 Technician Check-In
   │
   ├── 🔳 QR Scan
   │       │
   │       ▼
   │   🏗️ Equipment
   │       │
   │       ▼
   │   📍 GPS
   │       │
   │       ▼
   │   📷 Photos
   │       │
   │       ▼
   │   ⚠️ Fault Report
   │       │
   │       ▼
   │   ✅ Confirmation
   │
   └── ☁️ Cloud Sync
```

---

## 🔳 QR Code

QR codes can provide:

- 🏢 Site
- 🔧 Equipment
- 🆔 Machine ID
- 📋 Work Order
- 👷 Technician

---

## 📷 Inspection Photos

Technicians can:

- 📸 Take photos
- 🖼️ Upload photos
- 🔄 Switch cameras
- 👀 Preview photos
- ❌ Delete unwanted photos
- ☁️ Upload photos with inspection records

---

## 📍 GPS

The system can record:

- 🌐 Latitude
- 🌐 Longitude
- 🎯 GPS accuracy

---

## ⚠️ Fault Reporting

Record common issues such as:

- ✅ No Issue
- 💧 No Water
- 📉 Low Pressure
- 🚰 Leakage
- 💥 Burst Pipe
- 🔊 Abnormal Noise
- 🚨 Alarm
- ⚡ Power Failure
- 📡 Sensor Fault
- 🌊 Flooding
- ✍️ Other

---

## 💾 Offline Storage

Inspection data can be stored locally using:

- 🗃️ **IndexedDB**
- 💾 **LocalStorage**
- ⏱️ **SessionStorage**

This allows unsynchronized records to remain available for later upload.

---

## ☁️ Power Automate

```text
📱 Field App
     │
     ▼
📦 JSON Data
     │
     ▼
☁️ Power Automate
     │
     ├── 👷 Technician
     ├── 📍 GPS
     ├── 🏢 Site
     ├── 🔧 Equipment
     ├── 🆔 Machine ID
     ├── 📋 Work Order
     ├── ⚠️ Fault
     ├── 📷 Photos
     └── 🕐 Timestamp
```

### 🔄 Offline Upload

```text
❌ Upload Failed
      ↓
💾 Local Backup
      ↓
☁️ Cloud Sync
      ↓
🔄 Retry Upload
```

---

## 🛠️ Technologies

- 🌐 HTML5
- 🎨 CSS3
- ⚙️ JavaScript
- 🗃️ IndexedDB
- 📷 MediaDevices API
- 📍 Geolocation API
- 🔳 html5-qrcode
- ☁️ Microsoft Power Automate

---

## 📂 Files

```text
📦 AEL-Field-Maintenance
│
├── 🌐 index.html
├── ⚙️ sw.js
└── 📖 README.md
```

---

## 🚀 Run

Start a local server:

```bash
python -m http.server 8000
```

Then open the app in your browser.

> 📷 Camera and 📍 location permissions may be required.

---

## 🚀 Future Improvements

- 🔐 Microsoft Entra ID Login
- 📴 Better Offline Mode
- 🔄 Automatic Sync
- 📊 Maintenance Dashboard
- 📜 Inspection History
- 👥 Role-Based Access
- 🔔 Notifications
- 🗺️ Site Mapping

---

## 📄 Status

🚧 **Under Development**

Built for easier field inspection and maintenance.

**📱 Capture • 📍 Locate • 🔳 Identify • 💾 Store • ☁️ Sync**
