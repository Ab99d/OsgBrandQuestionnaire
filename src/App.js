import BrandIdentityQuestionnaire from './BrandIdentityQuestionnaire'
import BrandIdentityQuestionnaireAR from './BrandIdentityQuestionnaireAR';
import { HashRouter as Router,
Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={BrandIdentityQuestionnaire} />
        <Route path="/ar" component={BrandIdentityQuestionnaireAR} />
      </div>
    </Router>
  );
}

export default App;
