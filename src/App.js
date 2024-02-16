import logo from './logo.svg';
import '@aws-amplify/ui-react/styles.css';

import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <div className="z-10 max-w-5xl w-full flex items-center justify-center lg:flex">
        <h1 className="text-center text-white">Hello World!</h1>
      </div>
    </main>
  );
}

export default withAuthenticator(App);
