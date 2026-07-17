import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        name="Bhanu"
        school="PVPSIT"
        total={284}
        goal={3}
      />
    </div>
  );
}

export default App;