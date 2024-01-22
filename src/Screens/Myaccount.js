import React, { useEffect, useState } from "react";
import McqCard from "../components/Cart";
import GradeScore from "../components/GradeScore";


const My_account = () => {
  const [langData, setLangData] = useState([]);
  const [cat, setCat] = useState("SQL");
  const [difficulty, setDifficulty] = useState("Easy");
  const [cata, setCata] = useState(["SQL", "Code", "DevOps"]);
  const level = ["Easy", "Medium", "Hard"];
  const [datas, setDatas] = useState([]);
  const [sol, setSol] = useState([]);
  const [showGrade, setShowGrade] = useState(false);

  useEffect(() => {
    console.log("Component Rendered");
  });

  const handleCat = (e) => {
    setCat(e.target.value);
  };
  const handleDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await fetch("http://localhost:5000/langData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cat: cat,
        difficulty: difficulty,
      }),
    });

    response = await response.json();
    setLangData(response[0]);
    setCata(response[1]);
    
    // console.log(cata);
    // console.log(langData);
    setSol(new Array(response[0].length).fill(false));
  };

  useEffect(() => {
    let datas = langData.map((answer, index) => {
      const { question, answers, correct_answers } = answer;

      const filteredAnswers = Object.entries(answers)
        .filter(([key, value]) => value !== null)
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

      const correctOptions = Object.keys(correct_answers)
        .filter((key) => correct_answers[key] === "true")
        .map((key) => key.replace("_correct", ""));

      return {
        questionNumber: index + 1,
        question,
        filteredAnswers,
        correctOptions,
      };
    });
    setDatas(datas);
  }, [langData]);

  useEffect(() => {
    console.log(datas);
  }, [datas]);

  const handleAnswerClick = (questionNumber, selectedOption, correctOptions) => {
    // Step 3: Update the sol array based on user's selected option
    const isCorrect = correctOptions.includes(selectedOption);
    setSol((prevSol) => {
      const newSol = [...prevSol];
      newSol[questionNumber - 1] = isCorrect;
      return newSol;
    });
  };

  return (
    <>
      <div className="container-fluid">
        <h2 className="mt-4 mb-3">My Account</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="form-group mt-2">
            <label htmlFor="selectOption">Select Topic:</label>
            <select
              id="selectOption"
              name="Select Topic"
              onChange={handleCat}
              className="form-control"
            >
              {cata.map((topic, index) => (
                <option key={index} value={topic} className="text-success">{topic}</option>
              ))}
            </select>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="difficulty">Difficulty Level:</label>
            <select
              id="difficulty"
              name="Difficulty"
              onChange={handleDifficulty}
              className="form-control"
            >
              {level.map((topic, index) => (
                <option key={index} value={topic} className="text-success">{topic}</option>
              ))}
            </select>
          </div>
          <div className="form-group mt-2">
            <button type="submit" className="btn btn-primary bg-success">Submit</button>
          </div>
        </form>

        {datas.length ? (
          datas.map((data, index) => (
            <McqCard
              key={index}
              questionData={data}
              questionNumber={index + 1}
              onAnswerClick={handleAnswerClick}
            />
          ))
        ) : (
          <div className="alert alert-info">
            Click Submit button to fetch the questions
          </div>
        )}
        {
          <div className="container mt-3 mb-3">
          {datas.length > 0 && (
          <button
            to={'/grade-score'}
            className="btn btn-primary bg-success"
            onClick={() => {
              // Show GradeScore component when the user submits the answers
              console.log(sol);
              setShowGrade(true);
            }}
          >
            Submit Answers
          </button>
        )}
          </div>
        }
        {
          <div className="container">
          {showGrade && <GradeScore sol={sol} /> }
          </div>
        }
      </div>
    </>
  );
};

export default My_account;
