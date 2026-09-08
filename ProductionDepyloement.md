### Proxy Server - A proxy server is a middleman between the client and the internet/server.
### With a proxy:

You → Proxy → Website
The website sees the proxy's IP address instead of your IP (depending on the setup).
Common uses:Hide/change client IP || Access control || Filtering || Caching

### Reverse Proxy
A reverse proxy sits in front of the servers and receives requests on their behalf.

User → Reverse Proxy → Backend Server
                       ↓
                  Application

The user doesn't directly communicate with the backend server.
```JS
Why do we use a proxy server?
1: to Hide Client Ip -followUp 
2: protect client 
3 : 2. Control access
Companies/colleges can use proxies to control which websites users can access.

Employee → Proxy → Internet
                    ↓
              Block Facebook
4: Caching
A proxy can cache frequently requested content.

Client → Proxy
          ↓
       Cached data
5 :Monitoring
Organizations can use proxies to monitor and log network traffic.
```
```
how it hide client Ip : 
With a proxy

Now you configure your browser/application to use a proxy:

Client                Proxy                 Google
   │                     │                     │
   │ Request             │                     │
   │────────────────────→│                     │
   │                     │ New request         │
   │                     │────────────────────→│
   │                     │                     │
   │                     │   Response          │
   │                     │←────────────────────│
   │ Response            │                     │
   │←────────────────────│                     │

The important part is this:
Proxy hides your IP from the destination, but the proxy itself can know your IP.
The proxy creates/forwards a separate connection to Google.
```
