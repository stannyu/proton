// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <p>My unicorn title: 🦄🚀, and many more</p>
      <h2>now I'll add something else! 🔥</h2>
      <NxWelcome title="proton-client" />
      <div />
    </>
  );
}

export default App;
