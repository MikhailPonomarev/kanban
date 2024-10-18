import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import TasksBoard from '../components/tasks/board/tasksBoard';

function App() {
    return (
        <div className="App">
            <Header />
            <TasksBoard />
            <Footer />
        </div>
    );
}

export default App;
