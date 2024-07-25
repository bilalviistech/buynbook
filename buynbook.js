const express = require('express')
const ConnectDb = require('./database/ConnectDb.js')
ConnectDb()
const Route = require('./Routes.js')
// const os = require('os')
// const totalCpu = os.cpus().length
const cors = require('cors');

const app = express()
app.use(cors())

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
// const io = new Server(server);

// console.log("total CPU: " + totalCpu)

// const User = require('./models/UserModal.js')
// const ChatUsers = require('./models/ChatListModal.js')
// const MessageModal = require('./models/MessagesModal.js')

const PORT = 3027

app.use(express.json())


app.use('/Profile_Picture', express.static('upload/images/Profile_Picture'));
app.use('/Sell_Pictures', express.static('upload/images/Sell_Pictures'));
app.use('/Installment_Pictures', express.static('upload/images/Installment_Pictures'));
app.use('/Booking_Pictures', express.static('upload/images/Booking_Pictures'));

app.use("/buynbook/api", Route)

//listening port runnig server
server.listen(PORT, () => {
    console.log(`listening on port : ${PORT}/`)
})

// io.on('connection', (socket) => {
//     console.log('a user connected', socket.id);





//     socket.on('login', async (data) => {
//         try {
//             // Validate user input (for example, check if data.id is a valid MongoDB ObjectId)

//             // Save user details to MongoDB
//             console.log('User logged in:', data);

//             console.log("data", data);

//             await User.updateOne({ _id: data._id }, { $set: { socketId: socket.id } });

//             console.log('Successfully Updated', socket.id);

//             // Send a success response back to the client if needed
//             socket.emit('loginSuccess', { message: 'Login successful' });

//             const onlineUsers = await User.find({ socketId: { $ne: "" } });

//             const temp = []
//             onlineUsers.forEach((res) => {
//                 console.log("return ", res._id)

//                 temp.push(res._id)
//             })

//             socket.emit('onlineUsers', temp);

//             // console.log("Online Users:", onlineUsers);


//         } catch (error) {
//             console.error('Error updating:', error.message);

//             // Send an error response back to the client if needed
//             socket.emit('loginError', { message: 'Error updating user details' });
//         }
//     });





//     socket.on('sendMessage', async (messageData) => {
        

//         socket.emit("message",  "hello world",  )

//         console.log("messageData",messageData)

        
//         const senderId = messageData.sender_id;
//         const reciverId = messageData.reciever_id;

        
//         // const newdata = {
//         //     sender_id: senderId,
//         //     reciever_id: reciverId,
//         //     messages: [{
//         //         senderId: senderId,
//         //         message: messageData.Message,
//         //         timestamp: Date.now()
//         //     }]
//         // }
        
//         console.log("`${reciverId}_${senderId}_message`",`${reciverId}_${senderId}_message`)

//         io.emit(`${reciverId}_${senderId}_message`, messageData )

        
//         console.log()
//         const CreateChat = await MessageModal({
//             sender_id: senderId,
//             reciever_id: reciverId,
//             messages: [{
//                 senderId: senderId,
//                 message: messageData.messages[0].message,
//                 timestamp: Date.now()
//             }]
//         });

//         await CreateChat.save().then(() => {
//             console.log("message created successfully")
//         }).catch(err => {
//             console.log("error", err)
//         })

//     });



//     socket.on('CreateChatList', async (data) => {


//         const senderId = data.Sender_id
//         const reciverId = data.Reciver_id

//         console.log("dsandjsandjandjanjdnakndjakndkjasndajks")
//         // Check if the chat already exists
//         const existingChat = await ChatUsers.findOne({
//             $or: [
//                 { sender_id: senderId, reciever_id: reciverId },
//                 { sender_id: reciverId, reciever_id: senderId }
//             ]
//         });


//         if (existingChat) {

//             // console.log("chat exist", existingChat)

//                 await ChatUsers.updateOne({
//                     $or: [
//                         { sender_id: senderId, receiver_id: reciverId },
//                         { sender_id: reciverId, receiver_id: senderId }
//                     ]
//                 }, {
//                     $set: { lastMessage: data.Last_message }
//                 })

//                 console.log("updated")
//         } else {


//             const ChatUserModal = await ChatUsers({
//                 sender_id: senderId,
//                 reciever_id: reciverId,
//                 lastMessage: data?.Last_message,
//                 senderData:
//                 {
//                     sender_id: senderId,
//                     sender_Image: data.senderData.sender_Image,
//                     Sender_name: data.senderData.Sender_name
//                 },
//                 recieverData: {
//                     reciever_id: reciverId,
//                     reciever_Image: data.recieverData.reciever_Image,
//                     reciever_name: data.recieverData.reciever_name
//                 },
//                 Ad_Image: data.Ad_Image,
//                 AdType: data.Chat_Type
//             })

//             await ChatUserModal.save().then(() => {
//                 console.log("Chat lis t added")
//             }).catch(err => console.log(err));
//         }

//     })


//     // // Handle user disconnect
//     socket.on('disconnect', async () => {
//         console.log('a user disconnected', socket.id);

//         await User.updateOne({ socketId: socket?.id }, { $set: { socketId: "" } })
//         // Perform any cleanup or additional actions upon user disconnect, if needed
//     });


// });
// if (clusters.isPrimary) {

//     for (i = 0; i < totalCpu; i++) {
//         clusters.fork()
//     }
// } else {
//     //just for testing
//     app.get('/', (req, res) => {
//         res.send({
//             "Service": `Start ${process.pid}`
//         })
//     })

//     //makeinng routing
//     app.use("/buynbook/api", Route)

//     //listening port runnig server
//     server.listen(PORT, () => {
//         console.log(`listening on port : ${PORT}, ${process.pid}`)
//     })
// }

