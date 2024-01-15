/** Main app file to render out components to app entry point
 *
 * Renders out user tweets
 *
*/


function App() {
  return (
    <div>
      <Tweet
        name="Victor"
        username="vskimjr"
        message="Hello world! I am a Knicks fan"
        date={new Date().toDateString()}
      />
      <Tweet
        name="Nate"
        username="nrdevs"
        message="Hello world! I am a Bulls fan"
        date={new Date().toDateString()}
      />
      <Tweet
        name="Diane"
        username="tuckerdiane"
        message="what are sports?"
        date={new Date().toDateString()}
      />
    </div>
  );
}