// import React from "react";

// export default function Chat() {
//     return (
//         import React, { useState } from "react";

// const Chat = () => {
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   const handleInputChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (message.trim() !== "") {
//       setChat([...chat, message]);
//       setMessage("");
//     }
//   };

//   return (
//     <div>
//       <h1>Chat</h1>
//       <div>
//         {chat.map((message, index) => (
//           <p key={index}>{message}</p>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={message} onChange={handleInputChange} />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };



//     )
// }

// export default Chat; 