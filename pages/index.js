const whereAmI = () => {
    return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
};

const Index = ({ title = 'Hello from Next.js' }) => (
    <div>
        <h1>{title}</h1>
        <p className="App-intro">
            Testing server side rendering:
      </p>
        <h2><code>{whereAmI()}</code></h2>
    </div>
);

export default Index;