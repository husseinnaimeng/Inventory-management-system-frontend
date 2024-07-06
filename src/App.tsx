import './App.css'
import PageContent from './components/content/PageContent';
import Sidebar from './components/partial/sidebar/Sidebar';
import font_size from './settings/gloabl';

function App() {
  return (
    <div className='lg:flex'  style={font_size} >
      <Sidebar />
      <PageContent />
    </div>
  )
}

export default App
