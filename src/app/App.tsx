import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import StyledTasksBoard from '../components/tasks/tasksBoard';

function App() {
  return (
    <div className="App">
      <Header />
      <StyledTasksBoard />
      <Footer />
    </div>
  );
}

export default App;
