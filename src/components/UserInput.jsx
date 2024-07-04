console.log("UserInput  File loading....");
export default function UserInput({onChange, userInput}) {

    
  console.log("UserInput component loading....")

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
                onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
                onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <br />
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturns}
            onChange={(event) =>
                onChange("expectedReturns", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
                onChange("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
