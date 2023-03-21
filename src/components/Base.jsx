import Header from './Header';
import Footer from './Footer';

import '../assets/sass/app.scss';

const App = ({ children }) => (
    <>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </>
);

export default App;