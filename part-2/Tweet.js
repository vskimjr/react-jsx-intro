/**
 * A single tweet
 *
 * Props:
 *  date: the DD/MMMM/YYYY of when the tweet was sent
 *  message: the message content of a tweet
 *  name: the name of the user who sent a tweet
 *  username: the username of the user who sent the tweet
 */

function Tweet({ date, message, name, username }) {
  return (
    <div className="tweet">
      <p>{name}</p>
      <p className="username">{username}</p>
      <p className="date">{date}</p>
      <p>{message}</p>
    </div>
  );
}
