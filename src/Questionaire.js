import "./App.css";
import Header from "./ui/landing/Header";
import Welcome from "./ui/landing/Welcome";
import QuestionaireStart from "./questionaire/QuestionaireStart";
import QuestionaireBody from "./ui/landing/QuestionaireBody";
function Questionaire() {
  return (
    <div>
      <Header />
      <QuestionaireBody />
    </div>
  );
}

export default Questionaire;
