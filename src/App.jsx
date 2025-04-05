import Footer from "./components/Footer";
import Header from "./components/Header";
import {useForm} from "react-hook-form";
import React from "react";
import { useEffect } from "react";


function App() {

  const apikey = "AIzaSyCrOo1Bp_f4ZCBHo52x2-KBwhi2bWYZTqU";
  const [input, setInput] = React.useState("");
  const [result, setResult] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit } = useForm();

  
  // const onSubmit = async (data) => {
  //   const inputText = data.inputText;
  //   setInput(inputText);
  //   console.log("Input:", input);

  //   try {
  //     const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apikey}`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         "contents": [{
  //           "parts": [{ "text": `You are a scientific calculator. Answer this question precisely with calculation: ${input}` }]
  //         }]
  //       }),
  //     });
  //     const data = await response.json();
  //     console.log("Response:", data);
  //     const responseText = data.candidates[0].content?.parts[0].text;
  //     // console.log("Response Text:", responseText);
  //     let clearedText = responseText;
  //     // console.log("Cleared Text:", clearedText);
  //     if(clearedText) {
  //       setResult(clearedText);
  //     }
  //     else {
  //       setResult("No calculation found.");
  //     }
  //     setLoading(false);


  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  
  // };
  useEffect(() => {
    if (input) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apikey}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "contents": [{
                "parts": [{ "text": `You are a scientific calculator. Answer this question precisely with calculation: ${input}
                  if you get input other than calculation you should answer I cannot answer this only Mathmetical Calculations allowed` }]
              }]
            }),
          });
          const data = await response.json();
          console.log("Response:", data);
          const responseText = data.candidates[0].content?.parts[0].text;
          let clearedText = responseText;
          if (clearedText) {
            setResult(clearedText);
          } else {
            setResult("No calculation found.");
          }
        } catch (error) {
          console.error("Error:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [input]);

  const onSubmit = (data) => {
    const inputText = data.inputText;
    setInput(inputText);
    console.log("Input:", inputText);
  };


  return(
    <> 
    <Header />
    <main className="bg-gray-100 min-h-screen">
      <section>
    <div className="flex flex-col items-center justify-center p-6  ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md"
      >
        <label htmlFor="inputText" className="block text-lg font-medium text-gray-700 mb-2">
          Enter your input:
        </label>
        <textarea
          {...register("inputText", { required: true })}
          id="inputText"
          type="text"
          placeholder="Type that you want to Calculate here..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Calculate
        </button>
      </form>
      {loading && (
        <div className="mt-4 p-4 bg-yellow-100 text-yellow-700 rounded-lg shadow">
          <p className="font-medium">Loading...</p>
        </div>
      )}
      {result && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg shadow">
          <p className="font-medium">Result: {result}</p>
        </div>
      )}
    </div>
    </section>
    </main>
    <Footer />
  
  </>);
}

export default App;
