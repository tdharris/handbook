# handbook
Support Handbook Demo

<b>To install</b>:

1. Download repository:`git clone https://github.com/tdharris/handbook && cd handbook`
2. Install dependencies:
  * Install node modules: `npm install`
  * Install bower components: `bower install`
3. Launch: `node bin/www` or dev with live-reload: `gulp`
4. Connect to browser `http://localhost:3000`

<b>How to enable live xeditable feature:</b>:

1. In `views/index.swig`, comment the static content section (lines 89-103) and uncomment the xeditable section (lines 106-120).
2. In `routes/index.js`, uncomment the xeditable feature & live edits section (lines 36-74).
<br><i>Note: This feature is accomplished through a post to `/editContentData` and through Socket.IO to push out edits to connected clients.</i>

<b>Technologies</b>:
* NodeJS
* AngularJS
* SocketIO
