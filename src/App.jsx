import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";
import { useEffect, useState } from "react";

function App() {
  const [reverses, setReverse] = useState(() => {
    const localReverses = window.localStorage.getItem("reverses");
    if (localReverses !== null) {
      return JSON.parse(localReverses);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const totalReverse = reverses.good + reverses.neutral + reverses.bad;
  const PositiveReverse =
    totalReverse > 0 ? Math.round((reverses.good / totalReverse) * 100) : 0;

  const updateReverse = (reverseType) => {
    setReverse((prevReverses) => ({
      ...prevReverses,
      [reverseType]: prevReverses[reverseType] + 1,
    }));
  };

  const clearReverse = () => {
    setReverse({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    window.localStorage.setItem("reverses", JSON.stringify(reverses));
  }, [reverses]);

  return (
    <>
      <Description />
      <Options
        update={updateReverse}
        totalReverse={totalReverse}
        clear={clearReverse}
      />
      {totalReverse > 0 ? (
        <Feedback
          good={reverses.good}
          neutral={reverses.neutral}
          bad={reverses.bad}
          totalReverse={totalReverse}
          positive={PositiveReverse}
        />
      ) : (
        <Notification totalReverse={totalReverse} />
      )}
    </>
  );
}

export default App;
