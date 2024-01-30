const mongoose = require('mongoose');

const connectToMongo = async () => {
    //   try {
    //     await mongoose.connect('mongodb://mongo:27017/app', { useNewUrlParser: true });
    //     console.log('MongoDB Connected');
    //   } catch (error) {
    //     console.error('Unable to connect to MongoDB', error);
    //   } finally {
    //     mongoose.connection.close();
    //   }
    mongoose
        .connect(
            'mongodb://mongo:27017/app',
            { useNewUrlParser: true, useUnifiedTopology: true } // Add useUnifiedTopology option
        )
        .then(() => console.log('MongoDB Connected'))
        .catch((err) => console.error('Unable to connect to MongoDB', err));
};

connectToMongo();
