import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import TasksBoard from '../components/tasks/board/tasksBoard';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <TasksBoard />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
