const express = require('express');
const cookieParser = require('cookie-parser');
<<<<<<< HEAD
=======
const cors = require('cors');
>>>>>>> ed0b973 (added frontend, already integrated, many error)

require('dotenv').config();

const app = express();
<<<<<<< HEAD
=======

// Configure CORS to allow frontend access with credentials
app.use(cors({
  origin: 'http://localhost:5173', // React Vite dev server
  credentials: true // Allow cookies to be sent/received
}));

>>>>>>> ed0b973 (added frontend, already integrated, many error)
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// Import routes
app.use('/users', require('./src/routes/user.route'));
<<<<<<< HEAD
app.use('/bookings', require('./src/routes/booking.route'));
app.use('/slots', require('./src/routes/parking_slot.route'));

=======
app.use('/auth', require('./src/routes/user.route')); // Add duplicate route with /auth prefix
app.use('/bookings', require('./src/routes/booking.route'));
app.use('/slots', require('./src/routes/parking_slot.route'));

// Debug route to log all registered routes
if (process.env.NODE_ENV !== 'production') {
  app.get('/debug/routes', (req, res) => {
    const routes = [];
    
    app._router.stack
      .filter(r => r.route)
      .forEach(r => {
        const methods = Object.keys(r.route.methods)
          .filter(m => r.route.methods[m])
          .map(m => m.toUpperCase());
          
        routes.push(`${methods.join(',')} ${r.route.path}`);
      });
      
    // Also get routes in sub-routers
    app._router.stack
      .filter(r => r.name === 'router')
      .forEach(r => {
        const pathPrefix = r.regexp.toString().split('?')[0].replace('/^\\', '').replace('\\/?(?=\\/|$)/i', '');
        
        r.handle.stack
          .filter(sr => sr.route)
          .forEach(sr => {
            const methods = Object.keys(sr.route.methods)
              .filter(m => sr.route.methods[m])
              .map(m => m.toUpperCase());
              
            routes.push(`${methods.join(',')} ${pathPrefix}${sr.route.path}`);
          });
      });
      
    res.send(`<pre>${routes.join('\n')}</pre>`);
  });
  
  console.log('Route debugging endpoint available at: /debug/routes');
}

>>>>>>> ed0b973 (added frontend, already integrated, many error)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
