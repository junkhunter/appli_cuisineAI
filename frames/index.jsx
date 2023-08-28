import React, { useState } from "react";
import ReactDOMClient from "react-dom/client";

import { Dpart } from "./frame1/Depart";
import { PageBienvenue as PageBienvenueFrame2 } from "./frame2/PageBienvenue";
import { DQuestionnaire } from "./frame3/DQuestionnaire";
import { DFeedSuggestion } from "./frame4/DFeedSuggestion";
import { DPersonnalisation } from "./frame5/DPersonnalisation";
import { DListeDeCourse } from "./frame6/DListeDeCourse";
import { DMealPlan } from "./frame7/DMealPlan";
import { DGroupe } from "./frame8/DGroupe";
import { SignIn } from "./frame9/SignIn";
import { SignUp } from "./frame10/SignUp";
import { PageBienvenue as PageBienvenueFrame11 } from "./frame11/PageBienvenue";
import { Questionnaire as QuestionnaireFrame12 } from "./frame12/Questionnaire";
import { QMultiChoice } from "./frame13/QMultiChoice";
import { QMultiSelect } from "./frame14/QMultiSelect";
import { Questionnaire4 } from "./frame15/Questionnaire4";
import { Questionnaire5 } from "./frame16/Questionnaire5";
import { PageDAccueil } from "./frame17/PageDAccueil";
import { Filtres } from "./frame18/Filtres";
import { Like } from "./frame19/Like";


const App = () => {
  
  const [currentFrame, setCurrentFrame] = useState(18);
  

  const goToNextFrame = () => {
    console.log('next')
    setCurrentFrame((prevFrame) => prevFrame + 1);
  };

  const goToPreviousFrame = () => {
    console.log('next')

    setCurrentFrame((prevFrame) => prevFrame - 1);
  };

  const goToFrame = (x) => {
      setCurrentFrame(x);
  };

  return (
    <div>
      {currentFrame === 0 && <Dpart onClick={goToNextFrame}/>}
      {currentFrame === 1 && <PageBienvenueFrame2 onNext={goToNextFrame} />}
      {currentFrame === 2 && <DQuestionnaire onNext={goToNextFrame} />}
      {currentFrame === 3 && <DFeedSuggestion onNext={goToNextFrame} />}
      {currentFrame === 4 && <DPersonnalisation onNext={goToNextFrame} />}
      {currentFrame === 5 && <DListeDeCourse onNext={goToNextFrame} />}
      {currentFrame === 6 && <DMealPlan onNext={goToNextFrame} />}
      {currentFrame === 7 && <DGroupe onNext={goToNextFrame} />}
      {currentFrame === 8 && <SignIn onNext={() => {goToFrame(10)}} onSwitch={goToNextFrame}/>}
      {currentFrame === 9 && <SignUp onNext={() => {goToFrame(10)}} onSwitch={goToPreviousFrame}/>}
      {currentFrame === 10 && <PageBienvenueFrame11 onNext={goToNextFrame} />}
      {currentFrame === 11 && <QuestionnaireFrame12 onClick={goToNextFrame} />}
      {currentFrame === 12 && <QMultiChoice onNext={goToNextFrame} />}
      {currentFrame === 13 && <QMultiSelect onNext={goToNextFrame} />}
      {currentFrame === 14 && <Questionnaire4 onClick={goToNextFrame} />}
      {currentFrame === 15 && <Questionnaire5 onNext={goToNextFrame} />}
      {currentFrame === 16 && <PageDAccueil onNext={goToNextFrame} />}
      {currentFrame === 17 && <Filtres onNext={goToNextFrame} />}
      {currentFrame === 18 && <Like onNext={goToNextFrame} />}
    </div>
  );
};
  
const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<App />);