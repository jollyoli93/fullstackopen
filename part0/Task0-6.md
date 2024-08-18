```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/data.json 
    activate server
    note right of browser: [{ "content": "New note to server", "date": "2024-08-18T25:01:03.823Z" }]

    server-->>browser: 201 created
    deactivate server

```