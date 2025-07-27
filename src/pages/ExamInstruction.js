import React, { useState, useRef, useEffect } from "react";
import { checkInternetConnection } from "../utils/utils";


const randomQuestions = [
  {
    question: "What is the capital of Pakistan?",
    options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    answer: "Islamabad",
  },
  { question: "2 + 2 equals to?", options: ["3", "4", "5", "6"], answer: "4" },
  {
    question: "Who wrote the national anthem?",
    options: [
      "Allama Iqbal",
      "Hafeez Jullundhri",
      "Ahmed Faraz",
      "Faiz Ahmed Faiz",
    ],
    answer: "Hafeez Jullundhri",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "Fastest land animal?",
    options: ["Tiger", "Cheetah", "Lion", "Leopard"],
    answer: "Cheetah",
  },
  
  {
    question: "Who is known as the Father of the Nation (Pakistan)?",
    options: [
      "Allama Iqbal",
      "Liaquat Ali Khan",
      "Quaid-e-Azam",
      "Zulfiqar Ali Bhutto",
    ],
    answer: "Quaid-e-Azam",
  },
  {
    question: "What is the currency of Pakistan?",
    options: ["Dollar", "Rupee", "Taka", "Dinar"],
    answer: "Rupee",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "Which is the smallest continent?",
    options: ["Europe", "Australia", "South America", "Antarctica"],
    answer: "Australia",
  },

];

const ExamInstruction = () => {
  const [section, setSection] = useState("instructions");
  const [answers, setAnswers] = useState({});
  const [recordedVideo, setRecordedVideo] = useState(null);
  const [examFinished, setExamFinished] = useState(true);
  const [quizResult, setQuizResult] = useState(null);
  const [review, setReview] = useState([]);
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [cameraPermissionSwitchCount, setCameraPermissionSwitchCount] =
 useState(0);
  const [quizTime, setQuizTime] = useState(80);
  const [noInternet, setNoInternet] = useState(false);
  const [cameraPermissionState, setCameraPermissionState] = useState("prompt");
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunks = useRef([]);
  const intervalRef = useRef(null);
  const intervalRefInternet = useRef(null);

  useEffect(() => {
    checkPermissionLoop();
    window.addEventListener("online", () => {
      setNoInternet(false);
    });

    window.addEventListener("offline", () => {
      setNoInternet(true);
    });

    return () => {
      window.removeEventListener("online", () => {});
      window.removeEventListener("offline", () => {});
    };
  }, []);

  useEffect(() => {
    intervalRefInternet.current = setInterval(() => {
      if (!examFinished) {
        checkInternetConnection()
          .then((res) => (res ? setNoInternet(false) : setNoInternet(true)))
          .catch((err) => setNoInternet(true));
      }
    }, 3000);

    return () => {
      if (intervalRefInternet.current) {
        clearInterval(intervalRefInternet.current);
        intervalRefInternet.current = null;
        setNoInternet(false);
      }
    };
  }, [examFinished]);

  useEffect(() => {
    if (section === "exam" && quizTime > 0) {
      intervalRef.current = setInterval(() => {
        setQuizTime((prev) => prev - 1);
      }, 1000);
    }
    if (quizTime === 0) {
      handleSubmit();
    }
    return () => clearInterval(intervalRef.current);
  }, [section, quizTime]);

  useEffect(() => {
    if (!examFinished)
      window.addEventListener("visibilitychange", handleTabSwitch);
    return () =>
      window.removeEventListener("visibilitychange", handleTabSwitch);
  }, [tabSwitchCount, examFinished]);

  const checkPermissionLoop = () => {
    navigator.permissions.query({ name: "camera" }).then((status) => {
      status.onchange = () => {
        if (status.state !== cameraPermissionState) {
          if (status.state === "denied") {
            alert(
              "Camera access is required for this feature. Please enable it."
            );
            stopCameraAndRecording();
          } else if (status.state === "granted") {
            startCameraAndRecording();
          }
          setCameraPermissionState(status.state);
        }
      };
    });
  };

  const checkCameraPermission = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        // Use or close the stream as needed
        setSection("exam");
        startCameraAndRecording();
      })
      .catch((error) => {
        if (error.name === "NotAllowedError") {
          alert(
            "Camera access is required for this feature. Please enable it in your browser settings."
          );
        } else {
          console.error("Error accessing camera:", error);
        }
        setCameraPermissionState("denied");
      });
  };

  const handleStartExam = () => {
    const confirmed = window.confirm("Are you ready to start the exam?");
    if (confirmed) {
      checkCameraPermission();
    }
  };

  const handleOptionChange = (qIndex, selectedOption) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: selectedOption }));
  };

  const handleSubmit = () => {
    stopCameraAndRecording();
    let score = 0;
    let reviewList = [];

    randomQuestions.forEach((q, idx) => {
      const userAnswer = answers[idx];
      const correct = userAnswer === q.answer;
      if (correct) score += 1;

      reviewList.push({
        question: q.question,
        correctAnswer: q.answer,
        userAnswer: userAnswer || "No Answer",
        isCorrect: correct,
      });
    });

    setQuizResult(`🎯 You scored ${score} out of ${randomQuestions.length}`);
    setReview(reviewList);
    onSubmitResult({ studentId: "student123", score });
    setSection("thankyou");
  };

  const onSubmitResult = (result) => {
    console.log(result);
  };

  const startCameraAndRecording = async () => {
    try {
      switch (cameraPermissionSwitchCount) {
        case 1:
          alert("⚠️ Don't switch turn off your camera again!");
          break;
        case 2:
          alert("⚠️ Camera switch last warning!");
          break;
        case 3:
          {
            alert("❌ Exam terminated due to multiple camera switches.");
            setQuizTime(0);
            setSection("thankyou");
          }
          break;
        default:
          break;
      }

      setCameraPermissionSwitchCount(cameraPermissionSwitchCount + 1);
      setExamFinished(false);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunks.current.push(event.data);
        }
      };
      mediaRecorderRef.current.start();
    } catch (err) {
      console.error("Error accessing webcam: ", err);
      alert("Could not access camera. Please allow camera permission.");
    }
  };

  const stopCameraAndRecording = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }

    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(recordedChunks.current, { type: "video/webm" });
        const videoURL = URL.createObjectURL(blob);
        setRecordedVideo(videoURL);
        setExamFinished(true);
      };
      mediaRecorderRef.current.stop();
    }
  };

  const handleTabSwitch = () => {
    if (document.hidden) {
      setTabSwitchCount((prev) => prev + 1);
    } else {
      switch (tabSwitchCount) {
        case 1:
          alert("⚠️ Don't switch tabs again!");
          break;
        case 2:
          alert("⚠️ Tab switch last warning!");
          break;
        case 3:
          {
            alert("❌ Exam terminated due to multiple tab switches.");
            stopCameraAndRecording();
            setQuizTime(0);
            setSection("thankyou");
          }
          break;
        default:
          break;
      }
    }
  };

  if (section === "exam") {
    return (
      <div style={styles.examScreen}>
        <div>
          <h2 style={{ fontSize: 40, color: 'black', marginBottom: 10 }}>⏱️ Exam - Time Left: {quizTime}s</h2>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            width="300"
            height="200"
            style={styles.video}
          />
        </div>
        <div style={styles.questionsContainer}>
          {randomQuestions.map((q, idx) => (
            <div key={idx} style={styles.questionBlock}>
              <p style={styles.question}>{q.question}</p>
              {q.options.map((option, oidx) => (
                <label key={oidx} style={styles.option}>
                  <input
                    type="radio"
                    name={`question-${idx}`}
                    value={option}
                    onChange={() => handleOptionChange(idx, option)}
                    checked={answers[idx] === option}
                    disabled={cameraPermissionState == "denied" || noInternet}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <button onClick={handleSubmit} style={styles.button}>
            🚀 Submit Quiz
          </button>
        </div>
      </div>
    );
  }

  if (section === "thankyou") {
    return (
      <div style={styles.container}>
        <div>
          <h2>✅ Exam Finished</h2>
          <p>{quizResult}</p>
          {recordedVideo && (
            <>
              <h3>📹 Your Exam Recording</h3>
              <video
                src={recordedVideo}
                controls
                width="300"
                height="200"
                style={styles.video}
              />
            </>
          )}
        </div>
        <div style={styles.questionsContainer}>
          <h3>🧾 Review Answers:</h3>
          {review.map((item, idx) => (
            <div key={idx} style={styles.reviewBlock}>
              <p>
                <strong>Q:</strong> {item.question}
              </p>
              <p>
                <strong>Your Answer:</strong> {item.userAnswer}
              </p>
              <p>
                <strong>Correct Answer:</strong> {item.correctAnswer}
              </p>
              <p
                style={{
                  color: item.isCorrect ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {item.isCorrect ? "✅ Correct" : "❌ Wrong"}
              </p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={styles.instructionsContainer}>
      <h2 style={styles.heading}>📝 Exam Instructions</h2>
      <ul style={styles.instructions}>
        <li>📷 Ensure your webcam is working.</li>
        <li>🔇 Sit in a quiet environment.</li>
        <li>🧍‍♀️ Your face must be clearly visible.</li>
        <li>🚫 Don't switch tabs or minimize the window.</li>
      </ul>
      <button onClick={handleStartExam} style={styles.button}>
        🎯 Start Exam
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    margin: "50px auto",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.1)",
    background: "linear-gradient(to bottom right,rgb(214, 226, 234), #a9c9ff)",
    fontFamily: '"Poppins", sans-serif',
    color: "black",
    boxSizing: "border-box",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  },
  instructionsContainer: {
    width: "500px",
    margin: "50px auto",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.1)",
    background: "linear-gradient(to bottom right, #124463,#a9c9ff)",
    fontFamily: '"Poppins", sans-serif',
    color:"#fdfeff",
    boxSizing: "border-box",
  },

  examScreen: {

    width: "100%",
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 20px",
    background: "linear-gradient(to bottom right, #124463, #a9c9ff)",
    borderRadius: "20px",
    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.1)",
    fontFamily: '"Poppins", sans-serif',
    minHeight: "100vh",
    overflowY: "auto",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "20px",
  },
  questionsContainer: {
    overflowY: "scroll",
    height: "90vh",
  },
  heading: {
    fontSize: "28px",
    textAlign: "center",
    marginBottom: "30px",
    color: "#fdfeff",
    fontWeight: "700",
  },
  instructions: {
    listStyleType: "disc",
    paddingLeft: "20px",
    marginBottom: "30px",
    color: "#fdfeff",
    fontSize: "16px",
    lineHeight: "1.8",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "16px",
    fontSize: "18px",
    background: "linear-gradient(to right, #3498db, #2980b9)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "600",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    marginTop: "20px",
  },
  video: {
    borderRadius: "12px",
    marginBottom: "25px",
    border: "2px solid #ddd",
  },
  questionBlock: {
    marginBottom: "30px",
    padding: "20px",
    border: "1px solid #eaeaea",
    borderRadius: "12px",
    backgroundColor: "#fcfcfc",
  },
  question: {
    fontWeight: "600",
    fontSize: "18px",
    marginBottom: "12px",
  },
  option: {
    display: "block",
    padding: "6px 0",
    fontSize: "16px",
    cursor: "pointer",
  },
  reviewBlock: {
    marginBottom: "25px",
    padding: "20px",
    backgroundColor: "#f5f6fa",
    borderLeft: "6px solid #2e86de",
    borderRadius: "12px",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.05)",
  },
};

export default ExamInstruction;
