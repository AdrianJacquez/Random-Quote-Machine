import "./App.css";
import { useState, useEffect } from "react";
import { Icon } from "react-icons-kit";
import { quoteSerifLeft as quoteLeft } from "react-icons-kit/iconic/quoteSerifLeft";
import { twitter } from "react-icons-kit/entypo/twitter";
import { linkedin } from "react-icons-kit/entypo/linkedin";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    // Función para cargar las citas desde la URL proporcionada
    const fetchQuotes = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        );
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.quotes.length);
        const randomQuote = data.quotes[randomIndex];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    // Llama a la función para cargar las citas al montar el componente
    fetchQuotes();
  }, []);

  const handleNewQuote = () => {
    console.log("diste click");
    // Función para cargar las citas desde la URL proporcionada
    const fetchQuotes = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        );
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.quotes.length);
        const randomQuote = data.quotes[randomIndex];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    // Llama a la función para cargar las citas al montar el componente
    fetchQuotes();
  };
  return (
    <>
      <div id="quote-box">
        <span id="text" type="text">
          <Icon size={30} icon={quoteLeft} style={{ marginRight: "10px" }} />
          {quote}
        </span>

        <div id="autorBox">
          <span id="author" type="text">
            -{author}
          </span>
        </div>

        <div id="botones">
          <div id="links">
            <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
              <Icon size={32} icon={twitter}></Icon>
            </a>

            <a
              id="linkedin"
              href="https://www.linkedin.com/in/jacquez-lerma-0a06852b7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2Fu4NqhHPRBihqKJrPSatzg%3D%3D"
              target="_blank"
            >
              <Icon size={32} icon={linkedin}></Icon>
            </a>
          </div>

          <button id="new-quote" onClick={handleNewQuote}>
            New quote
          </button>
        </div>
      </div>

      <a id="firma" href="https://github.com/AdrianJacquez" target="_blank">
        By Adrian Jacquez
      </a>
    </>
  );
}

export default App;
