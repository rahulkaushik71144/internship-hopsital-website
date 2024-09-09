import { useState, useEffect, useCallback } from "react";
import icon1 from "../assets/Svg/icon1.svg";
import { useNavigate } from "react-router-dom";
import "../CSS/SearchBar.css";

const BASE_URL = "http://192.168.156.209:5000";

// Debounce function to limit the rate of API calls
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const Search = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [results, setResults] = useState({ doctors: [], specialities: [] });

  const [selectedSuggestion, setSelectedSuggestion] = useState(""); // To store the selected suggestion
  const [selectedDoctor, setSelectedDoctor] = useState(null); // To store the selected doctor

  const Navigate = useNavigate();

  // Fetch search results from the backend
  const fetchResults = useCallback(async (searchQuery) => {
    if (searchQuery.trim() === "") {
      setError("Search query cannot be empty.");
      setResults({ doctors: [], specialities: [] });
      return;
    }

    try {
      const response = await fetch(
        `${BASE_URL}/search?q=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();
      setResults(data);
      setError("");
    } catch (err) {
      console.error("Error fetching results:", err);
      setError("An error occurred while searching.");
    }
  }, []);

  // Fetch autocomplete suggestions from the backend
  const fetchSuggestions = useCallback(async () => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `${BASE_URL}/autocomplete?q=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      setSuggestions(data);
      setShowSuggestions(true);
    } catch (err) {
      console.error("Error fetching suggestions:", err);
      setSuggestions([]);
    }
  }, [query]);

  // Debounced function to fetch suggestions
  const debouncedFetchSuggestions = useCallback(
    debounce(fetchSuggestions, 300),
    [fetchSuggestions]
  );

  useEffect(() => {
    debouncedFetchSuggestions();
  }, [query, debouncedFetchSuggestions]);

  // Effect to fetch results when query changes
  useEffect(() => {
    if (query.trim() !== "") {
      fetchResults(query);
    } else {
      setResults({ doctors: [], specialities: [] });
    }
  }, [query, fetchResults]);

  // Handle search button click
  const handleSearch = () => {
    // Use the selected suggestion if available, otherwise use the current query
    fetchResults(selectedSuggestion || query);
    setShowSuggestions(false);
  };

  // Handle key down event for Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission
      handleSearch();
    }
  };

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    window.history.pushState({ doctor }, "", `#${doctor.id}`);
  };

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.doctor) {
        setSelectedDoctor(event.state.doctor);
      } else {
        setSelectedDoctor(null);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="flex flex-col items-center relative mt-8">
      <div className="flex z-2">
        <input
          type="text"
          className="search-input w-[350px] md:w-[400px] lg:w-[600px] bg-white pl-6 lg:pl-8 py-6 pr-[50px] lg:pr-[60px] text-md lg:text-2xl outline-none border border-gray-300 rounded-full transition-colors shadow-xl"
          placeholder="Search By Doctors or Specialities"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown} // Attach keydown event handler
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
          style={{
            backgroundImage: `url(${icon1})`,
            backgroundPosition: "right 20px center", // Positioning the icon inside the input
            backgroundRepeat: "no-repeat",
            // Size of the icon
          }}
        />
      </div>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {selectedDoctor ? (
        <div className="mt-4 p-4 border border-blue-500 rounded-lg">
          <h2 className="text-lg font-semibold">{selectedDoctor.name}</h2>
          <p>Specialization: {selectedDoctor.specialization}</p>
        </div>
      ) : (
        (results.doctors.length > 0 || results.specialities.length > 0) && (
          <div className="h-[420px] w-[350px] md:w-[400px] lg:w-[600px] overflow-y-scroll translate-y-[2rem] lg:translate-y-[2rem] absolute bg-white p-14 rounded-xl z-1">
            {results.doctors.length > 0 && (
              <>
                <h2 className="text-lg font-semibold">Doctors</h2>
                <ul className="mt-2">
                  {results.doctors.map((doctor) => (
                    <li
                      key={doctor.id}
                      className="p-2 cursor-pointer list-none hover:bg-pink-500 hover:text-white hover:rounded-xl"
                    >
                      <a
                        className="hover:border-b-2 border-pink-500"
                        href="https://ujalacygnus.com/departments/oncology/"
                      >
                        {doctor.name} - {doctor.specialization}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {results.specialities.length > 0 && (
              <>
                <h2 className="text-lg font-semibold mt-4">Specialities</h2>
                <ul className="mt-2">
                  {results.specialities.map((speciality) => (
                    <li
                      key={speciality.id}
                      className="p-2 cursor-pointer list-none hover:bg-pink-500 hover:text-white hover:rounded-xl"
                    >
                      <a
                        className="hover:border-b-2 border-pink-500"
                        href="https://ujalacygnus.com/departments/oncology/"
                      >
                        {speciality.speciality}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )
      )}
    </div>
  );
};
export default Search;
