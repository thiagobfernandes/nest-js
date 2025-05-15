Network Traffic Monitoring Project

This project is designed to monitor network traffic using NestJS and C++. It connects a C++ application via a TCP socket to transmit network data to the NestJS backend. The system includes user (IP) management and log monitoring functionality.
Project Overview

    Backend: The backend is built with NestJS, where network data is processed and exposed to clients. The data is received from a C++ application via a TCP socket.
    C++ Application: The C++ application collects network traffic data and sends it to the NestJS backend over a TCP connection.
    User Management: The system allows the registration of users by their IP addresses, and logs can be tracked for each user.
    Security Considerations: While ARP spoofing was initially considered for deeper network control, a simpler approach was chosen for security reasons.
    Migration: The project is currently being migrated to a C++ desktop application for improved performance and efficiency 

How it Works

    C++ Application: The C++ application collects network data and connects to the NestJS backend via a TCP socket.
    NestJS Backend: NestJS receives the data from the C++ application and processes it according to business logic (user/IP registration, log monitoring).
    User/IP Management: Users are registered based on their IP addresses, allowing for targeted log tracking.
    Log Monitoring: Logs are monitored and stored for analysis and tracking per user.

Installation



cd network-monitoring-project

Install dependencies:

npm install

Run the application:
    
    g++ ./c++/websocket/websocket.c++ -o network 
    
    sudo ./network
    
    yarn dev || npm run dev

Migration to C++ Desktop Application


  

Currently, the project is being migrated to a C++ desktop application to improve performance and efficiency. The desktop version will integrate more directly with the operating system’s network interfaces and allow for greater control over network traffic monitoring.

Network Structure With ARP Spoofing:

![PROJECT excalidraw(3)](https://github.com/user-attachments/assets/a0b638c9-6294-43b9-b5dd-23625c9a0fca)


This structure keeps the original description while allowing for the addition of the diagrams that help illustrate the differences. You can update the placeholder for the ARP spoofing diagram once you have it ready.



